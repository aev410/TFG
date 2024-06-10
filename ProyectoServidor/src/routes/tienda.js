const { Router } = require('express')
const { pool } = require('../config/database')
const verifyToken = require('../middleware/authMiddleware')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRETKEY

const router = Router()

// Función para obtener el ID del usuario a partir del token
const getIdUsuarioToken = (req) => {
  try {
    const token = req.headers.authorization.split(' ')[1] // Obtén el token del encabezado
    const payload = jwt.verify(token, secretKey) // Verifica y decodifica el token
    return payload.userId // Retorna el ID del usuario
  } catch (error) {
    console.error('Error al obtener el ID del usuario:', error)
    return null // Devuelve null si hay un error
  }
}

// Función para verificar si el usuario ya tiene una tienda registrada
const verifyIdSinTienda = async (id) => {
  const query = 'SELECT idUsuario FROM clientes.Tienda WHERE idUsuario = $1'
  try {
    const result = await pool.query(query, [id]) // Ejecuta la consulta
    console.log('TIENDA RESPUESTA ID USUARIO' + result.rowCount)
    return result.rowCount === 0 // Devuelve true si no hay tiendas registradas, false si ya tiene una
  } catch (error) {
    console.error('Error al verificar el ID del usuario:', error)
    throw new Error('Error al verificar el ID del usuario') // Lanza un error si hay un problema con la consulta
  }
}

// Ruta para registrar una tienda
router.post('/', verifyToken, async (req, res) => {
  try {
    const { nombreTienda, telefono, direccion } = req.body // Obtén los datos del cuerpo de la solicitud
    console.log(nombreTienda, telefono, direccion)
    const idUsuario = getIdUsuarioToken(req) // Obtén el ID del usuario a partir del token
    if (!idUsuario) {
      return res.status(401).json({ message: 'Failed to authenticate token' }) // Devuelve un error si el token no es válido
    }

    const usuarioSinTienda = await verifyIdSinTienda(idUsuario) // Verifica si el usuario ya tiene una tienda registrada
    if (usuarioSinTienda) {
      const query = 'INSERT INTO clientes.tienda (nombretienda, telefono, direccion, idUsuario) VALUES ($1, $2, $3, $4)'
      const result = await pool.query(query, [nombreTienda, telefono, direccion, idUsuario]) // Inserta la nueva tienda en la base de datos

      console.log('Nueva tienda registrada:', result.idtienda) // Muestra en consola la tienda registrada
      res.status(200).json({ message: 'Tienda registrada exitosamente' }) // Envía una respuesta de éxito al cliente
    } else {
      return res.status(400).json({ message: 'El usuario ya tiene una tienda registrada' }) // Devuelve un error si ya tiene una tienda
    }
  } catch (error) {
    console.error('Error al insertar tienda:', error)
    res.status(500).json({ error: 'Error interno del servidor' }) // Envía una respuesta de error si algo falla
  }
})

router.get('/', (req, res) => {

})

module.exports = router
