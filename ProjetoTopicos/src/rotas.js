const  express = require("express");
const rotas = express.Router();
const pedidoController = require("./controller/pedidoController");
const dadosClienteController = require("./controller/dadosCliente.Controller");

rotas.get('/pedido', pedidoController.read);
rotas.post('/pedido', pedidoController.create);
rotas.post('/pedido/:id', pedidoController.update);

rotas.get('/form', dadosClienteController.form);
rotas.post('/dados', dadosClienteController.registrar);
module.exports = rotas;