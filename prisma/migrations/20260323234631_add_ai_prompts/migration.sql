-- AlterTable
ALTER TABLE "achievements" RENAME CONSTRAINT "Logro_pkey" TO "achievements_pkey";

-- AlterTable
ALTER TABLE "ai_recommendations" RENAME CONSTRAINT "RecomendacionIA_pkey" TO "ai_recommendations_pkey";

-- AlterTable
ALTER TABLE "book_notes" RENAME CONSTRAINT "NotaLibro_pkey" TO "book_notes_pkey";

-- AlterTable
ALTER TABLE "books" RENAME CONSTRAINT "Libro_pkey" TO "books_pkey";

-- AlterTable
ALTER TABLE "monthly_ai_usage" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable (dos sentencias: combinar RENAME CONSTRAINT + ALTER COLUMN falla en algunos Postgres)
ALTER TABLE "plans" RENAME CONSTRAINT "Plan_pkey" TO "plans_pkey";
ALTER TABLE "plans" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "user_achievements" RENAME CONSTRAINT "logros_usuario_pkey" TO "user_achievements_pkey";

-- AlterTable
ALTER TABLE "users" RENAME CONSTRAINT "Usuario_pkey" TO "users_pkey";

-- CreateTable
CREATE TABLE "ai_prompts" (
    "prompt_key" VARCHAR(80) NOT NULL,
    "content" TEXT NOT NULL,
    "description" VARCHAR(255),
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "ai_prompts_pkey" PRIMARY KEY ("prompt_key")
);

-- RenameForeignKey
ALTER TABLE "ai_recommendations" RENAME CONSTRAINT "RecomendacionIA_usuario_id_fkey" TO "ai_recommendations_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "book_notes" RENAME CONSTRAINT "NotaLibro_libro_id_fkey" TO "book_notes_book_id_fkey";

-- RenameForeignKey
ALTER TABLE "book_notes" RENAME CONSTRAINT "NotaLibro_usuario_id_fkey" TO "book_notes_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "books" RENAME CONSTRAINT "Libro_usuario_id_fkey" TO "books_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "user_achievements" RENAME CONSTRAINT "logros_usuario_logro_id_fkey" TO "user_achievements_achievement_id_fkey";

-- RenameForeignKey
ALTER TABLE "user_achievements" RENAME CONSTRAINT "logros_usuario_usuario_id_fkey" TO "user_achievements_user_id_fkey";

-- RenameForeignKey
ALTER TABLE "users" RENAME CONSTRAINT "Usuario_plan_id_fkey" TO "users_plan_id_fkey";

-- RenameIndex
ALTER INDEX "Usuario_email_key" RENAME TO "users_email_key";

-- RenameIndex
ALTER INDEX "Usuario_firebase_uid_key" RENAME TO "users_firebase_uid_key";
