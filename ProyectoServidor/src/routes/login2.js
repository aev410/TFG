const { Router } = require('express')
const { pool } = require('../config/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const router = Router()

const secretKey = process.env.SECRETKEY
const tiempoExpiracionToken = 3600 * 60

const generarToken = (user) => {
  console.log('Creando token con idUsuario:', user.idusuario) // Log adicional
  const token = jwt.sign({ userId: user.idusuario }, secretKey, { expiresIn: tiempoExpiracionToken })
  console.log(token)
  return token
}

// Función para verificar la contraseña
const verificarContra = (contra, user) => {
  try {
    // Compara la contraseña en texto plano con el hash almacenado en el usuario
    const passwordMatch = bcrypt.compareSync(contra, user.contra)
    // Si las contraseñas no coinciden, retorna 2
    if (!passwordMatch) {
      return 2
    }
    // Si el ID de usuario no está definido, imprime un error y retorna 3
    if (!user.idusuario) {
      console.error('El ID de usuario no está definido')
      return 3
    }
    // Si todo es correcto, retorna 0
    return 0
  } catch (err) {
    // Si ocurre un error durante la comparación, imprime el error y retorna 1
    console.error('Error al comparar contraseñas:', err)
    return 1
  }
}

router.post('/', (req, res) => {
  const { correo, contra } = req.body
  console.log('LOGIN 2\n\n')

  // Verificar si el usuario existe en la base de datos
  const query = 'SELECT * FROM clientes.usuarios WHERE correo = $1'
  pool.query(query, [correo], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err)
      return res.status(500).json({ error: 'Error interno del servidor' })
    }

    console.log('NO HAY ERROR EN LA QUERY')

    if (result.rows.length === 0) {
      return res.status(400).json({ error: '*Credenciales incorrectas' })
    }
    console.log('Lineas del resultado' + result.rows.length)

    const user = result.rows[0]

    // Verifico que los datos obtenidos sean correctos
    const verificacion = verificarContra(contra, user)
    console.log('VERIFICACION: ' + verificacion)
    if (verificacion === 1) {
      return res.status(500).json({ error: 'Error interno del servidor' })
    } else if (verificacion === 2) {
      return res.status(400).json({ error: '*Credenciales incorrectas' })
    } else if (verificacion === 3) {
      return res.status(500).json({ error: 'Error interno del servidor' })
    } else {
      console.log('Verrificacion completada\n')
    }

    const token = generarToken(user)
    console.log('TOKEN GENEADO' + token + '\n')

    req.session.token = token

    console.log('SESSION: ' + req.session.token)

    res.status(200).json({ message: 'Inicio de sesión exitoso', data: token })
  })
})

module.exports = router
