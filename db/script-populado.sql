-- Roles
insert into roles (codigo, nombre) values ('ADM', 'Administrador');
insert into roles (codigo, nombre) values ('USR', 'Usuario');

-- Administradores
insert into usuarios (nombre, apellido, dni, contrasenia, email, rolId) values ('administrador', 'administrador', 2, 'administrador', 'administrador@administrador.com', 1);

-- selects
select * from usuarios;
select * from roles;
select * from producto;
select * from carrito;
select * from carritoDetalle;