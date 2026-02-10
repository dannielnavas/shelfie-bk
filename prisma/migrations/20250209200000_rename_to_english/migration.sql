-- Rename all tables and columns from Spanish to English (preserves data)

-- 1. Plan -> plans
ALTER TABLE "Plan" RENAME COLUMN "nombre" TO "name";
ALTER TABLE "Plan" RENAME COLUMN "limite_libros" TO "book_limit";
ALTER TABLE "Plan" RENAME COLUMN "limite_ia_mensual" TO "monthly_ai_limit";
ALTER TABLE "Plan" RENAME COLUMN "precio" TO "price";
ALTER TABLE "Plan" RENAME TO "plans";

-- 2. Usuario -> users
ALTER TABLE "Usuario" RENAME COLUMN "usuario_id" TO "user_id";
ALTER TABLE "Usuario" RENAME COLUMN "nombre" TO "name";
ALTER TABLE "Usuario" RENAME COLUMN "puntos_xp" TO "xp_points";
ALTER TABLE "Usuario" RENAME COLUMN "nivel" TO "level";
ALTER TABLE "Usuario" RENAME COLUMN "racha_lectura_dias" TO "reading_streak_days";
ALTER TABLE "Usuario" RENAME COLUMN "ultima_lectura" TO "last_read_at";
ALTER TABLE "Usuario" RENAME COLUMN "fecha_registro" TO "registered_at";
ALTER TABLE "Usuario" RENAME TO "users";

-- 3. Reading status enum and Libro -> books
CREATE TYPE "reading_status" AS ENUM ('pending', 'in_progress', 'read');
ALTER TABLE "Libro" ADD COLUMN "reading_status" "reading_status";
UPDATE "Libro" SET "reading_status" = CASE "estado_lectura"::text
  WHEN 'pendiente' THEN 'pending'::reading_status
  WHEN 'en lectura' THEN 'in_progress'::reading_status
  WHEN 'leido' THEN 'read'::reading_status
END;
ALTER TABLE "Libro" ALTER COLUMN "reading_status" SET NOT NULL;
ALTER TABLE "Libro" DROP COLUMN "estado_lectura";
DROP TYPE "EstadoLectura";

ALTER TABLE "Libro" RENAME COLUMN "libro_id" TO "book_id";
ALTER TABLE "Libro" RENAME COLUMN "usuario_id" TO "user_id";
ALTER TABLE "Libro" RENAME COLUMN "titulo" TO "title";
ALTER TABLE "Libro" RENAME COLUMN "autor" TO "author";
ALTER TABLE "Libro" RENAME COLUMN "descripcion" TO "description";
ALTER TABLE "Libro" RENAME COLUMN "imagen_url" TO "image_url";
ALTER TABLE "Libro" RENAME COLUMN "genero" TO "genre";
ALTER TABLE "Libro" RENAME COLUMN "paginas_totales" TO "total_pages";
ALTER TABLE "Libro" RENAME COLUMN "paginas_leidas" TO "pages_read";
ALTER TABLE "Libro" RENAME COLUMN "es_adquirido" TO "is_owned";
ALTER TABLE "Libro" RENAME COLUMN "esta_prestado" TO "is_borrowed";
ALTER TABLE "Libro" RENAME COLUMN "prestado_a_nombre" TO "borrowed_to_name";
ALTER TABLE "Libro" RENAME COLUMN "fecha_prestamo" TO "borrowed_at";
ALTER TABLE "Libro" RENAME COLUMN "fecha_agregado" TO "added_at";
ALTER TABLE "Libro" RENAME TO "books";

-- 4. NotaLibro -> book_notes
ALTER TABLE "NotaLibro" RENAME COLUMN "nota_id" TO "note_id";
ALTER TABLE "NotaLibro" RENAME COLUMN "libro_id" TO "book_id";
ALTER TABLE "NotaLibro" RENAME COLUMN "usuario_id" TO "user_id";
ALTER TABLE "NotaLibro" RENAME COLUMN "contenido" TO "content";
ALTER TABLE "NotaLibro" RENAME COLUMN "pagina_referencia" TO "page_reference";
ALTER TABLE "NotaLibro" RENAME COLUMN "es_cita_destacada" TO "is_highlighted_quote";
ALTER TABLE "NotaLibro" RENAME COLUMN "fecha_creacion" TO "created_at";
ALTER TABLE "NotaLibro" RENAME TO "book_notes";

-- 5. RecomendacionIA -> ai_recommendations
ALTER TABLE "RecomendacionIA" RENAME COLUMN "recomendacion_id" TO "recommendation_id";
ALTER TABLE "RecomendacionIA" RENAME COLUMN "usuario_id" TO "user_id";
ALTER TABLE "RecomendacionIA" RENAME COLUMN "prompt_enviado" TO "prompt_sent";
ALTER TABLE "RecomendacionIA" RENAME COLUMN "respuesta_ia_json" TO "ai_response_json";
ALTER TABLE "RecomendacionIA" RENAME COLUMN "modelo_ia" TO "ai_model";
ALTER TABLE "RecomendacionIA" RENAME COLUMN "fecha_consulta" TO "queried_at";
ALTER TABLE "RecomendacionIA" RENAME TO "ai_recommendations";

-- 6. Logro -> achievements
ALTER TABLE "Logro" RENAME COLUMN "logro_id" TO "achievement_id";
ALTER TABLE "Logro" RENAME COLUMN "nombre" TO "name";
ALTER TABLE "Logro" RENAME COLUMN "descripcion" TO "description";
ALTER TABLE "Logro" RENAME COLUMN "puntos_recompensa" TO "reward_points";
ALTER TABLE "Logro" RENAME TO "achievements";

-- 7. logros_usuario -> user_achievements
ALTER TABLE "logros_usuario" RENAME COLUMN "usuario_id" TO "user_id";
ALTER TABLE "logros_usuario" RENAME COLUMN "logro_id" TO "achievement_id";
ALTER TABLE "logros_usuario" RENAME COLUMN "fecha_obtencion" TO "earned_at";
ALTER TABLE "logros_usuario" RENAME TO "user_achievements";
