CREATE DATABASE AlpujarraAlmeria;
use AlpujarraAlmeria;

CREATE Table Usuarios(
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
);

CREATE TABLE Publicacion(
    idPublicacion INT Auto_INCREMENT PRIMARY KEY,
    precio INT,
    descripcion VARCHAR(50),
    fecha_pub DATE,
    latitud INT,
    longitud INT,
    imagenes VARCHAR(50),
    idUsuario INT,
)

ALTER TABLE Publicacion
ADD FOREIGN KEY (idUsuario)
REFERENCES Usuarios (idUsuario)
ON DELETE CASCADE
ON UPDATE CASCADE;