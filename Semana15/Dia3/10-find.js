
// ([arreglo].find()=>{})
// recibe parametros de forma similar a filter
// solo devuelve la primera ocurrencia que encuentre
let alumnitos=[
    {id:1,nombre:"Juan",edad:20},
    {id:2,nombre:"Martha",edad:30},
    {id:3,nombre:"Erika",edad:25},
    {id:4,nombre:"Ronald",edad:27}
]
// va a encontrar en todo el arreglo el elemento que cumpla la condicion
let encontrado=alumnitos.find((alumno)=>{
    return alumno.edad===25;
})

console.log(encontrado);