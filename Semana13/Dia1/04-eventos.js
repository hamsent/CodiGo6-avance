window.onload = function () {


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
    })
    function reset() {
        $("#listaWhisky,#listaRon").hide();
        $("#btnWhisky,#btnRon").removeClass("activo");
    }
    $("#btnWhisky").click(function () {
        reset();
        $("#listaWhisky").show();
        $(this).addClass("activo");
    });

    var btnRon = $("#btnRon");
    btnRon.click(function () {
        reset();
        $("#listaRon").show();
        btnRon.addClass("activo");


    })

    $(".bebidas").dblclick(function () {
        // Swal.fire({
        //     position: 'top-end',
        //     type: 'success',

        //     title:"agregado al carrito "+$(this).text(),
        //     showConfirmButton: false,
        //     timer: 1500
        //   })
        Toast.fire({
            type: 'success',
            title: "agregado al carrito " + $(this).text()
        })
    })

    // mouseovercuando el mouse esta encima del elemento

    // $("#imagen").mouseover(function () {
    //     $(this).addClass("rounded-circle");
    // });

    // // cuando el mouse salga o se libere del elemento

    // $("#imagen").mouseout(function () {
    //     $(this).removeClass("rounded-circle");
    // });

    // funcion hover > combina mouseover y mouseout
    $("#imagen").hover(function () {
        $(this).addClass("rounded-circle");
    }, function () {
        $(this).removeClass("rounded-circle");
    });

    // focus, cuando el cursor se encuentra sobre ele elmento
    $("#inputBuscar").focus(function () {
        $(this).removeClass("form-control");
        $(this).addClass("barra-activa");

    });


    // blur. cuando el cursor libera o sale del elemento
    $("#inputBuscar").blur(function () {
        $(this).removeClass("barra-activa");
        $(this).addClass("form-control");

    });

    $("#btnRon").contextmenu(function (e) {

        e.preventDefault();
        // remove => quita un elemento del DOM
        $("#miMenu").remove();
        var X=e.clientX;
        var Y=e.clientY;
// creando el elementoi ul que sera el menu
        var menu=$(`<ul></ul>`);
        // attr=> asigna el valor de un atributo
        menu.attr("id","miMenu");
        menu.addClass("list-group");
// creando una opcion (li) para el elemento ul
        var option1=$("<li></li>");
        option1.addClass("list-group-item");
        option1.html("Ocultar");


        // creando una opcion (li) para el elemento ul
        var optionImprimir=$(`<li></li>`);
        optionImprimir.addClass("list-group-item");
        optionImprimir.html("imprimir");

        optionImprimir.click(function(){
            $("#miMenu").remove();
            window.print();
        });

// inyectando el elemento li al elemento ul
        menu.append(option1);
        menu.append(optionImprimir);
        menu.css("position","absolute").css("top",`${Y}px`).css("left",`${X}px`);
        $("body").append(menu);


        // <ul class="list-group">
        //     <li class="list-group-item">Active item</li>
        //     <li class="list-group-item">Item</li>
        //     <li class="list-group-item">Disabled item</li>
        // </ul>
        console.log(e);
    });

    reset();
}

// aprender mouseove, mouseup