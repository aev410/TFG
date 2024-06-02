const { Router } = require('express')
const { connectDB, pool } = require('../config/database')
const router = Router()
connectDB()

router.get('/:id', async (req, res) => {
  try {
    const idUsuario = req.params.id
    const user = await pool.query('SELECT * FROM clientes.usuarios WHERE idUsuario = $1', [idUsuario])

    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' })
    }
    const userData = user.rows[0]

    const store = await pool.query('SELECT * FROM clientes.tienda WHERE idUsuario = $1', [idUsuario])
    const storeData = store.rows[0]

    if (store.rows.length === 0) {
      return res.status(200).json({ userData })
    } else {
      const publicacion = await pool.query('SELECT * FROM clientes.publicacion WHERE idTienda = $1', [storeData.idtienda])
      const publicacionData = publicacion.rows
      return res.status(200).json({ userData, storeData, publicacionData })
    }
  } catch {
    return res.status(500).json({ message: 'Error en el servidor' })
  }
})

module.exports = router
