import {Sequelize, Model} from 'sequelize';


export var det_venta_model=(sequelize:Sequelize, type:any)=>{
    class det_venta_model extends Model{};
    //.init(camnpos de mi tabla,opciones de mi tabla<nombre de mi tabla>)
    det_venta_model.init({
        dv_id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        dv_cant:{
            type:type.INTEGER(10)
        },
        dv_punit:{
            type:type.FLOAT()
        },
        dv_importe:{
            type:type.FLOAT()
        }
    },{
        //nombre de la tabla
        sequelize,
        modelName:'t_det_venta',
        timestamps:false
    });
    return det_venta_model;
}