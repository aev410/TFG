const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const router = express.Router();

// Configurar conexión a la base de datos
const pool = new Pool({
  user: "postgres",
  password: "Admin123",
  host: "postgres",
  database: "alpujarra_almeria",
  port: 5432
});

// Endpoint iniciar sesión
router.post("/login", async (req, res) => {
  try {
    const { correo, contra } = req.body;

    // Verificar si el usuario existe en la base de datos
    const userQuery = await pool.query(
      'SELECT * FROM usuarios WHERE correo = $1',
      [correo]
    );

    if (userQuery.rows.length === 0) {
      return res.status(400).json({ error: '*Credenciales incorrectas' });
    }

    const user = userQuery.rows[0];

    // Comparar la contraseña hasheada con la ingresada
    const passwordMatch = await bcrypt.compare(contra, user.contra);

    if (!passwordMatch) {
      return res.status(400).json({ error: 'Credenciales incorrectas' });
    }

    // Usuario autenticado, enviar respuesta exitosa
    res.status(200).json({ message: 'Inicio de sesión exitoso' });

  } catch (error) {
    console.error("Error al iniciar sesión ", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
