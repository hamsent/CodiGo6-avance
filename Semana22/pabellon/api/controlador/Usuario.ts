import { Request, Response } from 'express';
import { Usuario } from '../configuracion/sequelize';


const Sequelize = require('sequelize');
const Op = Sequelize.Op; //los operadores de comparacion de sequelize

export let crearUsuario = (req: Request, res: Response) => {
    // BUILD => construye el objeto usuario, mas no lo crea en la base de datos
    let ObjUsuario = Usuario.build(req.body.usuario);
    ObjUsuario.setSaltYHash(req.body.usuario.usu_pass);
    // save()=> promesa que guarda el registro en la base de datos
    ObjUsuario.save().then((usuarioCreado: any) => {
        Usuario.findByPk(usuarioCreado.usu_id).then(
            (usuarioEncontrado: any) => {
                res.status(201).json({
                    message: 'Usuario creado',
                    content: usuarioEncontrado
                })
            })
    }).catch((error: any) => {
        res.status(501).json({
            message: 'Error',
            content: error
        })
    })
}

export let encontrarUsuByNomOApe = (req: Request, res: Response) => {
    let busqueda = req.body.busqueda;
    Usuario.findAll({
        where: {
            [Op.or]: [
                {
                    usu_nom: {
                        [Op.substring]: busqueda
                    }
                },
                {
                    usu_ape: {
                        [Op.substring]: busqueda
                    }
                }
            ]
        }
    }).then((rpta: any) => {
        res.json(rpta);
    })
}

export let iniciarSesion = (req: Request, res: Response) => {
    let { usu_email, usu_pass } = req.body;
    console.log('entro');
    
    // tenemos que encriptar la contraseña en hexadecimal
    let buff = Buffer.from(usu_pass, 'utf-8').toString('ascii');

    Usuario.findOne({
        where: {
            usu_email: usu_email
        }
    }).then((objUsuario: any) => {
        console.log(objUsuario);
        
        if (objUsuario) {
            let validarPass = objUsuario.validarPass(buff);
            console.log(validarPass);
            
            if (validarPass) {
                // seguimos con 
                let token=objUsuario.generarJWT();

                res.status(200).json({
                    message: 'ok',
                    token: token
                })

            } else {
                res.status(500).json({
                    message: 'error',
                    content: 'No se encontro el usuario'
                })
            }
        }
    })
}