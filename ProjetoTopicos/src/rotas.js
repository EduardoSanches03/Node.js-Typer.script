const  express = require("express");
const rotas = express.Router();
const clienteController = require("./controller/clienteController");
const pedidoController = require("./controller/pedidoController");

rotas.get('/cliente', clienteController.read);
rotas.post('/cliente', clienteController.create);
rotas.delete('/cliente/:id',clienteController.delete);
rotas.post('/cliente/:id', clienteController.update);


rotas.get('/pedido', pedidoController.read);
rotas.post('/pedido', pedidoController.create);
rotas.post('/pedido/:id', pedidoController.update);


module.exports = rotas;