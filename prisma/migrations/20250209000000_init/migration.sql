-- CreateEnum
CREATE TYPE "EstadoLectura" AS ENUM ('pendiente', 'en lectura', 'leido');

-- CreateTable
CREATE TABLE "Plan" (
    "plan_id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "limite_libros" INTEGER,
    "limite_ia_mensual" INTEGER,
    "precio" DECIMAL(10,2) NOT NULL DEFAULT 0,

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("plan_id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "usuario_id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "plan_id" INTEGER NOT NULL DEFAULT 1,
    "puntos_xp" INTEGER NOT NULL DEFAULT 0,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "racha_lectura_dias" INTEGER NOT NULL DEFAULT 0,
    "ultima_lectura" TIMESTAMP,
    "fecha_registro" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "Libro" (
    "libro_id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "isbn" VARCHAR(13),
    "titulo" VARCHAR(255) NOT NULL,
    "autor" VARCHAR(255),
    "descripcion" TEXT,
    "imagen_url" TEXT,
    "genero" VARCHAR(50),
    "paginas_totales" INTEGER,
    "paginas_leidas" INTEGER NOT NULL DEFAULT 0,
    "es_adquirido" BOOLEAN NOT NULL DEFAULT true,
    "estado_lectura" "EstadoLectura" NOT NULL DEFAULT 'pendiente',
    "esta_prestado" BOOLEAN NOT NULL DEFAULT false,
    "prestado_a_nombre" VARCHAR(100),
    "fecha_prestamo" DATE,
    "fecha_agregado" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("libro_id")
);

-- CreateTable
CREATE TABLE "NotaLibro" (
    "nota_id" SERIAL NOT NULL,
    "libro_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "contenido" TEXT NOT NULL,
    "pagina_referencia" INTEGER,
    "es_cita_destacada" BOOLEAN NOT NULL DEFAULT false,
    "fecha_creacion" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NotaLibro_pkey" PRIMARY KEY ("nota_id")
);

-- CreateTable
CREATE TABLE "RecomendacionIA" (
    "recomendacion_id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "prompt_enviado" TEXT NOT NULL,
    "respuesta_ia_json" JSONB,
    "modelo_ia" VARCHAR(50),
    "fecha_consulta" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecomendacionIA_pkey" PRIMARY KEY ("recomendacion_id")
);

-- CreateTable
CREATE TABLE "Logro" (
    "logro_id" SERIAL NOT NULL,
    "nombre" VARCHAR(100),
    "descripcion" TEXT,
    "puntos_recompensa" INTEGER,

    CONSTRAINT "Logro_pkey" PRIMARY KEY ("logro_id")
);

-- CreateTable
CREATE TABLE "logros_usuario" (
    "usuario_id" INTEGER NOT NULL,
    "logro_id" INTEGER NOT NULL,
    "fecha_obtencion" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "logros_usuario_pkey" PRIMARY KEY ("usuario_id","logro_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "Plan"("plan_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Libro" ADD CONSTRAINT "Libro_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotaLibro" ADD CONSTRAINT "NotaLibro_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "Libro"("libro_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotaLibro" ADD CONSTRAINT "NotaLibro_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecomendacionIA" ADD CONSTRAINT "RecomendacionIA_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logros_usuario" ADD CONSTRAINT "logros_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "logros_usuario" ADD CONSTRAINT "logros_usuario_logro_id_fkey" FOREIGN KEY ("logro_id") REFERENCES "Logro"("logro_id") ON DELETE RESTRICT ON UPDATE CASCADE;
