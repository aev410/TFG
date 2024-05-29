const { Router } = require('express');
const { pool } = require('../config/database');
const bcrypt = require('bcrypt');

const router = Router();

// Endpoint iniciar sesión
router.post('/', (req, res) => {
  const { correo, contra } = req.body;

  // Verificar si el usuario existe en la base de datos
  const query = 'SELECT * FROM clientes.usuarios WHERE correo = $1';
  pool.query(query, [correo], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }

    if (result.rows.length === 0) {
      return res.status(400).json({ error: '*Credenciales incorrectas' });
    }

    const user = result.rows[0];

    // Comparar la contraseña hasheada con la ingresada
    bcrypt.compare(contra, user.contra, (err, passwordMatch) => {
      if (err) {
        console.error('Error al comparar contraseñas:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }

      if (!passwordMatch) {
        return res.status(400).json({ error: '*Credenciales incorrectas' });
      }

      // Usuario autenticado, enviar respuesta exitosa
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    });
  });
});

module.exports = router;
