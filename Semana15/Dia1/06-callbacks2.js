let BDalumnos=[
    {
        id:1,
        nombre:"Roberto",
        edad:30
    },
    {
        id:2,
        nombre:"Danny",
        edad:30
    },
    {
        id:3,
        nombre:"Patrick",
        edad:27
    }
];

// id=id a buscar, callback=mi funcion callback
let getAlumnoById=(id,callback)=>{
    for(let i=0;i<BDalumnos.length;i++){
        if(BDalumnos[i].id===id){
            callback(null,BDalumnos[i]);
            return;
           
        }
    }
    callback("No se encontro el alumno",null);
}
getAlumnoById(4,(error,objAlumno)=>{
    if(error){
        console.log(error);
    }else{
        console.log(objAlumno);
    }
});