// console.log("Hola con Type");
// si esque encuentran documentacion de js
// const express=require('./express');
import express from 'express';
import bodyParser from 'body-parser';
const app=express();
// manejando peticiones
app.get('/api',(req,res)=>{
    console.log(req.query);
     
    // mandando el codigo de estado
    res.status(201);
    res.send({
        "operation":"exito",
        "message":"Factura creada con éxito"
    });
});

const port =2500;

//Escuchando PETICIONES
app.listen(port,()=>console.log("Servidor corriendo en el puerto " + port));