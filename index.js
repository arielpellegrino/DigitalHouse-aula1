const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Hello Word');
});
app.listen(1233, () => {
    console.log('Servidor rodando na porta 1234');
});