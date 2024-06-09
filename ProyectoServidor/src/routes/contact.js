const { Router } = require('express')

const router = Router()

// Ruta para manejar las solicitudes de contacto
router.post('/', (req, res) => {
  const { nombre, correo, asunto, mensaje } = req.body

  // Aquí puedes agregar la lógica para procesar los datos, como guardarlos en una base de datos o enviarlos por correo electrónico

  console.log('Datos recibidos:', { nombre, correo, asunto, mensaje })

  // Enviar una respuesta al cliente
  res.status(200).json({ message: 'Formulario enviado con éxito' })
})

module.exports = router
