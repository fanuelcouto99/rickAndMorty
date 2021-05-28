const express = require('express')
const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send('Funciona');
});

routes.get('/source', (request, response) => {
    return response.send('Não tem pesquisa ainda');
});

routes.get('/detail', (request, response) => {
    return response.send('Ainda será montado os detalhes');
});

module.exports = routes;