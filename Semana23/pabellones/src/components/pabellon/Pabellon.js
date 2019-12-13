import React, { Component } from 'react'
import { URL_BACKEND } from '../../environments/environments';
// luego de instalar npm i mdbreact
import { MDBDataTable } from 'mdbreact';

export default class Pabellon extends Component {
  //  se ejecuta primero
  constructor(props) {
    super(props);
    this.state = {
      pabellones: [],
      cargando: true,
      // para cambiar el estado no se usa true o false, ver el paso A
      data: {}
    }
  }

  async cargarPabellones() {
    let response = await fetch(`${URL_BACKEND}/api/pabellon`);
    let pabellonesJSON = await response.json();

    let filas = [];
    pabellonesJSON.content.forEach((pabellon, i) => {
      let objfila = {
        nro: (i + 1),
        pab_id: pabellon.pab_id,
        pab_nom: pabellon.pab_nom,
        createdAt: pabellon.createdAt,
        updatedAt: pabellon.updatedAt

      }
      filas.push(objfila);
    });

    let data = {
      columns: [
        { label: "#", field: "nro", sort: "asc" },
        { label: "ID", field: "pab_id", sort: "asc" },
        { label: "NAME", field: "pab_nom", sort: "asc" },
        { label: "FECHA DE CREACIÓN", field: "createdAt", sort: "asc" },
        { label: "FECHA DE ACTUALIZACION", field: "updatedAt", sort: "asc" }

      ],
      rows: filas
    }

    console.log(pabellonesJSON);
    // A para cambiar el state se usa lo siguiente
    this.setState({
      cargando: false,
      data: data
    })

  }

  componentDidMount() {
    this.cargarPabellones();
  }

  // segundo
  render() {
    if (this.state.cargando === true) {
      return (
        <div>
          cargando...
      </div>
      )
    }
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            {this.state.data.rows.length === 0 ?
              (<div>No hay datos</div>):

              (<MDBDataTable
                striped
                bordered
                hover
                data={this.state.data}
              />)
            }
          </div>
        </div>
      </div>
    )
  }
}
