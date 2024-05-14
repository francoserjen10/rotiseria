-- Roles
insert into roles (codigo, nombre) values ('ADM', 'Administrador');
insert into roles (codigo, nombre) values ('USR', 'Usuario');

-- Administradores
insert into usuarios (nombre, apellido, dni, contrasenia, email, rolId) values ('Ruben', 'Torres', 46567989, '123456789', 'ruben.010.torres@gmail.com', 1);
insert into usuarios (nombre, apellido, dni, contrasenia, email, rolId) values ('Franco', 'Serjen', 43738670, 'abcdef', 'francoserjen100@gmail.com', 1);
insert into usuarios (nombre, apellido, dni, contrasenia, email, rolId) values ('Lucho', 'Rios', 43738677, '987654321', 'luchoRios@gmail.com', 1);

-- selects
select * from producto;
select * from carrito;
select * from carritoDetalle;