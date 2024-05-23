const { Router } = require('express')
const { connectDB, pool } = require('../config/database')
const router = Router()
connectDB()

router.post('/', async (req, res) => {
  try {
    const { idUsuario } = req.body
    console.log(req.body)
    console.log(idUsuario)
    const user = await pool.query('SELECT * FROM clientes.usuarios WHERE idUsuario = $1', [idUsuario])

    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }

    res.status(200).json({ message: 'Peticion exitosa', userData: user.rows[0] })
  } catch {
    return res.status(500).json({ message: 'Error en el servidor' })
  }
})

module.exports = router
