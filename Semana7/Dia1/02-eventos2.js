var inputCorreo = document.getElementById("inputCorreo");
var resultado = document.getElementById("resultado");

var personas = [{
    nombre: "Jorge",
    correo: "jgarnica@gmail.com"
}, {
    nombre: "Omar",
    correo: "ojimenez@gmail.com"
}]
// onfocus => evento que se desencadena cuando el cursor se encuentra sobre un elemento
inputCorreo.onfocus = function () {
    inputCorreo.style.backgroundColor = "#3498db";
    inputCorreo.style.borderBottom = "4px solid #c0392b";
    inputCorreo.style.borderRadius = "8px";
}

// onblur => evento que se desencadena cuando el cursor deja, sale o avandona un elemento
inputCorreo.onblur = function () {
    inputCorreo.style.backgroundColor = "transparent";
    inputCorreo.style.borderBottom = "4px solid #2ecc71";
    inputCorreo.style.borderRadius = "0px";
    //  buscar el correo ingresado en ñla lista de correos
    // toLowerCase => convierte a minusculas
    // trim() =>quita los espacios en blanco a los extremos
    var correoIngresado = inputCorreo.value.toLowerCase().trim();
    for (var i = 0; i < personas.length; i++) {

        if (personas[i].correo === correoIngresado) {
            resultado.removeAttribute("hidden");
            break;
        }
    }

}