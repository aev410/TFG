-- Active: 1716075812714@@127.0.0.1@5432@alpujarra_almeria

drop database alpujarra_almeria with (force)

create DATABASE alpujarra_almeria;

use alpujarra_almeria;

CREATE SCHEMA clientes;
-- Cambia al esquema "mi_esquema"
SET search_path TO clientes;

-- Tabla Usuarios
CREATE Table Usuarios(
    idUsuario SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL ,
    apellido VARCHAR(50),
    contra VARCHAR(255) NOT NULL,
    correo VARCHAR(50) NOT NULL,
    fechaNac DATE
);

-- Tabla Tienda
CREATE Table Tienda(
    idTienda SERIAL PRIMARY KEY,
    nombreTienda VARCHAR(50) NOT NULL,
    telefono INT NOT NULL,
    direccion VARCHAR(100),
    idUsuario INT UNIQUE NOT NULL
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
    nombre VARCHAR(50) NOT NULL,
    precio FLOAT NOT NULL,
    descripcion TEXT,
    fecha_pub DATE NOT NULL,
    latitud VARCHAR(50) NOT NULL,
    longitud VARCHAR(50) NOT NULL,
    imagenes VARCHAR(450) NOT NULL,
    idTienda INT NOT NULL
);

-- Clave foránea para la tabla Publicacion
ALTER TABLE Publicacion
ADD CONSTRAINT fk_publicacion_tienda
FOREIGN KEY (idTienda)
REFERENCES Tienda (idTienda)
ON DELETE CASCADE
ON UPDATE CASCADE;

