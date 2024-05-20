const express = require('express')
const { Pool } = require('pg')

const router = express.Router()

// Configurar conexión a la base de datos
const pool = new Pool({
  user: 'postgres',
  password: 'Admin123',
  host: 'postgres',
  database: 'alpujarra_almeria',
  port: 5432
})

// Endpoint iniciar sesión
router.post('/login', async (req, res) => {
  try {
    const { correo, contra } = req.body

    // Verificar si el usuario existe en la base de datos
    const user = await pool.query(
      'SELECT * FROM usuarios WHERE correo = $1 AND contra = $2',
      [correo, contra]
    )

    if (user.rows.length === 0) {
      return res.status(400).json({ error: '*Credenciales incorrectas' })
    }

    // Usuario autenticado, enviar respuesta exitosa
    res.status(200).json({ message: 'Inicio de sesión exitoso' })
  } catch (error) {
    console.error('Error al iniciar sesión ', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
})

module.exports = router
