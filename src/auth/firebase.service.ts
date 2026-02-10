import { Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';

export interface DecodedIdToken {
  uid: string;
  email?: string;
  name?: string;
  picture?: string;
}

@Injectable()
export class FirebaseService implements OnModuleInit {
  private app: admin.app.App | null = null;

  onModuleInit() {
    if (this.app) return;
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    const pathToServiceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

    if (pathToServiceAccount) {
      this.app = admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        projectId: projectId ?? undefined,
      });
      return;
    }

    if (projectId && clientEmail && privateKey) {
      const key = privateKey.replace(/\\n/g, '\n');
      this.app = admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey: key,
        }),
      });
      return;
    }

    // Sin credenciales (projectId + clientEmail + privateKey o GOOGLE_APPLICATION_CREDENTIALS) no se inicializa.
  }

  isConfigured(): boolean {
    return this.app != null;
  }

  async verifyIdToken(idToken: string): Promise<DecodedIdToken> {
    if (!this.app) {
      throw new Error(
        'Firebase no está configurado. Define FIREBASE_PROJECT_ID y FIREBASE_CLIENT_EMAIL/FIREBASE_PRIVATE_KEY o GOOGLE_APPLICATION_CREDENTIALS.',
      );
    }
    const decoded = await admin.auth(this.app).verifyIdToken(idToken);
    return {
      uid: decoded.uid,
      email: decoded.email ?? undefined,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      name: decoded.name ?? decoded.email ?? undefined,
      picture: decoded.picture ?? undefined,
    };
  }
}
