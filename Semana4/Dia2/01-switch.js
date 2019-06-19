// switch sirve para evaluar los posibles valores de una variable
// 
var dia = 2;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    default:
        console.log("No es un día valido");
}

// calificacion de notas
var calificacion = 15;
switch (true) {
    case calificacion >= 0 && calificacion <= 10:
        console.log("En proceso de calificación")
        break;
    case calificacion >= 11 && calificacion <= 15:
        console.log("Regular")
        break;
    case calificacion >= 16 && calificacion <= 20:
        console.log("Aceptable")
        break;
    default:
        console.log("Error, la nota es incorreta")
}