import { aula_model } from './../modelos/Aula';
import { pabellon_model } from './../modelos/Pabellon';
import { tipoAula_model } from '../modelos/TipoAula';
import { usuario_model } from '../modelos/Usuario';
import { reserva_model } from '../modelos/Reserva';
const Sequelize = require("sequelize");

export const conexion = new Sequelize('aulas', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-05:00',
  // configuración para lectura de fechas en la base de datos
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  }
});

// otra forma de conectarse por Sequelize
// export const conexion2=new Sequelize('mysql://root:root@localhost:3306/aulas')

// las lineas siguientes hacen que se cree las tablas
export const Pabellon:any = pabellon_model(conexion);
export const Aula:any = aula_model(conexion);
export const TipoAula:any=tipoAula_model(conexion);
export const Usuario:any=usuario_model(conexion);
export const Reserva:any=reserva_model(conexion);

Pabellon.hasMany(Aula, { foreignKey: "pab_id" });
Aula.belongsTo(Pabellon, { foreignKey: "pab_id" });

// para crear relacion entre aula y reserva por medio de su fk que se va a llamar "aula_id"
Aula.hasMany(Reserva,{foreignKey:"aula_id"});
Reserva.belongsTo(Aula,{foreignKey:"aula_id"});

Usuario.hasMany(Reserva,{foreignKey:"usu_id"});
Reserva.belongsTo(Usuario,{foreignKey:"usu_id"});

// TipoAula tiene muchas Aulas
TipoAula.hasMany(Aula,{foreignKey:"taula_id"});
// muchas Aula tiene TipoAula
Aula.belongsTo(TipoAula,{foreignKey:"taula_id"});

