const express = require('express')
const routes = express.Router();

const personaController = require('./controllers/PersonaController');

routes.get('/', personaController.index);

routes.get('/source', personaController.search);

routes.get('/detail', personaController.detail);

module.exports = routes;