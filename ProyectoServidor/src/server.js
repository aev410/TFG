const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const publicacionRouter = require('./routes/publicacion.js')
const uploadPub = require('./routes/uploadPub.js')
const login = require('./routes/login.js')
const register = require('./routes/register.js')

const app = express()
const port = process.env.PORT || 3000// El puerto se guarda en el archivo .env

//  Midelware
app.use(cors({
  origin: ['http://localhost:80', 'http://localhost:3000', 'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true']
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(morgan('dev')) //   Muestra info sobre las solicitudes http
app.use(express.json())//   Para que las solicitudes http sean accesibles con req.body

app.use('/api/publicacion', uploadPub)
app.use('/publicacion', publicacionRouter)
app.use('/login', login)
app.use('/register', register)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
