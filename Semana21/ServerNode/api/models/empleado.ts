import {Sequelize,Model} from 'sequelize';


export var empleado_model=(sequelize:Sequelize, type:any)=>{
    class empleado_model extends Model{};
    //.init(camnpos de mi tabla,opciones de mi tabla<nombre de mi tabla>)
    empleado_model.init({
        emp_id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        emp_nom:{
            type:type.STRING(45)
        },
        emp_ape:{
            type:type.STRING(45)
        },
        emp_dni:{
            type:type.STRING(10)
        }
    },{
        //nombre de la tabla
        sequelize,
        modelName:'t_empleado',
        timestamps:false
    });
    return empleado_model;
}