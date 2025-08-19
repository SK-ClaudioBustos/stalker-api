# Stalker API

Stalker API es una parte fundamental de un sistema web diseñado para gestionar y proporcionar información relacionada con modificaciones (mods) para videojuegos. Este proyecto está construido con tecnologías modernas y sigue las mejores prácticas de desarrollo para garantizar escalabilidad, rendimiento y facilidad de mantenimiento.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **NestJS**: Framework para construir aplicaciones del lado del servidor escalables y mantenibles.
- **Prisma**: ORM moderno y flexible para interactuar con la base de datos.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **PNPM**: Gestor de paquetes rápido y eficiente.

## Guía de Configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd stalker-api
   ```

2. **Instalar dependencias**
   Asegúrate de tener PNPM instalado. Si no lo tienes, instálalo con:
   ```bash
   npm install -g pnpm
   ```
   Luego, instala las dependencias del proyecto:
   ```bash
   pnpm install
   ```

3. **Configurar la base de datos**
   - Edita el archivo `prisma/schema.prisma` para configurar tu base de datos.
   - Genera el cliente de Prisma y haz push a la BD:
     ```bash
     pnpm run generate
     ```

4. **Iniciar el servidor**
   Ejecuta el servidor en modo desarrollo:
   ```bash
   pnpm start:dev
   ```

5. **Probar la API**
   La API estará disponible en `http://localhost:3000`. Puedes usar herramientas como Postman o cURL para probar los endpoints.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas colaborar, por favor abre un issue o envía un pull request.

---

¡Gracias por usar Stalker API! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.
