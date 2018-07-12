/* let getNombre = async() => {
    
    throw new Error( 'No existe nombre para ese usuario ');
    return 'Emmanuel';
} */

let getNombre = () => {
    return new Promise ( ( res, rej ) => {
        setTimeout(()=> {
            res( 'Emmanuel');
        }, 3000)

    });
}

let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${ nombre }`;
}

saludo().then( mensaje => {
    console.log( mensaje );
})/* 
.catch ( e => {
    console.log('Error de ASYNC', e);
}) */