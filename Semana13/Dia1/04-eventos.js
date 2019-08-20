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
    $("#imagen").hover(function () { $(this).addClass("rounded-circle"); }, function () { $(this).removeClass("rounded-circle"); });



    reset();
}

// aprender mouseove, mouseup