-- Active: 1716075812714@@127.0.0.1@5432@alpujarra_almeria

drop DATABASE alpujarra_almeria WITH (FORCE);
-- Active: 1715957714479@@127.0.0.1@5432@alpujarra_almeria

select * from publicacion

create database alpujarra_almeria;

use alpujarra_almeria;

CREATE SCHEMA clientes;
-- Cambia al esquema "mi_esquema"
SET search_path TO clientes;


CREATE Table Usuarios(
    idUsuario SERIAL PRIMARY KEY ,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    contra VARCHAR(50),
    correo VARCHAR(50),
    fechaNac DATE
);

CREATE TABLE Publicacion(
    idPublicacion SERIAL PRIMARY KEY,
    precio INT,
    descripcion VARCHAR(50),
    fecha_pub DATE,
    latitud VARCHAR(50),
    longitud VARCHAR(50),
    imagenes VARCHAR(50),
    idUsuario INT
);

ALTER TABLE Publicacion
ADD FOREIGN KEY (idUsuario)
REFERENCES Usuarios (idUsuario)
ON DELETE CASCADE
ON UPDATE CASCADE;

