const { Router } = require('express')
const { pool } = require('../config/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = Router()

const secretKey = process.env.SECRETKEY

// Endpoint iniciar sesión
router.post('/', (req, res) => {
  const { correo, contra } = req.body
  console.log('*******entrando en el login server')
  // Verificar si el usuario existe en la base de datos
  const query = 'SELECT * FROM clientes.usuarios WHERE correo = $1'
  pool.query(query, [correo], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err)
      return res.status(500).json({ error: 'Error interno del servidor' })
    }

    if (result.rows.length === 0) {
      return res.status(400).json({ error: '*Credenciales incorrectas' })
    }

    const user = result.rows[0]

    console.log('Usuario obtenido de la base de datos:', user) // Imprimir el objeto user en la consola

    // Comparar la contraseña hasheada con la ingresada
    bcrypt.compare(contra, user.contra, (err, passwordMatch) => {
      if (err) {
        console.error('Error al comparar contraseñas:', err)
        return res.status(500).json({ error: 'Error interno del servidor' })
      }

      if (!passwordMatch) {
        return res.status(400).json({ error: '*Credenciales incorrectas' })
      }
      console.log('PasswordMAtch' + passwordMatch)
      // Verificar que user.idusuario tenga un valor definido
      if (!user.idusuario) {
        console.error('El ID de usuario no está definido')
        return res.status(500).json({ error: 'Error interno del servidor' })
      }
      console.log('IDUSUARIO' + user.idusuario)
      // Crear el JWT
      console.log('Creando token con idUsuario:', user.idusuario) // Log adicional
      const token = jwt.sign({ userId: user.idusuario }, secretKey, { expiresIn: '1h' })
      console.log(token)

      // Guardar el token en la sesión
      req.session.token = token

      // Usuario autenticado, enviar respuesta exitosa
      res.status(200).json({ message: 'Inicio de sesión exitoso', data: token })
    })
  })
})

module.exports = router
