const { Router } = require('express')
const { connectDB, pool } = require('../config/database')
const router = Router()
connectDB()

router.post('/', async (req, res) => {
  try {
    const { idUsuario } = req.body

    const user = await pool.query('SELECT * FROM usuarios WHERE idusuario = $1', [idUsuario])

    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }

    res.status(200).json({ message: 'Peticion exitosa', userData: user.rows[0] })
  } catch {
    return res.status(500).json({ message: 'Error en el servidor' })
  }
})

exports.modules = router
