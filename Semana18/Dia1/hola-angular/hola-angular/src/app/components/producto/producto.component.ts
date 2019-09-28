import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  
  title='Título del producto';
  content='Producto novedoso te limia la casa te lava la ropa y te da el desayuno';
  price='$ 899.99';
  constructor() { }

  ngOnInit() {
  }

}
