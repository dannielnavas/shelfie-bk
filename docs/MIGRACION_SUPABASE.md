# Aplicar migración en Supabase

Si ves un error de Prisma al usar la API (por ejemplo `Invalid this.prisma.usuario.findUnique() invocation` o "relation does not exist"), es que **las tablas aún no existen** en la base de datos.

## Opción 1: SQL en Supabase (recomendado)

1. Entra en tu proyecto en [Supabase](https://supabase.com/dashboard).
2. Ve a **SQL Editor**.
3. Abre el archivo `prisma/migrations/20250209000000_init/migration.sql` de este proyecto.
4. Copia todo el contenido y pégalo en el editor.
5. Ejecuta la consulta (Run).

Después de eso, inserta los planes por defecto:

```bash
pnpm prisma:seed
```

(O ejecuta manualmente los `INSERT` de planes Gratuito y Premium si prefieres).

## Opción 2: Migración con Prisma (conexión directa)

Con Supabase, para `prisma migrate` suele usarse la **URL directa** (sin pooler), porque el pooler puede dar problemas de TLS o de sesión.

1. En Supabase: **Settings → Database**. Copia la **Connection string** en modo **URI** y usa la que **no** lleva `?pgbouncer=true` (o la de "Direct connection").
2. En tu `.env` define una variable para migrar, por ejemplo:
   ```env
   DATABASE_URL="postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:5432/postgres"
   DIRECT_URL="postgresql://postgres.[ref]:[password]@db.[ref].supabase.co:5432/postgres"
   ```
   Y en `prisma/schema.prisma` en el `datasource` puedes usar:
   ```prisma
   datasource db {
     provider  = "postgresql"
     url       = env("DATABASE_URL")
     directUrl = env("DIRECT_URL")
   }
   ```
3. Ejecuta:
   ```bash
   pnpm prisma:migrate
   pnpm prisma:seed
   ```

## Comprobar

Tras crear las tablas y ejecutar el seed, reinicia la API y prueba de nuevo el registro o login. El error de Prisma debería desaparecer.
