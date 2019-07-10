// window.onLoad
// evento que se ejecuta cuando ya cargue todos los elementos hijos en este caso los elementos del (DOM)
window.onload=function(){
    // va todo nuestro codigo que reramosejecutar
    var body=document.querySelector("body");
    // var pincel=document.getElementById("pincel");
    // style.cursor me permite cambiar el cursor dentro de un elementoen este caso body
    // la propiedad cursor puede recibir una ruta
    // cursor:url('ruta') p_
    body.style.cursor="url('./dog.png') 0 100,auto";
     // onmousemove va a ser el evento cuando nosotros, movamos el mouse
    body.onmousemove= function(e){
        // console.log(`La posicion en X = ${e.offsetX}`);
        // console.log(`La posicion en Y = ${e.offsetY}`);
        // pincel.style.left=`${e.offsetX-10}px`;
        // pincel.style.top=`${e.offsetY-55}px`;
        // this.appendChild(pincel);

        var punto=document.createElement("div");
        punto.style.width="2px";
        punto.style.height="2px";
        punto.style.borderRadius="50%";
        punto.style.backgroundColor="lightblue";
        punto.style.position="absolute";
        punto.style.left=`${e.offsetX}px`;
        punto.style.top=`${e.offsetY}px`;
        punto.style.boxShadow="0 0 6px #fff";
        this.appendChild(punto);
    }
}