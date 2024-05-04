# Usa la imagen base de Node.js
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación al directorio de trabajo del contenedor
COPY src/ .

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["node", "server.js"]  
# Cambia "app.js" por "server.js"
