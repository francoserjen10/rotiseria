-- tabla de roles
create table if not exists roles(
	rolId int not null auto_increment,
	codigo VARCHAR(3),
  	nombre VARCHAR(50),
  	primary key (rolID)
);

-- tabla de usuarios
create table if not exists usuarios(
	usuarioId int not null auto_increment,
	nombre varchar (200),
	apellido varchar (200),
	dni int not null ,
	contrasenia varchar (200),
	email varchar (256) not null,
	rolId int,
	primary key(usuarioId),
	constraint FK_usuarios_roles foreign key (rolId) references roles(rolId)	
);

-- tabla de producto
create table if not exists producto(
	productoId int not null auto_increment primary key,
	nombre varchar (200),
	descripcion varchar (400),
	precio int not null ,
	estado varchar (200)
);

-- tabla de carrito 
create table if not exists carrito(
	carritoId int not null auto_increment,
	usuarioId int,
	primary key(carritoId),
	constraint FK_carrito_usuarios foreign key (usuarioId) references usuarios(usuarioId)
);

-- tabla de carritoDetalle
create table if not exists carritoDetalle(
	carritoDetalleId int not null auto_increment,
	carritoId int,
	productoId int,
	cantidad int,
	precio int not null,
	primary key(carritoDetalleId),
	constraint FK_carritoDetalle_carrito foreign key (carritoId) references carrito(carritoId),
	constraint FK_carritoDetalle_producto foreign key (productoId) references producto(productoId)
);