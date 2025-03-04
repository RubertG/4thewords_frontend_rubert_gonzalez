# Frontend de la prueba técnica desarrollador fullstack 4TheWords

Autor: Rubert Gonzalez Perez.

El frontend fue desarrollado utilizando [Vite](https://vitejs.dev/), [React](https://reactjs.org/) y [Tailwind CSS](https://tailwindcss.com/). El frontend se encarga de mostrar la interfaz gráfica de la aplicación y de interactuar con el backend a través de una API REST. Además, el frontend se encarga de guardar las imagenes en el storage de firebase.

## Variables de entorno

Para el correcto funcionamiento del frontend, se deben configurar las siguientes variables de entorno en un archivo `.env` en la carpeta raíz del proyecto:
El proyecto de firebase es requerido y despues de la prueba sera eliminado, por facilidad se dejan las variables de entorno de firebase.

```bash
VITE_API_URL=http://127.0.0.1:8080 # URL del backend
VITE_API_KEY=AIzaSyDIpfhR_i2Cs-EtlSPXQhCoU2fxZxVpEAU
VITE_AUTH_DOMAIN=portafolio-web-c279e.firebaseapp.com
VITE_PROJECT_ID=portafolio-web-c279e
VITE_STORAGE_BUCKET=portafolio-web-c279e.appspot.com
VITE_MESSAGING_SENDER_ID=631939093935
VITE_APP_ID=1:631939093935:web:3d5586a8d90a6471908b5a
VITE_MEASUREMENT_ID=G-R8S4L8BRVT
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
