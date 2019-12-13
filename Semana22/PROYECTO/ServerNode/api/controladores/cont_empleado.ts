// paso 2

import {Request, Response} from 'express';
import { Empleado } from '../config/sequelize';
import { Venta } from '../config/sequelize';

export var empleado_controller={
    // se puede poner getAll o obtenerTodos no hay problema
    getAll:(req:Request,res:Response)=>{
        Empleado.findAll({
            include:[
                {model:Venta}
            ]
        }).then((empleados:any)=>{
            console.log("Empleados Obtenidos", empleados);
            res.status(200);
            res.send({
                success:true,
                message:'Lista de Empleados',
                content:empleados
            });
        }).catch((error:any)=>{
            console.log(error);
            res.status(404);
            res.send({
                success:false,
                message:'Ha ocurrido un error al obtener los datos',
                content:''
            })
        })
    },
    Create:(req:Request, res:Response)=>{
        // obtenemos el req.body
        console.log(req.body);
        // aqui guardamos 
        Empleado.create(req.body).then((empleadoCreado)=>{
            if (empleadoCreado) {
                // configuro mi respuesta
                let respuesta={
                    success:true,
                    message:'Usuario Creado',
                    content:empleadoCreado
                }
                // mando mi respuesta con su estado
                res.status(201).send(respuesta);
            }
        }).catch((error:any)=>{
            console.log("Error al crear empleado",error);
            res.status(500).send("Ocurrio un error");            
        })
    },
    getById:(req:Request,res:Response)=>{
        let {id_empleado}=req.params;
        Empleado.findByPk(id_empleado).then((empleado)=>{
            if (empleado) {
                let respuesta={
                    success:true,
                    message:"Empleado Encontrado",
                    content:empleado
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta={
                    success:false,
                    message:'Empleado no encontrado',
                    content:''
                }
                res.status(404).send(respuesta);
            }
        }).catch((error)=>{
            console.log('Error al buscar  por ID',error);
            
        })
        
    },
    deleteById:(req:Request,res:Response)=>{
        let {id_empleado}=req.params;
        Empleado.destroy({
            where:{
                emp_id:id_empleado
            }
        }).then((cantidad)=>{
            if (cantidad>0) {
                console.log("Cant", cantidad);
                let respuesta={
                    success:true,
                    message:"Usuario Eliminado",
                    content:cantidad
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta={
                    success:false,
                    message:"No se ha eliminado",
                    content:''
                }
                res.status(500).send(respuesta);
            }
        })
    },
    updateById:(req:Request,res:Response)=>{
        //req.query
        let {id_empleado}=req.params;
        // El contenido a actualizary que registro va actualizar
        Empleado.update(req.body,{
            where:{
                emp_id: id_empleado
            }
        }).then((cantidad:any)=>{
            if (cantidad>0) {
                let respuesta={
                    success:true,
                    message:"Registro actualizado",
                    content:cantidad
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta={
                    success:false,
                    message:"Registro no actualizado",
                    content:''
                }
                res.status(400).send(respuesta);
            }
        })
    }

}