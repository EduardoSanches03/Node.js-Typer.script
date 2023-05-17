const  express = require("express");
const rotas = express.Router();
const clienteController = require("./controller/clienteController");

rotas.get('/cliente', clienteController.read);
rotas.post('/cliente', clienteController.create);
rotas.delete('/cliente/:id',clienteController.delete);
rotas.post('/cliente/:id', clienteController.update);

module.exports = rotas;