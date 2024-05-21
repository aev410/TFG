const express = require('express')
const multer = require('multer')
const path = require('path')
const { connectDB, pool } = require('./config/database')
const app = express()

connectDB()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, './images/'))
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname.match(/\..*$/)[0])
  }
})

// Checa si el archivo es de mas de 5mb y si es jpg, png o jpeg
const multiUpload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null, true)
    } else {
      cb(null, false)
      const err = new Error('Solo formatos de imagenes aceptados (png, jpg, jpeg)')
      err.name = 'ExtensionError'
      return cb(err)
    }
  }
})

app.post('/', multiUpload.array('imagenes'), async (req, res) => {
  const idUsuario = 4
  const fechaPub = req.body.fecha_Pub
  const { precio, descripcion, latitud, longitud } = req.body
  const imagenes = req.body.imagenes
  console.log(req.body)
  try {
    console.log(req.body)
    console.log('imagenes: ', req.files)
    const query = `
          INSERT INTO clientes.publicacion(precio, descripcion, fecha_pub, latitud, longitud, imagenes, idUsuario)
          VALUES($1, $2, $3, $4, $5, $6, $7)
        `
    const values = [precio, descripcion, fechaPub, latitud, longitud, imagenes, idUsuario]
    await pool.query(query, values)

    res.status(200).json({ message: 'Publicacion creada correctamente' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error en servidor' })
  }
})

module.exports = app
