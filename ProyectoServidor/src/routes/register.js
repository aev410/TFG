const { Router } = require('express')
const { pool } = require('../config/database')
const bcrypt = require('bcrypt')

const router = Router()

// Endpoint registrar usuarios
router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, contra, correo, fechaNac } = req.body

    // Verificar si el correo o la contraseña ya existen en la base de datos
    const existingUser = await pool.query(
      'SELECT * FROM clientes.usuarios WHERE correo = $1 OR contra = $2',
      [correo, contra]
    )

    if (existingUser.rows.length > 0) {
      const errorMessage = []
      if (existingUser.rows.some(user => user.correo === correo)) {
        errorMessage.push('*Correo ya existente')
      }
      if (existingUser.rows.some(user => user.contra === contra)) {
        errorMessage.push('*Contraseña ya existente')
      }
      return res.status(400).json({ error: errorMessage.join(' / ') })
    }

    // Hashear la contraseña:
    const hashedPassword = await bcrypt.hash(contra, 10)

    // Insertar el nuevo usuario en la base de datos
    const result = await pool.query(
      'INSERT INTO clientes.usuarios (nombre, apellido, contra, correo, fechaNac) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nombre, apellido, hashedPassword, correo, fechaNac]
    )

    console.log('Nuevo usuario registrado:', result.rows[0])
    res.status(200).json({ message: 'Usuario registrado exitosamente' })
  } catch (error) {
    console.error('Error al insertar usuario:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

module.exports = router
