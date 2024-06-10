-- Active: 1714865744258@@127.0.0.1@5432@alpujarra_almeria@clientes
-- Insertar 20 registros en la tabla Usuarios

select * from clientes.publicacion;


INSERT INTO clientes.usuarios (nombre, apellido, contra, correo, fechaNac) VALUES
(Naim Essousi, $2b$10$PnJSlFzi.kp1ovWDbECRfuNcpVe5fOMKMt5MqtiY4XvCz0VNHEPkO, neb0002@alu.medac.es, 2024-12-25),
(Gabriel Mata, $2b$10$BznQI1wAiRzZTbjeOm4z9eTBkgPgX5NzmX2rwgbCUQI4roye8Jfu6, gmm0011@alu.medac.es, 2003-04-14);
-- Insertar 20 registros en la tabla Tienda
INSERT INTO clientes.tienda (nombreTienda, telefono, direccion, idUsuario) VALUES
(Tienda de Naim, 987765465, mi casa, 1),
(Arepa Tienda, 645867234, Direccion la arepa, 2);

-- Insertar 20 registros en la tabla Publicacion utilizando las coordenadas proporcionadas
-- Asumiendo que la tabla Tienda ya está creada y tiene al menos 1 registro
-- Puedes necesitar ajustar idTienda dependiendo de tus datos en la tabla Tienda

TRUNCATE TABLE clientes.publicacion RESTART IDENTITY;

INSERT INTO clientes.Publicacion (nombre, precio, descripcion, fecha_pub, latitud, longitud, imagenes, idTienda) VALUES
('Naranjas', 5, 'Narajas frescas', '2023-01-01', '36.9678', '-2.6092', 'imagen1.jpg', 1),
('Vinos', 23, 'Surtido de vinos', '2023-02-01', '37.033', '-2.621', 'imagen2.jpg', 1),
('Patatas', 10, 'Caja de patatas', '2023-03-01', '36.9898', '-2.587', 'imagen3.jpg', 1),
('Mermeladas caseras', 4, 'Mermeladas de distintos sabores', '2023-04-01', '36.9571', '-2.5687', 'imagen4.jpg', 2),
('Miel de flores', 6, 'Miel casera', '2023-05-01', '36.9664', '-2.602', 'imagen5.jpg', 1),
('Caja de pimientos', 12, 'Caja de pimientos rojos', '2023-06-01', '37.0029', '-2.7901', 'imagen6.jpg', 2),
('Borrego', 200, 'Borrego especial fiesta', '2023-07-01', '37.0024', '-2.5944', 'imagen7.jpg', 2),
('Huevos', 9, 'Huevos de gallina', '2023-08-01', '37.0303', '-2.9954', 'imagen8.jpg', 1),
('Sillas de esparto', 30, 'Sillas de esparto fabricadas a mano', '2023-09-01', '37.0121', '-2.7907', 'imagen9.jpg', 2),
('Aceite de oliva', 25, 'Aceite de temporada', '2023-10-01', '36.9872', '-2.6194', 'imagen10.jpg', 2),
('Leche frita', 6, 'Racion de leche fita hecha al momento', '2023-11-01', '37.0090', '-2.7407', 'imagen11.jpg', 1),
('Esparragos', 3, 'Esparragos de temporada', '2023-12-01', '36.9807', '-2.8567', 'imagen12.jpg', 1),
('Alcaparras', 7, 'Alcaparras recien embasadas', '2024-01-01', '36.9678', '-2.6092', 'imagen13.jpg', 2),
('Lampara de calabaza', 25, 'Lampara decorativa', '2024-02-01', '36.9853', '-2.6391', 'imagen14.jpg', 2),
('Muñecos de ganchillo', 10, 'Muñecos hechos a mano', '2024-03-01', '36.9931', '-2.6597', 'imagen15.jpg', 1),
('Alfombras', 35, 'Alfombras artesanales de lana', '2024-04-01', '36.9941', '-2.8925', 'imagen16.jpg', 1),
('Botijo', 20, 'Botijo ceramica', '2024-05-01', '37.0383', '-2.7452', 'imagen17.jpg', 2),
('Mono', 5000, 'Mono, no hace nada solo te juzga. Tambien hay embutido', '2024-06-01', '36.9989', '-2.7741', 'imagen18.jpg', 1),
('Pan de masa madre', 3, 'Pan honeado todos los dias', '2024-07-01', '37.022', '-2.9529', 'imagen19.jpg', 1),
('Pan arabe', 4, 'Pan arabe', '2024-08-01', '36.9955', '-2.6806', 'imagen20.jpg', 2);

-- Repite el patrón de coordenadas si necesitas más registros o ajusta los valores de las coordenadas para más variedad

