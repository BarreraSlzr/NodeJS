const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crear, mostrarTareas, actualizar, borrar } = require('./toDO/toDO');

// console.log(argv);
let comando = argv._[0];

switch ( comando ) {
    case 'crear':
        crear( argv.descripcion );
        break;
    case 'mostrar':
        mostrarTareas();
        break;
    case 'actualizar':
        actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        if (borrar( argv.descripcion ))
            console.log(`Exito al borrar`.green);
        else
            console.log(`No se logro borrar ninguna tarea`.red);
        break;
    default:
        console.log(' Comando no reconocido');
        break;
}
