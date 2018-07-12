// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 1000);

let getUsuarioById  = (id, callback ) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }
    if( id === 20 ){
        callback(`El Usuario con id ${ id }, no existe en la BD`)
    } else {
        callback(null, usuario); // Null -> No envia error
    }
}

getUsuarioById(1, (err, usuario) => {
    if ( err  ){
        return console.log(err);
    }
    console.log(`Usuario de base de datos`, usuario);
})