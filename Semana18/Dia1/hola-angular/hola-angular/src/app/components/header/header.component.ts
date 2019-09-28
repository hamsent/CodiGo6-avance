import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  marca: string="CodiGo";
  sesion:boolean=true;
  links:Array<string>=['Nosotros','Portafolio','Contacto'];
  
    constructor() { }

  ngOnInit() {
  }

}
