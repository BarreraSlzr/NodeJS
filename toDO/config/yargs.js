const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const argv = require('yargs')
    .command( 'crear', 'Crear una nueva tarea',
        {
            descripcion
        }
    ).command( 'mostrar', 'Mostrar las tareas tarea'
    ).command( 'actualizar', 'Actualizar una tarea',
        {
            descripcion,
            completado: {
                alias: 'c',
                default: true
            }
        }
        
    ).command( 'borrar', "Borrar una tarea",{
        descripcion
    }
    ).help()
    .argv

module.exports = {
    argv
}