const express = require('express');
const axios = require('axios');
const app = express();

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

const listaUsuarios = [
    'Ivens',
    'Jailson',
    'Maria',
    'Natalia',
    'Ariel',
    'Nykolle',
]

// Query Params
// Ex: localhost:3000/usuarios?nome=Ivens
app.get('/usuarios', (req, res) => {
    const {
        nome
    } = req.query;
    let listaRetorno = listaUsuarios.filter(i => i.includes(nome || ''));
    return res.json(listaRetorno);
});

// Route Params 
// Ex: ecommer.com.br/produtos/4/detalhes
app.get('/hello/:usuario', (req, res) => {
    const {
        usuario
    } = req.params;
    return res.send(`Hello world ${usuario}`);
});

app.get('/pokemons', async (req, res) => {
    const responseAxios = await api.get('pokemon?limit=100&offset=200');
    const {
        data
    } = responseAxios;
    const retorno = {
        ...data,
        results: data.results.map(item => {
            item.greetings = 'Olá';
            return item;
        })
    }
    return res.json(retorno);
});

app.listen(1234, () => {
    console.log('Servidor rodando na porta 1234');
});

//