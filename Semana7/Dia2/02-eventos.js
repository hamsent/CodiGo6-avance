window.onload=function(){
    var input=document.getElementById("inputCorreo");
    var captcha=document.getElementById("captcha");
    // var imagen=document.getElementById("imagen");

    input.onkeyup=function(e){
        console.log("una tecla ha sido pulsada");
        console.log("tecla pulsada"+ e.key);
        console.log("codigo de tecla"+ e.keyCode);
        console.log("KeyCode transformado: " + String.fromCodePoint(e.keyCode));
        console.log(this.value);
    }
    
    input.onkeypress=function(e){
        console.log("onkeypress: "+this.value);
    }

    captcha.ondblclick=function(){
        imagen.style.filter="grayscale(100%)";
        imagen.style.border="4px solid red";
    }
}