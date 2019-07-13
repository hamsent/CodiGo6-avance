window.onload = function () {
    var form = document.getElementById("formulario");
    var input = document.getElementById("inputTarea");
    var list = document.getElementById("lista");

    function obtener() {
        
        var tareasObtenidas = localStorage.getItem("misTareas");
        // Console.log(tareasObtenidas);
        list.innerHTML=tareasObtenidas;
        
    }

    function guardar() {
        // en vez de utilizaer setItem("nombreItem","contenido")
        // guardaremos de la siguiente manera
        // localStorage.nombreItem="contenidoItem";
        // console.log(list.innerHTML);
        // localStorage.setItem("misTareas",list.innerHTML);
        localStorage.misTareas = list.innerHTML;
    }
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var tarea = input.value;
        // console.log(tarea);
        var li = document.createElement("li");
        li.innerHTML = tarea;
        list.appendChild(li);
        input.value = "";
        guardar();

    });
    list.addEventListener("dblclick", function (e) {
        // e.target nos imprimira el elemento al que le hemos hecho doble click
        var tarea=e.target;
        // console.log(tarea);
        // console.log(tarea.parentNode);
        // this.parentNode hara referencia al node padre
        // parentNode removeChild removera al nodo hijo
        tarea.parentNode.removeChild(tarea);
        guardar();

    })
}