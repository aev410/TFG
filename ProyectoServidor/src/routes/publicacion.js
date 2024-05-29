const { Router } = require('express')
const { connectDB, pool } = require('../config/database')
const router = Router()

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
    console.log('Filas seleccionadas:', result.rows)
    res.json(result.rows)
  })
})

//  Obtiene la publicacion por id
router.get('/:id', async (req, res) => {
  const id = req.params.id

  if (isNaN(id)) {
    res.status(400).send('ID no válido')
    return
  }

  const query = 'SELECT * FROM clientes.publicacion WHERE idPublicacion = $1'
  // Ejecuta la consulta
  pool.query(query, [parseInt(id)], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err)
      return
    }
    console.log('Filas seleccionadas:', result.rows)
    res.json(result.rows)
  })
})

module.exports = router