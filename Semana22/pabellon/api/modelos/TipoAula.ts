import { DataTypes, Sequelize } from 'sequelize';
export let tipoAula_model=(Sequelize:Sequelize)=>{
    var tipoAula=Sequelize.define('t_tipoAula',{
        taula_id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        taula_desc:{
            type: DataTypes.STRING(45),
            allowNull:false
        }
    },{
        tableName:'t_tipoAula',
        timestamps:false
    });
    return tipoAula;
}