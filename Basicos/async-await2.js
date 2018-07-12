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
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 3000
}, {
    id: 3,
    salario: 5000
}];

let getEmpleado = async (id) => {
    
    let empleadoDB = empleados.find( empleado => empleado.id === id);
    
    if ( !empleadoDB ){
        throw new Error(`No existe un empleado con el ID: ${ id }`);
    } else {
        return empleadoDB;
        }

}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let res = await getSalario(empleado);
    return `${res.nombre} tiene un salario de $${res.salario}`;
}

let getSalario = async ( empleado ) => {
    
    let salarioDB = salarios.find( salario => salario.id == empleado.id);
    if( !salarioDB){
        throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
        } else {
            return {
                nombre: empleado.nombre,
                salario: salarioDB.salario
            };
        }
}

getInformacion(4)
    .then( mensaje => console.log(mensaje))
    .catch( err => console.log( err ));
/* 
getEmpleado(10).then( empleado => {
  return getSalario(empleado);   
}).then( resp => 
    console.log(`El salario de ${resp.nombre} es de $${resp.salario}`)
)
.catch( err => {
    console.log(err);
}) */