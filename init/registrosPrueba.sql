-- Active: 1715957714479@@127.0.0.1@5432@alpujarra_almeria@clientes

-- Insertar 20 registros en la tabla Usuarios
INSERT INTO clientes.usuarios (nombre, apellido, contra, correo, fechaNac) VALUES
('Juan', 'Perez', 'password1', 'juan.perez@example.com', '1980-01-01'),
('Maria', 'Garcia', 'password2', 'maria.garcia@example.com', '1982-02-02'),
('Pedro', 'Lopez', 'password3', 'pedro.lopez@example.com', '1984-03-03'),
('Ana', 'Martinez', 'password4', 'ana.martinez@example.com', '1986-04-04'),
('Luis', 'Sanchez', 'password5', 'luis.sanchez@example.com', '1988-05-05'),
('Carmen', 'Gomez', 'password6', 'carmen.gomez@example.com', '1990-06-06'),
('Jose', 'Diaz', 'password7', 'jose.diaz@example.com', '1992-07-07'),
('Laura', 'Fernandez', 'password8', 'laura.fernandez@example.com', '1994-08-08'),
('Francisco', 'Torres', 'password9', 'francisco.torres@example.com', '1996-09-09'),
('Isabel', 'Ruiz', 'password10', 'isabel.ruiz@example.com', '1998-10-10'),
('Miguel', 'Hernandez', 'password11', 'miguel.hernandez@example.com', '2000-11-11'),
('Rosa', 'Jimenez', 'password12', 'rosa.jimenez@example.com', '2002-12-12'),
('Antonio', 'Molina', 'password13', 'antonio.molina@example.com', '1981-01-01'),
('Lucia', 'Castillo', 'password14', 'lucia.castillo@example.com', '1983-02-02'),
('David', 'Moreno', 'password15', 'david.moreno@example.com', '1985-03-03'),
('Sara', 'Ortega', 'password16', 'sara.ortega@example.com', '1987-04-04'),
('Javier', 'Delgado', 'password17', 'javier.delgado@example.com', '1989-05-05'),
('Elena', 'Ramos', 'password18', 'elena.ramos@example.com', '1991-06-06'),
('Carlos', 'Romero', 'password19', 'carlos.romero@example.com', '1993-07-07'),
('Marta', 'Navarro', 'password20', 'marta.navarro@example.com', '1995-08-08');

insert into clientes.usuarios (nombre, apellido, contra, correo, fechaNac) VALUES ('John', 'Doe', 'password1', 'johnDoe@example.com', '1999-01-01')

-- Insertar 20 registros en la tabla Tienda
INSERT INTO clientes.tienda (nombreTienda, telefono, direccion, idUsuario) VALUES
('Tienda1', 123456789, 'Direccion 1', 1),
('Tienda2', 234567890, 'Direccion 2', 2),
('Tienda3', 345678901, 'Direccion 3', 3),
('Tienda4', 456789012, 'Direccion 4', 4),
('Tienda5', 567890123, 'Direccion 5', 5),
('Tienda6', 678901234, 'Direccion 6', 6),
('Tienda7', 789012345, 'Direccion 7', 7),
('Tienda8', 890123456, 'Direccion 8', 8),
('Tienda9', 901234567, 'Direccion 9', 9),
('Tienda10', 123456780, 'Direccion 10', 10),
('Tienda11', 234567891, 'Direccion 11', 11),
('Tienda12', 345678902, 'Direccion 12', 12),
('Tienda13', 456789013, 'Direccion 13', 13),
('Tienda14', 567890124, 'Direccion 14', 14),
('Tienda15', 678901235, 'Direccion 15', 15),
('Tienda16', 789012346, 'Direccion 16', 16),
('Tienda17', 890123457, 'Direccion 17', 17),
('Tienda18', 901234568, 'Direccion 18', 18),
('Tienda19', 123456781, 'Direccion 19', 19),
('Tienda20', 234567892, 'Direccion 20', 20);

-- Insertar 20 registros en la tabla Publicacion utilizando las coordenadas proporcionadas
-- Asumiendo que la tabla Tienda ya está creada y tiene al menos 1 registro
-- Puedes necesitar ajustar idTienda dependiendo de tus datos en la tabla Tienda

TRUNCATE clientes.publicacion

INSERT INTO clientes.Publicacion (nombre, precio, descripcion, fecha_pub, latitud, longitud, imagenes, idTienda) VALUES
('Publicacion 1', 100, 'Descripción de la publicación 1', '2023-01-01', '37.033', '-2.621', 'imagen1.jpg', 4),
('Publicacion 2', 150, 'Descripción de la publicación 2', '2023-02-01', '36.9736', '-2.9613', 'imagen2.jpg', 4),
('Publicacion 3', 200, 'Descripción de la publicación 3', '2023-03-01', '36.9898', '-2.587', 'imagen3.jpg', 4),
('Publicacion 4', 250, 'Descripción de la publicación 4', '2023-04-01', '36.9571', '-2.5687', 'imagen4.jpg', 4),
('Publicacion 5', 300, 'Descripción de la publicación 5', '2023-05-01', '36.9664', '-2.602', 'imagen5.jpg', 1),
('Publicacion 6', 350, 'Descripción de la publicación 6', '2023-06-01', '37.0029', '-2.7901', 'imagen6.jpg', 1),
('Publicacion 7', 400, 'Descripción de la publicación 7', '2023-07-01', '37.0024', '-2.5944', 'imagen7.jpg', 1),
('Publicacion 8', 450, 'Descripción de la publicación 8', '2023-08-01', '37.0303', '-2.9954', 'imagen8.jpg', 1),
('Publicacion 9', 500, 'Descripción de la publicación 9', '2023-09-01', '37.0121', '-2.7907', 'imagen9.jpg', 1),
('Publicacion 10', 550, 'Descripción de la publicación 10', '2023-10-01', '36.9872', '-2.6194', 'imagen10.jpg', 1),
('Publicacion 11', 600, 'Descripción de la publicación 11', '2023-11-01', '37.0090', '-2.7407', 'imagen11.jpg', 1),
('Publicacion 12', 650, 'Descripción de la publicación 12', '2023-12-01', '36.9807', '-2.8567', 'imagen12.jpg', 1),
('Publicacion 13', 700, 'Descripción de la publicación 13', '2024-01-01', '36.9678', '-2.6092', 'imagen13.jpg', 1),
('Publicacion 14', 750, 'Descripción de la publicación 14', '2024-02-01', '36.9853', '-2.6391', 'imagen14.jpg', 1),
('Publicacion 15', 800, 'Descripción de la publicación 15', '2024-03-01', '36.9931', '-2.6597', 'imagen15.jpg', 1),
('Publicacion 16', 850, 'Descripción de la publicación 16', '2024-04-01', '36.9941', '-2.8925', 'imagen16.jpg', 1),
('Publicacion 17', 900, 'Descripción de la publicación 17', '2024-05-01', '37.0383', '-2.7452', 'imagen17.jpg', 1),
('Publicacion 18', 950, 'Descripción de la publicación 18', '2024-06-01', '36.9989', '-2.7741', 'imagen18.jpg', 1),
('Publicacion 19', 1000, 'Descripción de la publicación 19', '2024-07-01', '37.022', '-2.9529', 'imagen19.jpg', 1),
('Publicacion 20', 1050, 'Descripción de la publicación 20', '2024-08-01', '36.9955', '-2.6806', 'imagen20.jpg', 1);

-- Repite el patrón de coordenadas si necesitas más registros o ajusta los valores de las coordenadas para más variedad

