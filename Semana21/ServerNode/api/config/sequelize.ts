import {producto_model} from '../models/producto';
import {empleado_model} from '../models/empleado';
import {venta_model} from '../models/ventas'
import {det_venta_model} from '../models/det_ventas';

import { Sequelize } from 'sequelize';
// Sequelize mecesita para comunicarse ('base de datos','usuario','contraseña',{opciones adicionales})
export const sequelize = new Sequelize('tienda2','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});

export const pruebaConexion=()=>{
    sequelize
  .authenticate()
  .then(() => {
    console.log('Nos hemos conectado a la DB de forma correcta! :D');
  })
  .catch((error:any) => {
    console.log('No se pudo conectar a la DB', error);
  });
}

export const Producto=producto_model(sequelize,Sequelize);

export const Empleado=empleado_model(sequelize,Sequelize);

export const Venta=venta_model(sequelize,Sequelize);

export const Det_Venta=det_venta_model(sequelize,Sequelize);


// aqui se relacionan las tablas

Venta.belongsTo(Empleado,{foreignKey:'emp_id'});
// segunda relación
// empleado va a tener muchas ventas
Empleado.hasMany(Venta,{foreignKey:'emp_id'});

Det_Venta.belongsTo(Venta,{foreignKey:'vent_id'});
Venta.hasMany(Det_Venta,{foreignKey:'vent_id'});

Det_Venta.belongsTo(Producto,{foreignKey:'prod_id'});
Producto.hasMany(Det_Venta,{foreignKey:'prod_id'});


