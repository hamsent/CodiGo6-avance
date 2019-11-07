import {Request, Response } from 'express';
import {Usuario} from '../configuracion/sequelize';


const Sequelize=require('sequelize');
const Op=Sequelize.Op; //los operadores de comparacion de sequelize

export let crearUsuario=(req:Request,res:Response)=>{
    // BUILD => construye el objeto usuario, mas no lo crea en la base de datos
    let ObjUsuario=Usuario.build(req.body.usuario);
    ObjUsuario.setSaltYHash(req.body.usuario.usu_pass);
    // save()=> promesa que guarda el registro en la base de datos
    ObjUsuario.save().then((usuarioCreado:any)=>{
        Usuario.findByPk(usuarioCreado.usu_id).then(
            (usuarioEncontrado:any)=>{
                res.status(201).json({
                    message:'Usuario creado',
                    content:usuarioEncontrado
                })
            })
    }).catch((error:any)=>{
        res.status(501).json({
            message:'Error',
            content: error
        })
    })
}

export let encontrarUsuByNomOApe=(req:Request,res:Response)=>{}

export let iniciarSesion=(req:Request,res:Response)=>{}