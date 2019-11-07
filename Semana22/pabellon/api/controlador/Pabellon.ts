//PABELLON CONTROLLER
import{Request,Response} from 'express'
import { Pabellon, Aula, TipoAula } from '../configuracion/sequelize'
import { reserva_model } from '../modelos/Reserva'

export let getPabellones=(req:Request,res:Response)=>{
    Pabellon.findAll().then((objPabellones:any)=>{
        res.status(200).json({
            message:'Ok',
            content:objPabellones
        })
    })

}
export let postPabellon=(req:Request,res:Response)=>{

    // let objPabellon=Pabellon.build({
    //     pab_nom: req.body.pab_nom
    // });
    // console.log(objPabellon);
    //ó

// validando si el req.body cumple con los parametros minimosde entrada

if(!req.body.pab_nom){
    res.status(400).json(
        {
            ok:false,
            mensaje:"No se recibieron todos los campos en el request"
        }
    );
    return;
}

    let objPabellon=Pabellon.build(req.body);
    // objPabellon.pab_nom=req.body.pab_nom;
    // console.log(objPabellon);
    objPabellon.save().then((objPabellonCreado:any)=>{
        res.status(201).json(
            {
                ok:true,
                contenido: objPabellonCreado,
                mensaje:"Pabellon creado correctamente"
            }
        );
    }).catch((errorsh:any)=>{
        res.status(500).json(
            {
                ok:false,
                mensaje:"Error interno en servidor",
                contenido: errorsh
            }
        );
    })
}
export let getPabellonesById=(req:Request,res:Response)=>{
    Pabellon.findByPk(req.params.id).then((objPabellon:any)=>{
        if(objPabellon){
            res.status(200).json({
                message:'Ok',
                Pabellon:objPabellon
            })
        }else{
            res.status(500).json({
                message:'error',
                content:'No se encontro el pabellon'
            })
        }
    })
}

export let updatePabellon=(req:Request,res:Response)=>{
    Pabellon.update(
        {
            pab_nom: req.body.pabellon.pab_nom
        },{
            where:{
                pab_id: req.body.pabellon.pab_id
            }
        
        }).then((pabActualizado:any)=>{
            Pabellon.findByPk(pabActualizado[0]).then((objPabellon:any)=>{
                res.status(200).json({
                    message:'ok',
                    content: objPabellon
            })
        })
    }).catch((error:any)=>{
        res.status(501).json({
            message:'error',
            content:error
        })
    })
}

export let getAulasXPabellon=(req:Request,res:Response)=>{
    Pabellon.findAll({
        include:[{
            model:Aula
        }]
    }).then((resultado:any)=>{
        res.status(200).json({
            message:'ok',
            content: resultado
        })
    })
}

export let getAulasByPabellonId=(req:Request,res:Response)=>{
    Pabellon.findAll({
        where:{
            pab_id:req.params.id
        },
        include:[{
            model:Aula,
           include:[{
            model: TipoAula
           }]
        }]
    }).then((resultado:any)=>{
        res.status(200).json({
            message:'ok',
            content: resultado
        })
    })
} 