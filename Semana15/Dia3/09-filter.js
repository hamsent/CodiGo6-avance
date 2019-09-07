let alumnitos=[
    {id:1,nombre:"Juan",edad:20},
    {id:2,nombre:"Martha",edad:30},
    {id:3,nombre:"Erika",edad:25},
    {id:4,nombre:"Ronald",edad:27}
]

let mayoresA20=alumnitos.filter(alumno=>{
    return alumno.edad>26;
});
// mayoresA20.forEach(function(elemento){
//     console.log(elemento);
// })

mayoresA20.forEach(elemento=>console.log(elemento));