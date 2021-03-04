const express = require('express');
const app = express();

app.get('/:usuario', (req, res) => {
    console.log(req.params);
    return res.send('Hello Word' + usuario);
});

//app.get('/usuarios/:id', (req, res))

app.listen(1233, () => {
    console.log('Servidor rodando na porta 1234');
});