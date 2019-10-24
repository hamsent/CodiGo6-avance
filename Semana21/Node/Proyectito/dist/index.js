"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Hola con Type");
// si esque encuentran documentacion de js
// const express=require('./express');
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// manejando peticiones
app.get('/api', (req, res) => {
    console.log(req.query);
    // mandando el codigo de estado
    res.status(201);
    res.send({
        "operation": "exito",
        "message": "Factura creada con éxito"
    });
});
const port = 2500;
//Escuchando PETICIONES
app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));
