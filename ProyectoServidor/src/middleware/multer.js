const multer = require('multer')
const path = require('path')
const date = new Date()

// Define el destino del guardado de las imagenes, actualmente guardadas en /usr/scr/app/images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images/'))
  },
  // Le da un formato legible a la imagen, con el nombre de la info subida a formData, la fecha y la extension
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, '0') +
    date.getDate().toString().padStart(2, '0') +
    file.originalname.match(/\..*$/)[0])
  }
})

// Define como tal el objeto multer
const multiUpload = multer({
  storage,
  // Aqui define el tamaño
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  // Y aqui filtra segun el tipo de archivo, mandando error si el archivo no coincide
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

module.exports = { multiUpload }
