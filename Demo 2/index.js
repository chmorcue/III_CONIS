const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/saludo/:nombre', (req, res) => {
    res.send(`Hola , que tal ${req.params.nombre}`);

});

app.post('/mensaje', (req, res) => {
    let devol = {
        mensaje: 'Hola Mundo'
    };

    res.json(devol);
})

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
})