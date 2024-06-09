const express = require('express')
const { connectDB, pool } = require('../config/database')
const router = express.Router()

connectDB()

// obtiene todas las pblicaciones
router.get('/', async (req, res) => {
  const query = 'SELECT * FROM clientes.publicacion'
  // Ejecuta la consulta
  pool.query(query, (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err)
      return
    }
    res.json(result.rows)
  })
})

// Obtiene las ultimas publicaciones
router.get('/last', async (req, res) => {
  const date = new Date()
  const lastweek = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000)
  const lastweekFormat = lastweek.toISOString().slice(0, 19).replace('T', ' ')

  const query = 'SELECT * FROM clientes.publicacion WHERE fecha_pub > $1 ORDER BY fecha_pub DESC LIMIT 3'
  // Ejecuta la consulta
  pool.query(query, [lastweekFormat], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err)
      res.status(500).send('Error al ejecutar la consulta')
      return
    }
    console.log('Filas seleccionadas:', result.rows)
    res.json(result.rows)
  })
})

router.get('/nombre/:nombre', async (req, res) => {
  const nombre = req.params.nombre

  const query = 'SELECT * FROM clientes.publicacion WHERE nombre LIKE $1'
  pool.query(query, [`%${nombre}%`], (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error en la consulta' })
      console.error('Error al ejecutar la consulta:', err)
      return
    }
    res.json(result.rows)
  })
})

//  Obtiene la publicacion por id
router.get('/:id', async (req, res) => {
  const id = req.params.id
  console.log(id)

  if (isNaN(id)) {
    res.status(400).send('ID no válido')
    return
  }

  const query = 'SELECT * FROM clientes.publicacion WHERE idPublicacion = $1'
  // Ejecuta la consulta
  pool.query(query, [parseInt(id)], (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Error en la consulta' })
      console.error('Error al ejecutar la consulta:', err)
      return
    }
    console.log('Filas seleccionadas:', result.rows)
    res.json(result.rows)
  })
})

module.exports = router
