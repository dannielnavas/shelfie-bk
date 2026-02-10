# CURLs para consumir la API (Mi Libro App)

Base URL por defecto: `http://localhost:3000/api`

Guarda el `accessToken` que devuelve login y úsalo en `TOKEN` en los endpoints protegidos.

---

## 1. Auth (públicos)

### Registro
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Tu Nombre",
    "email": "tu@email.com",
    "password": "tuPassword123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "tu@email.com",
    "password": "tuPassword123"
  }'
```
*Copia el `accessToken` de la respuesta y úsalo como `TOKEN` abajo.*

### Login con Google (Firebase)
Envía el **ID Token** que devuelve Firebase Auth en el cliente (tras `signInWithPopup` o `signInWithRedirect` con Google).

```bash
curl -X POST http://localhost:3000/api/auth/google \
  -H "Content-Type: application/json" \
  -d '{"idToken": "ID_TOKEN_DE_FIREBASE"}'
```
*Respuesta: `{ "usuario", "accessToken" }` — mismo formato que login. Si el usuario no existe, se crea; si ya existe (por email o firebase_uid), se enlaza y se devuelve el JWT.*

---

## 2. Usuarios (requieren JWT)

Sustituye `TOKEN` por el `accessToken` obtenido en login.

### Ver mi perfil
```bash
curl -X GET http://localhost:3000/api/users/me \
  -H "Authorization: Bearer TOKEN"
```

### Actualizar mi perfil
```bash
curl -X PATCH http://localhost:3000/api/users/me \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Nuevo Nombre"
  }'
```

---

## 3. Libros (requieren JWT)

### Crear libro
```bash
curl -X POST http://localhost:3000/api/books \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "isbn": "9788437604947",
    "genero": "Ficción",
    "paginasTotales": 471,
    "esAdquirido": true,
    "estadoLectura": "pendiente"
  }'
```
*`estadoLectura` puede ser: `pendiente`, `en_lectura`, `leido`*

### Listar mis libros
```bash
curl -X GET http://localhost:3000/api/books \
  -H "Authorization: Bearer TOKEN"
```

### Ver un libro
```bash
curl -X GET http://localhost:3000/api/books/1 \
  -H "Authorization: Bearer TOKEN"
```
*Cambia `1` por el `libroId` que quieras.*

### Actualizar libro
```bash
curl -X PATCH http://localhost:3000/api/books/1 \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Cien años de soledad (edición revisada)",
    "paginasLeidas": 100,
    "estadoLectura": "en_lectura",
    "estaPrestado": false
  }'
```

### Actualizar páginas leídas (otorga XP y actualiza nivel/racha)
```bash
curl -X PATCH http://localhost:3000/api/books/1/paginas \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "paginasLeidas": 150
  }'
```

### Eliminar libro
```bash
curl -X DELETE http://localhost:3000/api/books/1 \
  -H "Authorization: Bearer TOKEN"
```

---

## 4. IA / Recomendaciones (requieren JWT)

### Guardar recomendación IA
```bash
curl -X POST http://localhost:3000/api/ai/recomendaciones \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "promptEnviado": "Recomiéndame libros de realismo mágico",
    "respuestaIaJson": {
      "libros": ["Cien años de soledad", "Pedro Páramo"],
      "total": 2
    },
    "modeloIa": "gpt-4"
  }'
```

---

## Uso rápido con variable TOKEN

```bash
# 1. Login y guardar token
TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"tu@email.com","password":"tuPassword123"}' \
  | jq -r '.accessToken')

# 2. Llamar a un endpoint protegido
curl -X GET http://localhost:3000/api/users/me \
  -H "Authorization: Bearer $TOKEN"
```

*Requiere `jq` instalado. Si no lo tienes, copia el token a mano de la respuesta de login.*
