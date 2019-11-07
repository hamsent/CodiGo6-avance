import { conexion } from './../configuracion/sequelize';
import express, { Request, Response } from 'express';
import { pabellon_router } from './../rutas/Pabellon';
import { aulas_router } from './../rutas/Aulas';
import {usuario_router} from './../rutas/Usuario';

let bodyParser=require('body-parser');

// luego de instalar npm i swagger-ui-express, copiamos de la documentacion las dos siguientes lineas
const swaggerUi = require('swagger-ui-express');
// cambiamos const swaggerDocument = require('./../apidoc/documentacion.json'); por
import * as swaggerDocument from './../apidoc/documentacion.json';

export class Server {
  public app: express.Application;
  public puerto: any;
  constructor() {
    this.app = express();
    // obtener el puerto que nos asignará heroku
    // o establer por defecto el puerto 3000
    this.puerto = process.env.PORT || 3000;
    // la configuracion de body-parser, siempre debe estar antes de 
    this.configurarBodyParser();
    this.configurarRutas();
  }

  configurarBodyParser(){
    this.app.use(bodyParser.json());
  }
  configurarRutas() {
    // configurando una ruta por defecto o de prueba
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send("BIENVENIDO AL SERVIDOR");
    });

    // aqui tambien copiamos la linea de la documentacion luego de instalar  npm i swagger-ui-express y le anteponemos this.
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//  al colocar /api quiere decir que todo se pone despues de api
    this.app.use('/api',pabellon_router);
    this.app.use('/api',aulas_router);
    this.app.use('/api',usuario_router);

  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor OK en el puerto ${this.puerto}`);
      // force:true, elimina todas las tablas y las crea nuevamente
      // force:false, si las tablas no existen en la base de datos
      // las crea. Si las tablas ya existían en la base de datos
      // sólo crea las nuevas tablas en caso de que hubieran
      conexion.sync({ force: false }).then(() => {
        console.log("Base de datos creada correctamente");        
      })
    });
  }

}