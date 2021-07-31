const express = require('express');

const OperatorsController = require('./controllers/OperatorsController');

const routes = express.Router();

// buscar itens
routes.get('/operators', OperatorsController.getOperators);

// editar o item
// routes.put('/operators');

// // excluir o item
// routes.delete('/operators')

// // criar o item
// routes.post('/operators')

module.exports = routes;