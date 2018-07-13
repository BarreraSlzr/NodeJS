const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers.js');
const port = process.env.PORT || 3000

app.use( express.static( __dirname + '/public/'));

// Express HBS ENGINE
hbs.registerPartials( __dirname + '/views/partials/');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Emmanuel Barrera'
    });
})
app.get('/about', (req, res) => {
    res.render('about');
})


app.listen( port, () => {
    console.log('Escuchando en el puerto 3000');
});