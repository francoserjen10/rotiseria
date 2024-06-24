-- roles
SELECT * FROM roles;
INSERT INTO roles (codigo, nombre) VALUES ('ADM', 'Administrador');
INSERT INTO roles (codigo, nombre) VALUES ('USR', 'Usuario');
DROP TABLE roles;
ALTER TABLE roles rename column rolId TO rol_id

-- usuarios
SELECT * FROM usuarios;
INSERT INTO usuarios (nombre, apellido, dni, contrasenia, email, rolId) VALUES ('administrador', 'administrador', 2, 'administrador', 'administrador@administrador.com', 1);
DELETE FROM usuarios WHERE usuarioId = 4;
DROP TABLE usuarios;
ALTER TABLE usuarios ADD url_image VARCHAR(250) NULL;
ALTER TABLE usuarios ADD url_image_delete VARCHAR(250) NULL;
ALTER TABLE usuarios ADD display_url_image VARCHAR(250) NULL;
ALTER TABLE usuarios rename column usuarioId TO usuario_id;
ALTER TABLE usuarios rename column rolId TO rol_id;

-- productos
SELECT * FROM producto;
DROP TABLE producto;
ALTER TABLE producto rename column productoId TO producto_id;
ALTER TABLE producto ADD rubro_id INT NOT NULL;
ALTER TABLE producto ADD CONSTRAINT FK_productos FOREIGN KEY (rubro_id) REFERENCES rubro(rubro_id);
ALTER TABLE producto ADD url_image VARCHAR(250) NULL;
ALTER TABLE producto ADD url_image_delete VARCHAR(250) NULL;
ALTER TABLE producto ADD display_url_image VARCHAR(250) NULL;
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('tradicional', 'lechuga y tomate', 1500, 'disponible', 1);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('rusa', 'papa, zanahoria, arveja y mayonesa', 1800, 'disponible', 1);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('rucula y parmesano', 'rucula, queso parmesano', 2000, 'disponible', 1);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('zanahoria y huevo', 'zanahoria, huevo y tomate', 1500, 'disponible', 1);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('remolacha y huevo', 'remolacha, hievo, papa, apio picado fino, cebolla, nuez', 2500, 'disponible', 1);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('sorrentinos', 'jamon y queso', 5000, 'disponible', 2);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('sorrentinos', 'verdura', 5000, 'disponible', 2);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('sorrentinos', 'ricota', 5000, 'disponible', 2);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('ravioles', 'jamon y queso', 4000, 'disponible', 2);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('ravioles', 'pollo', 4000, 'disponible', 2);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('ravioles', 'ricota', 4000, 'disponible', 2);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('ñokis', 'papa', 4000, 'disponible', 2);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('canelones', 'jamon y queso', 4000, 'disponible', 2);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('canelones', 'pollo', 4000, 'disponible', 2);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('canelones', 'verdura', 4000, 'disponible', 2);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('canelones', 'carne', 4000, 'disponible', 2);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('milanesas', 'carne', 3900, 'disponible', 3);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('milanesas', 'pollo', 3800, 'disponible', 3);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('asado', 'preparado a la parrilla', 10.000, 'disponible', 3);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('vacio', 'preparado a la parrilla', 10.000, 'disponible', 3);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('matambre', 'preparado a la parrilla', 8500, 'disponible', 3);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('pollo', 'entero, preparado a la parrilla', 9900, 'disponible', 3);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('chorizo', 'puro, preparado a la parrilla', 7500, 'disponible', 3);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('papas fritas', 'a base de papas frescas', 4500, 'disponible', 4);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('pure de papas', 'a base de papa fresca ', 2500, 'disponible', 4);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('tortilla española', 'huevo, papa, cebolla', 5400, 'disponible', 4);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('levite', 'limon', 4500, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('levite', 'naranja', 2500, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('levite', 'pomelo', 5400, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('levite', 'manzana', 5400, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('coca-cola', 'tradicional 3lt', 3500, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('coca-cola', 'sin azucar 3lt', 3500, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('coca-cola', 'seven up 3lt', 3500, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('coca-cola', 'sprite 3lt', 3500, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('coca-cola', 'fanta 2.25lt', 2900, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('villaVicencio', 'agua mineral 2lt', 1800, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('cerveza', 'corona 210ml', 2200, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('cerveza', 'quilmes 1lt', 2300, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('cerveza', 'isenbeck lata 473ml', 800, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('vino tinto', 'viñas de balbo 1125cc', 3300, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('vino blanco', 'santa julia 750cc', 3900, 'disponible', 5);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('speed', 'energizante 269ml', 1250, 'disponible', 5);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('blanca', 'manteca, harina, leche, pimienta molida, nuez moscada', 3000, 'disponible', 6);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('bolognesa ', 'carne picada, cebolla, zanahoria, apio, tomate, ajo, aceite de oliva', 5000, 'disponible', 6);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('champiñones', 'champiñon, cebolla, ajo, leche, crema', 5000, 'disponible', 6);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('mozzarella', 'queso mozzarella, aceitunas sin carozo, orégano y morrón', 9000, 'disponible', 7);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('napolitana ', 'tomate, queso mozzarella y orégano', 11000, 'disponible', 7);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('especial con huevo', 'jamón, queso mozzarella, morrón y huevo', 14000, 'disponible', 7);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('calabresa', 'queso mozzarella, longanisa y aceituna sin carozo', 14000, 'disponible', 7);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('ananá ', 'morrón, jamón cocido, rodajas de ananá y queso mozzarella', 15000, 'disponible', 7);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('rúcula y jamón crudo', 'queso mozzarella, queso parmesano, jamón crudo y rucula', 15000, 'disponible', 7);

INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('jamón y queso', 'queso mozzarella y jamón cocido', 1400, 'disponible', 8);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('carne', 'carne picada, huevo, morron rojo y verde, aceituna y cebolla', 1400, 'disponible', 8);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('pollo', 'pollo trozado, cebolla, morron rojo y verde y aceituna', 1400, 'disponible', 8);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('humita', 'qchoclo, cebolla, morrón, huevo y queso mozzarella', 1400, 'disponible', 8);
INSERT INTO producto (nombre, descripcion, precio, estado, rubro_id) VALUES ('roquefort', 'queso mozzarella, queso roquefort, jamón cocido, cebolla y huevo', 1400, 'disponible', 8);

-- rubro
SELECT * FROM rubro;
DELETE FROM rubro WHERE rubro_id >= 1;
DELETE FROM rubro WHERE rubro_id >= 1 AND rubro_id <=2;
ALTER TABLE rubro auto_increment = 1;
INSERT INTO rubro (nombre) VALUES ('ensaladas');
INSERT INTO rubro (nombre) VALUES ('pastas');
INSERT INTO rubro (nombre) VALUES ('carnes');
INSERT INTO rubro (nombre) VALUES ('guarniciones');
INSERT INTO rubro (nombre) VALUES ('bebidas');
INSERT INTO rubro (nombre) VALUES ('salsas');
INSERT INTO rubro (nombre) values ('pizzas');
INSERT INTO rubro (nombre) values ('empanadas');

-- carrito 
SELECT * FROM carrito;
DROP TABLE carrito;
ALTER TABLE carrito rename column carritoId TO carrito_id;
ALTER TABLE carrito rename column usuarioId TO usuario_id;

-- carrito detalle
SELECT * FROM carritoDetalle;
DROP TABLE carritoDetalle;
ALTER TABLE carritoDetalle rename column cantidad TO cantidad_de_productos;
ALTER TABLE carritoDetalle rename column carritoDetalleId TO carrito_detalle_id;
ALTER TABLE carritoDetalle rename column carritoId TO carrito_id;
ALTER TABLE carritoDetalle rename column productoId TO producto_id;
ALTER TABLE carritoDetalle rename column precio TO precio_total;
ALTER TABLE carritodetalle ADD fecha DATETIME;


