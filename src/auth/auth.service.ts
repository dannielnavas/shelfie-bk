import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { FirebaseService } from './firebase.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

const SALT_ROUNDS = 10;

export interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly firebaseService: FirebaseService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('A user with this email already exists');
    }
    const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        passwordHash,
        planId: 1,
      },
      select: {
        userId: true,
        name: true,
        email: true,
        planId: true,
        xpPoints: true,
        level: true,
        readingStreakDays: true,
      },
    });
    const payload: JwtPayload = { sub: user.userId, email: user.email };
    const accessToken = this.jwtService.sign(payload);
    return { user, accessToken };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (!user.passwordHash) {
      throw new UnauthorizedException(
        'This account uses Google sign-in. Use the "Sign in with Google" button.',
      );
    }
    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = { sub: user.userId, email: user.email };
    const accessToken = this.jwtService.sign(payload);
    const { passwordHash: _, ...safe } = user;
    return { user: safe, accessToken };
  }

  async validateUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { userId },
      select: {
        userId: true,
        name: true,
        email: true,
        planId: true,
        xpPoints: true,
        level: true,
        readingStreakDays: true,
        lastReadAt: true,
      },
    });
    return user ?? null;
  }

  async loginWithGoogle(idToken: string) {
    if (!this.firebaseService.isConfigured()) {
      throw new UnauthorizedException(
        'Google sign-in is not configured on the server.',
      );
    }
    const decoded = await this.firebaseService.verifyIdToken(idToken);
    if (!decoded.email) {
      throw new UnauthorizedException(
        'Google token does not include email. Grant email permissions.',
      );
    }

    let user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { firebaseUid: decoded.uid },
          { email: decoded.email },
        ],
      },
      select: {
        userId: true,
        name: true,
        email: true,
        planId: true,
        xpPoints: true,
        level: true,
        readingStreakDays: true,
        firebaseUid: true,
      },
    });

    if (user) {
      if (!user.firebaseUid) {
        await this.prisma.user.update({
          where: { userId: user.userId },
          data: { firebaseUid: decoded.uid },
        });
      }
    } else {
      user = await this.prisma.user.create({
        data: {
          name: decoded.name ?? decoded.email,
          email: decoded.email,
          firebaseUid: decoded.uid,
          planId: 1,
        },
        select: {
          userId: true,
          name: true,
          email: true,
          planId: true,
          xpPoints: true,
          level: true,
          readingStreakDays: true,
          firebaseUid: true,
        },
      });
    }

    if (!user) {
      throw new UnauthorizedException('Could not create or retrieve user.');
    }

    const payload: JwtPayload = {
      sub: user.userId,
      email: user.email,
    };
    const accessToken = this.jwtService.sign(payload);
    return { user, accessToken };
  }
}
