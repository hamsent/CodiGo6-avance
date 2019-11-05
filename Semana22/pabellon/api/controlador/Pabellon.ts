//PABELLON CONTROLLER
import{Request,Response} from 'express'
import { Pabellon } from '../configuracion/sequelize'

let getPabellones=(req:Request,res:Response)=>{

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