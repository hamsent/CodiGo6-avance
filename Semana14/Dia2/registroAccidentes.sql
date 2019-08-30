-- BASE DE DATOS QUE REGISTRA ACCIDENTES DE TRANSITO
-- TABLA POLICIA 
-- idPolicia
-- nombre 
-- grado
-- inicioActividad

-- CREA UNA BASE DE DATOS
create database RegistroAccidentes; -- final de instruccion
use RegistroAccidentes; -- INSTRUCCIONES SE PLICAN A LA DB EN USO

-- CREAR UNA TABLA
-- create table <nombre_tabla> (<atributos>)
create table Policia (
	idPolicia int not null auto_increment primary key, -- restricion
    nombre varchar(45) not null,
    grado varchar(20) not null,
    inicioActividad date not null
);

-- AGREGAR A LA TABLA

insert into RegistroAccidentes.policia -- indicamos la base de datos
(idPolicia,nombre,grado,inicioActividad)  -- a que columnas ingresaremos info.
values (1,'Ronald','sargento','2019/03/10'); -- lo que se inserta

insert into policia -- indicamos la base de datos
(nombre,grado,inicioActividad)  -- a que columnas ingresaremos info.
values ('Jorge','soldado','2018/03/10'); -- lo que se inserta

insert into policia -- indicamos la base de datos
(idPolicia,nombre,grado,inicioActividad)  -- a que columnas ingresaremos info.
values (3,'Juan','Tecnico','2019/03/10'); -- lo que se inserta

insert into policia (nombre, grado,inicioActividad)
values ('Diego','Teniente','2019/08/24'),
('Danny','Capitan','2019/08/24'),
('Rodrigo','Alferez','2019/06/21');


alter table policia
add column codPistola varchar(20);

-- CREAR TABLA VEHICULO E INGRESAR VARIOS REGISTROS
-- PLACA, FECHA DEL TITULO, MARCA, MODELO, COLOR, COMBUSTIBLE, RUEDAS, PLACA ANTERIOR

create table vehiculo(
id_Vehiculo int not null auto_increment primary key,
placa varchar(7) not null,
fecha_titulo date not null,
marca varchar(15) not null,
modelo varchar(15) not null,
color varchar(15) not null,
combustible varchar(15) not null,
ruedas int(2) not null,
placa_anterior varchar(7)
); 

-- CREAR TABLA INFRACTOR
create table Infractor(
idInfractor int not null auto_increment primary key,
dni varchar(8) not null,
nombre varchar(50) not null
);

create table Registro(
idRegistro int not null auto_increment primary key,
id_Vehiculo int not null,
idInfractor int not null,
idPolicia int not null,
hora time not null,
fecha date not null,
coordenadaX decimal not null,
coordenadaY decimal not null,
heridos bool,
foreign key (id_Vehiculo) references Vehiculo(id_Vehiculo),
foreign key (idInfractor) references Infractor(idInfractor),
foreign key (idPolicia) references Policia(idPolicia)
);

create table Agraviados(
idAgraviado int not null auto_increment primary key,
DNI varchar(8) not null,
nombre varchar(45) not null
);


create table RegistroAgraviados(
idReg_Agra int not null auto_increment primary key,
idRegistro int not null,
idAgraviado int not null,
comentarios varchar(2000),
foreign key (idRegistro) references Registro(idRegistro),
foreign key (idAgraviado) references Agraviados(idAgraviado)
);

INSERT INTO agraviados(DNI,nombre) values ('32983982','Pedro Casas'),
('72828823','Alberto Rosas'),
('87277232','Juan Aguilar'),
('78837211','Kelly Guillen');

insert into registroagraviados
(idRegistro,idAgraviado,comentarios)
values
(1,1,'Se fracturó la pierna'),
(1,2,'No hay datos'),
(1,3,'En Shock');

truncate table registro