const express = require('express');
const cors = require("cors");
const path = require('path');
const registerEndpoint = require('./registrarse'); 
const loginEndpoint = require('./iniciarSesion');
const app = express();
const port = 3000;

// Utilizar el middleware cors
app.use(cors());

//Manejar solicitudes JSON:
app.use(express.json());

// Usar el endpoint de registro
app.use(registerEndpoint);

//Usar el endpoint de inicio de sesión
app.use(loginEndpoint);

// Servir archivos estáticos desde la carpeta de React
app.use(express.static(path.join(__dirname, 'TFG', 'proyecto')));


app.get('/', (req, res) => res.send('Hello World!!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))