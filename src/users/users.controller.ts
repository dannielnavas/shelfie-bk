import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  me(@CurrentUser('userId') userId: number) {
    return this.usersService.findById(userId);
  }

  @Patch('me')
  updateMe(@CurrentUser('userId') userId: number, @Body() dto: UpdateUserDto) {
    return this.usersService.update(userId, dto);
  }
}
