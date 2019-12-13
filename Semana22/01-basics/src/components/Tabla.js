import React, { Fragment } from 'react';
import Mascota from './Mascota';

const Tabla = (props) => {
    console.log(props)
    let llamarAlPadre=(e)=>{
        console.log(e); 
        props.funcion();
    }

    return (
        <Fragment>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((mascota,indice)=>(
                            <tr key={indice}>
                                <td>{mascota.nombre}</td>
                                <td>{mascota.tipo}</td>
                                <td><button onClick={()=>{
                                    props.funcion(mascota.nombre)
                                }
                            }>Enviar {mascota.nombre}</button></td>
                            </tr>
    
                        ))
                    }
                  
                </tbody>
            </table>
            <button onClick={llamarAlPadre}>
                Referencia a una funcion
            </button>
            <button onClick={()=>{props.funcion("Eduardo")}}>
                Click al padre | enviar datos a una funcion padre
            </button>
        </Fragment>
    );
}



export default Tabla;