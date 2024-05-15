const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Set up Multer
const upload = multer({ dest: 'uploads/' });

// Set up PostgreSQL connection
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

app.post('/api/publicacion', upload.single('imagenes'), async (req, res) => {
  const { precio, descripcion, fecha_pub, latitud, longitud, idUsuario } = req.body;
  const imagenes = req.file.path; // This will be the path where your image is stored by Multer

  try {
    const query = `
      INSERT INTO Publicacion(precio, descripcion, fecha_pub, latitud, longitud, imagenes, idUsuario)
      VALUES($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [precio, descripcion, fecha_pub, latitud, longitud, imagenes, idUsuario];
    await pool.query(query, values);

    res.status(200).json({ message: 'Publicacion created successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

app.listen(3001, () => {
  console.log(`Server running at http://localhost:${port}`);
});
