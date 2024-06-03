const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
require('dotenv').config()
const publicacionRouter = require('./routes/publicacion.js')
const uploadPub = require('./routes/uploadPub.js')
const login = require('./routes/login.js')
const register = require('./routes/register.js')
const verifyToken = require('./middleware/authMiddleware.js');
const showUser = require('./routes/mostrarUsuario.js')

const app = express()
const port = process.env.PORT || 3000// El puerto se guarda en el archivo .env

//  Midelware
app.use(cors({
  origin: ['http://localhost:80', 'http://localhost', 'http://localhost:3000', 'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}))

app.use(morgan('dev')) //   Muestra info sobre las solicitudes http
app.use(express.json())//   Para que las solicitudes http sean accesibles con req.body

// Configuración de express-session
app.use(session({
  secret: 'ClaveSecreta123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Cambiar a true para HTTPS
}))

app.use('/api/publicacion', uploadPub)
app.use('/user', showUser)
app.use('/publicacion', publicacionRouter)
app.use('/login', login)
app.use('/register', register)

// Rutas protegidas
app.use('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Esta es una ruta protegida', userId: req.userId })
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('*', function (req, res) {
  res.send('../proyecto/public/index.html')
})