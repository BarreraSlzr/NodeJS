const fs = require('fs');

let listadoTareas = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTareas);
    fs.writeFile( 'db/db.json', data, 
        (err) => {
            if (err)
                throw new Error('No se pudo guardar en database', err)
        }
    );
}

const cargarDB = () => {
    try {
        return listadoTareas = require('../db/db.json');
    } catch (error) {
        return listadoTareas = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };

    listadoTareas.push(tarea);
    guardarDB();
}

const mostrarTareas = () => {

    let listadoTareas = cargarDB();
    let i = 1;
    for (const tarea of listadoTareas) {        
        console.log(`=======\tTarea ${ i }\t=======`.blue);
        console.log(tarea.descripcion);
        if( tarea.completado )
            console.log(`Estado: Completado`.green);
        else 
            console.log(`Estado: En proceso`.red);
        console.log(`_______\t\t_______`.blue);
        i++;
    }    
}

const actualizar = ( descripcion, completado) => {
    cargarDB();

    let index = listadoTareas.findIndex( tarea => tarea.descripcion === descripcion);

    if( index >= 0){
        if( !completado || completado === 'false'){
            listadoTareas[index].completado = false
            guardarDB();
        } else if ( completado || completado === 'true' ){
            listadoTareas[index].completado = true
            guardarDB();
        } else return false;
    } else return false;
}

const borrar = ( descripcion ) => {
    cargarDB();

    let nuevoListado = listadoTareas.filter( tarea => tarea.descripcion !== descripcion);
    if( nuevoListado.length !== listadoTareas.length ){
        listadoTareas = nuevoListado;
        guardarDB();
        return true;
    } else return false;
}

module.exports = {
    crear,
    mostrarTareas,
    actualizar,
    borrar
}