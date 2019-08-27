
// draggable, me permitira arrastrar el elemento por toda la ventana
$(".cuadrado").draggable();
// resizable,
$(".cuadrado").resizable();
// Sortable, me permitira reordenar mi lista
$(".bandas").sortable({
    update: function () {
        console.log("Se ha reordenado la tablita");
    }
});
// 
$(".cajita").draggable();

// droppable, me va ha permitir detectar cuando otro elemento se suelte
// dentro de este
$(".cajota").droppable({
    drop:function(evento) {
        console.log("ha caido alguien! o algo!");
        console.log(evento);
        $(this).css("background-color","yellow");
        $(this).css("border-radius","50%");
    }
});

$(".btnAnimar1").click(function(){
    // $(".efecto1").effect("explode");
    $(".efecto1").toggle("shake",100);
})

// mostrara una imagen si estacontiene el atributo
$("#imagen").tooltip();