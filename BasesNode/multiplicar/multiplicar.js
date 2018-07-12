// require
const fs = require('fs');
const colors = require('colors/safe');


let listarTablar = ( base, limite ) => {
    multiplicacion( base, limite).then(( data )=> console.log(data));
}

let crearArchivo = ( base, limite ) => {
    multiplicacion( base, limite).then(( data ) => {
        let nombreArchivo = `tablas/tabla-${ base }-al-${ limite }.txt`;
        fs.writeFile( nombreArchivo, data, (err) => {
            if (err) throw new Error( err );
            else console.log( `Archivo creado: ${colors.green(nombreArchivo)}`);
        });
    })
}

let multiplicacion = async ( base, limite ) => {
    
    if ( Number(base)){
        if (Number(limite)){
            let data = `Tabla de ${base} al ${limite}\n=============================\n`
                for( let i = 1; i <= limite; i++){
                    data += `${ base } x ${ i } =  ${ base * i }\n`; 
                }
                return data;
            } else 
            throw new Error(`El valor '${ limite }' del limite no es un numero valido`);
        } else 
        throw new Error(`El valor '${ base }'de la base no es un numero valido`);
    }

module.exports = {
    crearArchivo,
    listarTablar
}