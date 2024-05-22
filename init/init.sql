-- Active: 1715772260983@@localhost@5432@alpujarra_almeria

use alpujarra_almeria;

CREATE SCHEMA clientes;
-- Cambia al esquema "mi_esquema"
SET search_path TO clientes;

-- Tabla Usuarios
CREATE Table Usuarios(
    idUsuario SERIAL PRIMARY KEY,
    nombre VARCHAR(50) ,
    apellido VARCHAR(50),
    contra VARCHAR(50),
    correo VARCHAR(50),
    fechaNac DATE
);

-- Tabla Tienda
CREATE Table Tienda(
    idTienda SERIAL PRIMARY KEY,
    nombreTienda VARCHAR(50),
    telefono INT,
    direccion VARCHAR(100),
    idUsuario INT UNIQUE
);

-- Clave foránea para la tabla Tienda
ALTER TABLE Tienda
ADD CONSTRAINT fk_tienda_usuario
FOREIGN KEY (idUsuario)
REFERENCES Usuarios (idUsuario)
ON DELETE CASCADE
ON UPDATE CASCADE;

-- Tabla Publicacion
CREATE TABLE Publicacion(
    idPublicacion SERIAL PRIMARY KEY,
    precio INT,
    descripcion VARCHAR(200),
    fecha_pub DATE,
    latitud VARCHAR(50),
    longitud VARCHAR(50),
    imagenes VARCHAR(450),
    idTienda INT
);

-- Clave foránea para la tabla Publicacion
ALTER TABLE Publicacion
ADD CONSTRAINT fk_publicacion_tienda
FOREIGN KEY (idTienda)
REFERENCES Tienda (idTienda)
ON DELETE CASCADE
ON UPDATE CASCADE;

