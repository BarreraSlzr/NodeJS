require('../config/config.js');
const express = require('express');
const app = express();

// Body-parser
const bodyparse = require('body-parser');
app.use(bodyparse.urlencoded({ extended: false}));
app.use(bodyparse.json());

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    res.json(
        body
    );
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json(
        id
    );
});

app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {
    console.log( 'Escuchando puerto: ', process.env.PORT);
});