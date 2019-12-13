import React, { Component } from 'react';
// instalamos npm i axios
import axios from 'axios';
// instalamos npm i sweetalert2
import Swal from 'sweetalert2';
// importamos lo siguiente para redireccionar
import {withRouter} from 'react-router-dom'
import Pabellon from '../pabellon/Pabellon';
 class Formulario extends Component {
    state = {
        nombrePabellon:'',
        error:false
    }
    // escucharCambios = (e) => {
    //     console.log({
    //         value: e.target.value,
    //         name: e.target.name
    //     });
    // }

    escucharClick = (e) => {
        console.log("Se hizo click");
    }

    escucharSubmit = (e) => {
        e.preventDefault();
        // console.log("Se ejecuto el submit");
        // console.log(this.state); trim() quita los espacios en blanco
        if (this.props.formValues.nombrePabellon.trim()===''){
            if(!this.state.error){
                this.setState({
                    error:true
                });
            }
        }else{
            if(this.state.error){
                this.setState({
                    error:false
                });
            }
            let misHeaders={
                "Content-Type":"application/json"
            }
            let data={
                // pabellon:{
                    pab_nom:this.props.formValues.nombrePabellon
                // }
            }
            axios.post('http://localhost:4500/api/pabellon',
            data,{headers:misHeaders}).then(rpta=>{
                if(rpta.status===201){
                    // console.log("Pabellon creado");
                    Swal.fire(
                        'Pabellon Creado!',
                        'Exito a creado el pabellon',
                        'success'
                    ).then(()=>{
                        // componentre history
                        this.props.history.push('/pabellones')
                    })
                }else{
                    console.log("Error algo ha pasado");
                }
            })
        }
       

    }

    manejarCambios = (e) => {
        this.setState({
            // nombrePabellon: e.target.value
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Nuevo Registro</h4>
                <form onSubmit={this.escucharSubmit}>
                    <div className="form-group">
                        <label>
                            Nombre Pabellón
                        </label>
                        <input 
                            onChange={this.props.onChange} className="form-control" 
                            type="text" 
                            name="nombrePabellon" 
                            value={this.props.formValues.nombrePabellon}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Encargado
                        </label>
                        <input 
                            onChange={this.props.onChange} className="form-control" 
                            type="text" 
                            name="encargado" 
                            value={this.props.formValues.encargado}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Area
                        </label>
                        <input 
                            onChange={this.props.onChange} className="form-control" 
                            type="text" 
                            name="area"
                            value={this.props.formValues.area}
                        />
                    </div>

                    {/* onClick={this.escucharClick}  */}
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        )
    }
}

// agregamos esto al final para poder redireccionar a pabellones luego de ingrear un nuevo pabellon
export default withRouter(Formulario);