create table informacionusuario (
	id_usuario serial primary key,
	nombre varchar(15) not null,
	apellido varchar(15) not null,
	correo varchar(30) not null
);

insert into informacionusuario values (1,'Carlos','Nuñes','carlos@gmail.com');
insert into informacionusuario values (2,'María','Erazo','maria@gmail.com');
insert into informacionusuario values (3,'Ricardo','Montenegro','ricardo@gmail.com');