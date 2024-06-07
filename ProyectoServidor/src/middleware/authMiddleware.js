const jwt = require('jsonwebtoken');
require('dotenv').config()
const secretKey = process.env.SECRETKEY // Usa la misma clave secreta

const verifyToken = (req, res, next) => {
    const token = req.session.token;
  
    console.log('Token recibido:', token); // Verifica si el token se está recibiendo correctamente
  
    if (!token) {
      console.log('No se proporcionó ningún token'); // Verifica si el token está ausente
      return res.status(401).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.log('Error al verificar el token:', err); // Verifica si hay errores al verificar el token
        return res.status(401).json({ message: 'Failed to authenticate token' });
      }
  
      console.log('Token verificado, contenido decodificado:', decoded);
      
      // Verificar si el token contiene la propiedad userId
      if (!decoded.userId) {
        console.error('El token no contiene la propiedad userId');
        return res.status(500).json({ message: 'Token inválido' });
      }
  
      req.userId = decoded.userId;
      next();
    });
  };
  
module.exports = verifyToken;