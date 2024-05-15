const express = require('express')
const morgan = require('morgan')
const { connectDB } = require('./config/database')
require('dotenv').config()

const app = express()
const port = process.env.PORT// El puerto se guarda en el archivo .env
//  Midelware
app.use(morgan('dev')) //   Muestra info sobre las solicitudes http
app.use(express.json())//   Para que las solicitudes http sean accesibles con req.body

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pelis', async (req, res) => {
  connectDB()
  try {
    const { pool } = require('./config/database')
    const result = await pool.query('SELECT * FROM alpujarraalmeria.usuarios')
    res.json(result.rows)
  } catch (error) {
    console.error('Error executing query', error.stack)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
