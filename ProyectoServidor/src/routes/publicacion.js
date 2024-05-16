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
    pool.end() // Cierra la conexión al finalizar
  })
})

module.exports = router
