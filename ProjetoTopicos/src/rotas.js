const  express = require("express");
const rotas = express.Router();
const clienteController = require("./controller/clienteController");
const produtoController = require("./controller/produtoController");
const pedidoController = require("./controller/pedidoController");

rotas.get('/cliente', clienteController.read);
rotas.post('/cliente', clienteController.create);
rotas.delete('/cliente/:id',clienteController.delete);
rotas.post('/cliente/:id', clienteController.update);

rotas.get('/produto', produtoController.read);
rotas.post('/produto', produtoController.create);
rotas.delete('/produto/:id', produtoController.delete);
rotas.post('/produto/:id', produtoController.update);

rotas.get('/pedido', pedidoController.read);
rotas.post('/pedido', pedidoController.create);


module.exports = rotas;