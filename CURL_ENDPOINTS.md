## Endpoints clave relacionados con planes y límites

### `GET /users/me`

- **Descripción**: Devuelve la información del usuario autenticado.
- **Respuesta (parcial)**:

```json
{
  "userId": 1,
  "name": "Ejemplo",
  "email": "user@example.com",
  "planId": 1,
  "plan": {
    "planId": 1,
    "slug": "free",
    "name": "Free",
    "bookLimit": 100,
    "monthlyAiLimit": 5,
    "isPaid": false
  }
}
```

### `POST /books`

- **Descripción**: Crea un nuevo libro para la biblioteca personal del usuario.
- **Límites por plan**:
  - Si el usuario tiene un plan con `bookLimit` definido y ya ha alcanzado ese número de libros, el backend devolverá:

```json
{
  "statusCode": 403,
  "message": "Límite de libros alcanzado para tu plan. Actualiza a Premium para añadir más.",
  "error": "PLAN_LIMIT_REACHED",
  "limitType": "books"
}
```

### `POST /ai/recommendations`

- **Descripción**: Guarda una recomendación de IA para el usuario.
- **Límites por plan**:
  - Si el usuario tiene un plan con `monthlyAiLimit` definido y ya ha alcanzado su límite mensual, el backend devolverá:

```json
{
  "statusCode": 403,
  "message": "Has alcanzado el límite mensual de IA de tu plan. Actualiza a Premium para seguir usando esta función.",
  "error": "PLAN_LIMIT_REACHED",
  "limitType": "ai"
}
```

### Seguridad y rate limiting

- Todos los endpoints anteriores usan el `userId` del JWT a través de `JwtAuthGuard` y el decorador `@CurrentUser`.
- Se recomienda aplicar rate limiting adicional en:
  - `GET /books/search`
  - `POST /ai/recommendations`
  utilizando, por ejemplo, `@nestjs/throttler` (pendiente de integrar).

