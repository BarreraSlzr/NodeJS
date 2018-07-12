
// requires
const { argv } = require('./config/yargs');
const { crearArchivo, listarTablar  } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch ( comando ) {
    case 'listar':
        listarTablar( argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite);
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv2 = process.argv[2].split('=')[1];

// console.log(argv.base);
// console.log(argv.limite);




