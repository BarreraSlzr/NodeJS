const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('toUpperCase', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); 
    });
    return palabras.join(' ');
});