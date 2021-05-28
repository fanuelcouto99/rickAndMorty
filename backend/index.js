const express = require('express');
const app = express();

app.get('/', (request, response) => {
    return response.send('Funciona');
});

app.get('/source', (request, response) => {
    return response.send('Não tem pesquisa ainda');
});

app.get('/detail', (request, response) => {
    return response.send('Ainda será montado os detalhes');
});

app.listen(3333);