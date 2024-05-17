const express = require('express')
const multer = require('multer')
const { connectDB, pool } = require('./config/database')
const app = express()

connectDB()

// Set up Multer
const upload = multer({ dest: 'uploads/' })

app.post('/', upload.single('imagenes'), async (req, res) => {
  const { precio, descripcion, fechaPub, latitud, longitud, idUsuario } = req.body
  const imagenes = req.file.path // This will be the path where your image is stored by Multer

  try {
    const query = `
      INSERT INTO clientes.publicacion(precio, descripcion, fecha_pub, latitud, longitud, imagenes, idUsuario)
      VALUES($1, $2, $3, $4, $5, $6, $7)
    `
    const values = [precio, descripcion, fechaPub, latitud, longitud, imagenes, idUsuario]
    pool.query(query, values)

    res.status(200).json({ message: 'Publicacion created successfully.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error.' })
  }
})

module.exports = app
