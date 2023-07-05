const express = require("express");
const rotas = express.Router();
const dadosPedidoController = require("./controller/dadosPedidoController");
const dadosClienteController = require("./controller/dadosCliente.Controller");

rotas.get("/menuPedido.html", dadosPedidoController.menuPedido);
rotas.get("/listarPedido.ejs", dadosPedidoController.listarPedidos);
rotas.post("/cadastroPedido.html", dadosPedidoController.cadastrarPedido);
rotas.get("/buscarIDCliente.html", dadosPedidoController.buscarIDCliente);
rotas.post("/dadosPedido", dadosPedidoController.buscarID)
rotas.get("/deletarPedido.html", dadosPedidoController.deletarPedido);
rotas.post("/deletePedido", dadosPedidoController.deletePedido);

rotas.get("/atualizarPedidoID.html", dadosPedidoController.atualizarPedidoRota);
rotas.get("/atualizarPedido.ejs", dadosPedidoController.atualizarPedido);
rotas.get("/atualizarPedidoID.html", dadosPedidoController.atualizarPedido);
rotas.post("/atualizarPedido.html", dadosPedidoController.salvarAtualizacaoPedido);
rotas.post("/atualizarPedido", dadosPedidoController.atualizarPedido);


rotas.get("/menu", dadosClienteController.menu);
rotas.get("/menu.html", dadosClienteController.menu);
rotas.get("/menuCliente.html", dadosClienteController.menuCliente);
rotas.get("/listarCliente.ejs", dadosClienteController.listar);
rotas.get("/formCadastro.html", dadosClienteController.formCadastro);
rotas.get("/deletarCliente.html", dadosClienteController.deletarCliente);
rotas.get("/atualizarClienteID.html", dadosClienteController.atualizarCliente);
rotas.get("/atualizarCliente.ejs", dadosClienteController.atualizar);
rotas.get("/atualizarClienteID.html", dadosClienteController.atualizar);
rotas.post("/atualizarCliente.html", dadosClienteController.salvarAtualizacao);
rotas.post("/atualizar", dadosClienteController.atualizar);
rotas.post("/dados", dadosClienteController.registrar);
rotas.post("/delete", dadosClienteController.delete);

module.exports = rotas;
