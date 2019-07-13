window.onload = function () {
    var input = document.getElementById("inputCorreo");
    var captcha = document.getElementById("captcha");
    // var imagen=document.getElementById("imagen");
    // e preferible que 
    input.onkeyup = function (e) {
        console.log("una tecla ha sido pulsada");
        console.log("tecla pulsada" + e.key);
        console.log("codigo de tecla" + e.keyCode);
        console.log("KeyCode transformado: " + String.fromCodePoint(e.keyCode));
        console.log(this.value);
    }

    input.onkeypress = function (e) {
        console.log("onkeypress: " + this.value);
    }

    captcha.ondblclick = function () {
        imagen.style.filter = "grayscale(100%)";
        imagen.style.border = "4px solid red";
    }
    var comidaCasera = ['Lentejitas', 'Cordero', 'Saltado', 'Aji de Gallina'];
    var comidaRapida = ['Salchipapa', 'Empanada', 'Papa Rellena', 'Burguer'];
    var piqueos = ['Papitas', 'Chocolates', 'Galletas', ''];

    var selectComida = document.getElementById("comida");
    var selectTipo = document.getElementById("tipocomida");

    selectComida.onchange = function () {
        selectTipo.removeAttribute("disabled");
        selectTipo.innerHTML="";
        // if (selectComida.value);
        // con esto evaluamos el valor de selectComida para asegurarnos que de verdad haya una opcion seleccionada

        if (this.value != 0) {
            switch (this.value) {
                case 'ff':
                    for (var i = 0; i < comidaRapida.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${comidaRapida[i]}`;
                        opcion.setAttribute("value", comidaRapida[i].charAt(0));
                        selectTipo.appendChild(opcion);
                    }
                    break;
                case 'cc':
                    for (var i = 0; i < comidaCasera.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${comidaCasera[i]}`;
                        opcion.setAttribute("value", comidaCasera[i].charAt(0));
                        selectTipo.appendChild(opcion);
                    }
                    break;
                case 'p':
                    for (var i = 0; i < piqueos.length; i++) {
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${piqueos[i]}`;
                        opcion.setAttribute("value", piqueos[i].charAt(0));
                        selectTipo.appendChild(opcion);
                    }
                    break;
            }
        }
    }
}