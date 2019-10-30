import {Sequelize, Model} from 'sequelize';


export var venta_model=(sequelize:Sequelize, type:any)=>{
    class venta_model extends Model{};
    //.init(camnpos de mi tabla,opciones de mi tabla<nombre de mi tabla>)
    venta_model.init({
        vent_id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        vent_fecha:{
            type:type.STRING(45)
        },
        vent_subtotal:{
            type:type.FLOAT()
        },
        vent_montoigv:{
            type:type.FLOAT()
        }
    },{
        //nombre de la tabla
        sequelize,
        modelName:'t_venta',
        timestamps:false
    });
    return venta_model;
}