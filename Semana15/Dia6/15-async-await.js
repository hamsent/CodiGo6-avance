let alumnos = [
    {
        id: 1,
        nombre: "Patricio la estrella",
        edad: 27
    },
    {
        id: 2,
        nombre: "Bob",
        edad: 25
    },
    {
        id: 3,
        nombre: "Arenita",
        edad: 20
    },
    {
        id: 4,
        nombre: "Don Cangrejo",
        edad: 40
    }
]

let cursos = [
    {
        idAlumno: 1,
        cursos: ["HTML", "jsx", "Ionic"]
    },
    {
        idAlumno: 2,
        cursos: ["WebPack", "MongoDB", "Firebase"]
    }
]


// async await que convertira mi funcion a una funcion asincrona
let getAlumnoById=async(id)=>{
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id===id) {
            return alumnos[i];
        }
        
    }
    throw "ups no hay el alumno";
}

let getCursosByAlumnoById=async(id)=>{
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].idAlumno===id) {
            return cursos[i];
        }
        
    }
    throw "No se han encontrado curos para el alumno";
}

let getGatos=async()=>{
    let alumno=await getAlumnoById(1);
    let curso=await getCursosByAlumnoById(1);

    // console.log(alumnos);
    // console.log(curso);
    return [alumno,curso];
}
getGatos().then(([alumno,curso])=>{
    console.log(alumno);
    console.log(curso);
}).catch(error=>{
    console.log(error);
})