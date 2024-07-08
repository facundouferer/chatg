# Proyecto de Frontend para API de Inteligencia Artificial

Este proyecto es el frontend de una API de inteligencia artificial que presenta una interfaz estilo chat. Permite a los usuarios interactuar con el modelo de IA en tiempo real, enviando preguntas y recibiendo respuestas de manera dinámica. El frontend está construido con React y utiliza Tailwind CSS para el diseño.

La aplicación está desplegada y funcionando en: [https://bot.scyt.gar.com.ar/](https://bot.scyt.gar.com.ar/)

## Configuración de Variables de Entorno

Para que tu proyecto funcione correctamente, es necesario configurar algunas variables de entorno en un archivo `.env` en la raíz del proyecto. Estas variables se utilizan para interactuar con las APIs y definir ciertos comportamientos de la aplicación.

### Pasos para Configurar el Archivo `.env`

1. **Crear el Archivo `.env`**:
   Si no tienes un archivo `.env` en la raíz de tu proyecto, créalo.

2. **Agregar las Variables de Entorno**:
   Abre el archivo `.env` y agrega las siguientes líneas. Asegúrate de reemplazar los valores de ejemplo con tus propias claves y configuraciones.

   ```plaintext
   VITE_GOOGLE_API_KEY="TU_GOOGLE_API_KEY"
   VITE_MODEL_NAME="TU_MODEL_NAME"
   VITE_NOT_RESPONDING="TU_MENSAJE_NO_RESPUESTA"
