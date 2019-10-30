
import express from 'express';
import { producto_router } from './../rutas/Producto';
import bodyParser from 'body-parser';
import morgan from 'morgan';
//1. luego de crear config 
import { pruebaConexion } from '../config/sequelize';
import {sequelize} from '../config/sequelize';

export class Servidor {

  public app: express.Application;
  public puerto: number;

  constructor() {
    this.app = express();

    this.puerto = 3000;

    this.app.use(bodyParser.json());
    // bodyParser para leer informacion de forms
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(morgan('dev'));
    this.configurarRutas();

  }

  configurarRutas() {
    this.app.use(producto_router);
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log("Servidor corriendo correctamente en el puerto " + this.puerto);
      // 2.
      pruebaConexion();
// force:true al actualizar o ejecutar borra todo la base de datos y lo vuelve a crear pero se eliminan los datos
// false cada ves que inicie no tocara nada sin embargo si creamos una nueva tabla la creara sin problemas
// sync sincroniza/crea, los modelos 
      sequelize.sync({force:true}).then(()=>{
        console.log("Tablas creadas con exito");
      }).catch((error:any)=>{
        console.log("Algo a pasado llama a alguien de CodiGo", error);
        
      })

    })
  }
}
