const express = require('express')
const morgan = require('morgan')
const publicacionRouter = require('./routes/publicacion')
const uploadPub = require('./uploadPub.js')
require('dotenv').config()
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000// El puerto se guarda en el archivo .env

//  Midelware
app.use(cors({
  origin: ['http://localhost:80:3000', 'http://localhost:3000', 'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true']
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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
