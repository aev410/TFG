# Usa la imagen base de Node.js
FROM node:17 as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación al directorio de trabajo del contenedor
COPY . .

# Construye la aplicación React
RUN npm run build

# Usar una imagen más ligera para producción
FROM nginx:alpine

# Copia el directorio de construcción de la aplicación React al directorio de trabajo del servidor web Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expone el puerto 80 en el contenedor
EXPOSE 80

# Comando para ejecutar el servidor web Nginx
CMD ["nginx", "-g", "daemon off;"]
