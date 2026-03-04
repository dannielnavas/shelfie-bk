-- AlterTable: add new columns to plans (slug, description, is_paid, created_at, updated_at)
ALTER TABLE "plans" ADD COLUMN IF NOT EXISTS "slug" VARCHAR(50);
ALTER TABLE "plans" ADD COLUMN IF NOT EXISTS "description" VARCHAR(255);
ALTER TABLE "plans" ADD COLUMN IF NOT EXISTS "is_paid" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "plans" ADD COLUMN IF NOT EXISTS "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE "plans" ADD COLUMN IF NOT EXISTS "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

CREATE UNIQUE INDEX IF NOT EXISTS "plans_slug_key" ON "plans"("slug");

-- CreateTable: monthly_ai_usage for tracking AI usage per user per month
CREATE TABLE IF NOT EXISTS "monthly_ai_usage" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "monthly_ai_usage_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "monthly_ai_usage_user_id_year_month_key" ON "monthly_ai_usage"("user_id", "year", "month");

ALTER TABLE "monthly_ai_usage" ADD CONSTRAINT "monthly_ai_usage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
