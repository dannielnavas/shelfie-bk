-- AlterTable: permitir password_hash NULL (usuarios solo Google) y añadir firebase_uid
ALTER TABLE "Usuario" ALTER COLUMN "password_hash" DROP NOT NULL;
ALTER TABLE "Usuario" ADD COLUMN IF NOT EXISTS "firebase_uid" VARCHAR(128);
CREATE UNIQUE INDEX IF NOT EXISTS "Usuario_firebase_uid_key" ON "Usuario"("firebase_uid");
