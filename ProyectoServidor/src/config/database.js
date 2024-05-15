const { Pool } = require('pg')
require('dotenv').config()

// Almaceno los datos sensibles
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: false
})
//  Conexion a la BBDD
const connectDB = async () => {
  try {
    await pool.connect()
    console.log('Connectado a la base de datos')
  } catch (error) {
    console.log('Error al conectar a la base de datos: ', error.message)
    process.exit(1)
  }
}

module.exports = { pool, connectDB }
