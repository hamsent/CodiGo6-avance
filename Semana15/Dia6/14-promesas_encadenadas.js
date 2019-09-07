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

let getAlumnoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].id === id) {
                    resolve(alumnos[i])
                    return;
                }

            }
            reject("No se encontro nigún alumno con id: " + id);
        }, 2500);
    });
}
let getCursosByAlumnoId = (id) => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        for (let i = 0; i < cursos.length; i++) {
            if (cursos[i].idAlumno === id) {
                resolve(cursos[i]);
                return;
            }
        }
        reject("Se encontro el alumno pero no tiene cursos");
    }, 2000);
});
   
}

// getAlumnoById(1).then(objAlumno => {
//     console.log(objAlumno);
//     getCursosByAlumnoId(objAlumno.id).then(({ cursos }) => {
//         console.log(cursos);
//     }).catch((error) => {
//         console.log(error);
//     });
// }).catch((error) => {
//     console.log(error);
// });

getAlumnoById(1).then((objAlumno)=>{
    console.log(objAlumno);
    return getCursosByAlumnoId(1);
    }).then(({cursos})=>{
        console.log(cursos);
    }).catch((error)=>{
        console.log(error);
    })













