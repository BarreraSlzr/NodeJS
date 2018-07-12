let empleados = [{
    id: 1,
    nombre: 'Emmanuel'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}, {
    id: 4,
    nombre: 'Pedro'
},
];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}, {
    id: 3,
    salario: 5000
}
];

let getEmpleado = (id) => {
    
    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id);
        if ( !empleadoDB ){
            reject(`No existe un empleado con el ID: ${ id }`);
        } else {
            resolve(empleadoDB);
        }

    })

}

let getSalario = ( empleado) => {
    
    return new Promise( (res, rej) => {
        let salarioDB = salarios.find( salario => salario.id == empleado.id);
        if( !salarioDB){
            rej(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            res({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            } );
        }
    })
    
}

getEmpleado(10).then( empleado => {
  return getSalario(empleado);   
}).then( resp => 
    console.log(`El salario de ${resp.nombre} es de $${resp.salario}`)
)
.catch( err => {
    console.log(err);
})
