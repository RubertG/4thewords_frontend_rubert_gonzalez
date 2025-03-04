# Frontend de la prueba técnica desarrollador fullstack 4TheWords

Autor: Rubert Gonzalez Perez.

El frontend fue desarrollado utilizando [Vite](https://vitejs.dev/), [React](https://reactjs.org/) y [Tailwind CSS](https://tailwindcss.com/). El frontend se encarga de mostrar la interfaz gráfica de la aplicación y de interactuar con el backend a través de una API REST. Además, el frontend se encarga de guardar las imagenes en el storage de firebase.

## Variables de entorno

Para el correcto funcionamiento del frontend, se deben configurar las siguientes variables de entorno en un archivo `.env` en la carpeta raíz del proyecto:

```bash
VITE_API_URL=http://127.0.0.1:8080 # URL del backend
VITE_API_KEY=api_key # Clave de la API de firebase
VITE_AUTH_DOMAIN=auth_domain # Dominio de autenticación de firebase
VITE_PROJECT_ID=project_id # ID del proyecto de firebase
VITE_STORAGE_BUCKET=storage_bucket # Bucket de almacenamiento de firebase
VITE_MESSAGING_SENDER_ID=messaging_sender_id # ID del emisor de mensajes de firebase
VITE_APP_ID=app_id # ID de la aplicación de firebase
VITE_MEASUREMENT_ID=measurement_id # ID de medición de firebase
```

## Instalación del frontend

Para instalar el frontend, se debe ejecutar el siguiente comando en la carpeta raíz del proyecto:

```bash
pnpm install
```

## Ejecución del frontend

Para ejecutar el frontend en modo desarrollo, se debe ejecutar el siguiente comando en la carpeta raíz del proyecto:

```bash
pnpm run dev
```

Para ejecutar el frontend en modo producción, se debe ejecutar el siguiente comando en la carpeta raíz del proyecto:

```bash
pnpm run build
pnpm run preview
```

## Consideraciones

- Nombre del frontend: 4thewords_frontend_rubert_gonzalez
- Nombre base de datos: 4thewords_prueba_rubert_gonzalez
- Nombre del backend: 4thewords_backend_rubert_gonzalez
