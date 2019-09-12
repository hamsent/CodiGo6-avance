window.onload=()=>{
    // google.maps.Map(donde se va a renderizar,centro, zoom)
    let divMapa=document.getElementById("mapa");
    let centro={lat:-14,lng:-71}
    let mapa=new google.maps.Map(divMapa,{
        center:centro,
        zoom:8
    });
    
}