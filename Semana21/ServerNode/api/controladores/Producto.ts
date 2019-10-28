import { Request, Response } from 'express';
import { listaProductos } from '../seeders/dbProductos'

export let getProductos = (req: Request, res: Response) => {
  // res.send("Entregando la lista de productos");
  // 
  res.status(200);
  res.send({
  "success":true,
  "message":"Lista de Productos",
  "content":listaProductos
  });
}

export let getProductoById = (req: Request, res: Response) => {
  // params los vamos a recibir como si fueran texto
  console.log(req.params.idproducto);
  let idRecibido=parseInt(req.params.idproducto);
  for (let i = 0; i < listaProductos.length; i++) {
    if (idRecibido===listaProductos[1].id) {
      res.status(200);
      res.send({
        success:true,
        message:"Producto Encontrado",
        content: listaProductos[i]
      });
      return;
    }else{
      res.status(404);
      res.send({
        success:false,
        message:"Producto no existente",
        context:""
      });
    }
    
  }

};

export let createProducto = ( req:Request, res:Response)=>{
  console.log(req.body);
  listaProductos.push(req.body);
  res.status(201);
  res.send({
    success:true,
    message:"Producto Creado",
    content:listaProductos
  });
};