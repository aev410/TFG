const express = require('express')
const { connectDB, pool } = require('./config/database')
const { multiUpload } = require('./middleware/multer')
const app = express()
connectDB()

app.post('/', multiUpload.array('imagenes', 5), async (req, res) => {
  // idUsuario = placeholder, tengo que tomarlo de la sesion del usuario
  const idUsuario = 4

  // Da un formato de fecha legible para SQL
  const fechaPub = new Date().toISOString().slice(0, 19).replace('T', ' ')

  // Define las variables segun la informacion en la formData y segun el procesado de multer para las imagenes
  const { precio, descripcion, latitud, longitud } = req.body
  const imagenes = req.files.map(file => file.path).join(';')

  try {
    // Query, los dolares llaman a variables que definimos y colocamos en pool.query()
    const query = `
          INSERT INTO clientes.publicacion(precio, descripcion, fecha_pub, latitud, longitud, imagenes, idUsuario)
          VALUES($1, $2, $3, $4, $5, $6, $7)
        `
    const values = [precio, descripcion, fechaPub, latitud, longitud, imagenes, idUsuario]
    await pool.query(query, values)
    // Control de errores
    res.status(200).json({ message: 'Publicacion creada correctamente' })
  } catch (error) {
    res.status(500).json({ message: 'Error en servidor' })
  }
})

module.exports = app
