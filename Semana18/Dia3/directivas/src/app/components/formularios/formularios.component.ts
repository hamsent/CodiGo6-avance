import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imprimir(nombres, apellidos) {
    console.log("click del boton");
    console.log(`Nombres: ${nombres.value}`);
    console.log(`Apellidos: ${apellidos.value}`);
    // nos muestra toda la etiqueta y si le pongo .value obtengo el valor
  }
  imprimir2(apodo, pregunta) {
    console.log(`Apodo : ${apodo.value}`);
    console.log(`Pregunta : ${pregunta.value}`);
  }
  imprimir3(raza, edad) {
    console.log(raza);
    console.log(edad);
  }

}
