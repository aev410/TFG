const { Router } = require('express')
const { connectDB, pool } = require('../config/database')
const verifyToken = require('../middleware/authMiddleware')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRETKEY

const router = Router()
connectDB()

router.get('/', verifyToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')
    console.log('TOKEN EN MOSTRA USUARIO: ' + token[1])
    const payload = jwt.verify(token[1], secretKey, (err, decoded) => {
      if (err) {
        console.log('Error al verificar el token:', err) // Verifica si hay errores al verificar el token
        return res.status(401).json({ message: 'Failed to authenticate token' })
      }
      return decoded
    })
    console.log('TOKEN DECODED: ' + payload)
    const idUsuario = payload.userId
    console.log(idUsuario)
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