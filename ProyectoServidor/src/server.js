const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()
const publicacionRouter = require('./routes/publicacion.js')
const uploadPub = require('./routes/uploadPub.js')
const login = require('./routes/login2.js')
const register = require('./routes/register.js')
const tienda = require('./routes/tienda.js')
const verifyToken = require('./middleware/authMiddleware.js')
const showUser = require('./routes/mostrarUsuario.js')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000// El puerto se guarda en el archivo .env

//  Midelware
app.use(cors({
  origin: ['http://localhost:80', 'http://localhost', 'http://localhost:3001', 'http://localhost:3000', 'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true', 'http://192.168.1.52'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}))

app.use(morgan('dev')) //   Muestra info sobre las solicitudes http
app.use(express.json())//   Para que las solicitudes http sean accesibles con req.body

// Configuración de express-session
app.use(session({
  secret: process.env.SECRETKEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Cambiar a true para HTTPS
}))

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use('/api/publicacion', uploadPub)
app.use('/publicacion', publicacionRouter)
app.use('/login', login)
app.use('/register', register)
app.use('/user', verifyToken, showUser)
app.use('/tienda', verifyToken, tienda)

// Rutas protegidas
// app.use('/protected', verifyToken, (req, res) => {
//   res.json({ message: 'Esta es una ruta protegida', userId: req.userId })
// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('*', function (req, res) {
  res.send('../proyecto/public/index.html')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
