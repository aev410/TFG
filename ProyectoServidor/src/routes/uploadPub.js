const { Router } = require('express')
const { connectDB, pool } = require('../config/database')
const { multiUpload } = require('../middleware/multer')

const router = Router()
connectDB()

router.post('/', multiUpload.array('imagenes', 5), async (req, res) => {
  // Da un formato de fecha legible para SQL
  const fechaPub = new Date().toISOString().slice(0, 19).replace('T', ' ')

  // Define las variables segun la informacion en la formData y segun el procesado de multer para las imagenes
  const { nombre, precio, descripcion, latitud, longitud, idTienda } = req.body
  const imagenes = req.files.map(file => file.filename).join(';')

  try {
    // Query, los dolares llaman a variables que definimos y colocamos en pool.query()
    const query = `
          INSERT INTO clientes.publicacion(nombre, precio, descripcion, fecha_pub, latitud, longitud, imagenes, idTienda)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        `
    const values = [nombre, precio, descripcion, fechaPub, latitud, longitud, imagenes, idTienda]
    await pool.query(query, values)
    // Control de errores
    res.status(200).json({ message: 'Publicacion creada correctamente' })
  } catch (error) {
    return res.status(500).json({ message: 'Error en servidor' })
  }
})

module.exports = router
