const express = require('express')
const morgan = require('morgan')
const publicacionRouter = require('./routes/publicacion')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000// El puerto se guarda en el archivo .env
//  Midelware
app.use(morgan('dev')) //   Muestra info sobre las solicitudes http
app.use(express.json())//   Para que las solicitudes http sean accesibles con req.body

app.use('/publicacion', publicacionRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
