# OGATHON Challenges API README

## ¿Cómo generar la aplicación?

Pasos para iniciar con Docker.

1. Construye el contenedor de Docker utilizando los siguientes comandos:

```bash
docker build -t ogathon-challenges-api -f Dockerfile .
```

2. Inicia el contendor de Docker ejecutando el siguiente comando:

```bash
docker run -d -p 8080:8080 --env ASPNETCORE_HTTP_PORTS=8080 --name ogathon-challenges-api ogathon-challenges-api
```

3. Después de ejecutar estos comandos, la aplicación estará disponible en el puerto local `localhost:8080` y la API estará disponible en `localhost:8080/api`

## Endpoints disponibles

La API actualmente contiene los siguientes endpoints:

- `GET /challenges/solution-1?n={number}`: Obtiene el patrón del virus para un número dado. El parámetro `n` es obligatorio y debe ser un número entero positivo.

## Documentación de la API

La documentación de la API se encuentra en [Swagger UI](http://localhost:8080/api). Swagger UI permite visualizar todas las operaciones disponibles, parámetros necesarios y respuestas esperadas para cada una.

## Requerimientos

- Docker (v17.03 o superior)
- Node.js (v12.16.1)
- NPM (v6.14.4)
