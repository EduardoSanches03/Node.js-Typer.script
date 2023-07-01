const Pedido = require("../model/pedidoModel");
const Cliente = require("../model/clienteModel");

const path = require("path");
const fs = require("fs");

module.exports = {
  async menuPedido(req, res) {
    const filePath = path.join(__dirname, "../view/menuPedido.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return res
          .status(500)
          .send("Ocorreu um erro ao processar a solicitação.");
      }
      res.set("Content-Type", "text/html");
      res.send(data);
    });
  },

  async cadastrarPedido(req, res) {
    const filePath = path.join(__dirname, "../view/cadastroPedido.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return res
          .status(500)
          .send("Ocorreu um erro ao processar a solicitação.");
      }
      res.set("Content-Type", "text/html");
      res.send(data);
    });
  },

  async buscarIDCliente(req, res) {
    const filePath = path.join(__dirname, "../view/buscarIDCliente.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Erro ao ler o arquivo:", err);
        return res
          .status(500)
          .send("Ocorreu um erro ao processar a solicitação.");
      }
      res.set("Content-Type", "text/html");
      res.send(data);
    });
  },

  async listarPedido(req, res) {
    const listarPedidos = await Pedido.find();
    res.render("listarPedidos.ejs", { listarPedidos });
  },

async buscarID(req,res){
  const {id} = req.body
  const cliente_pedido = await Cliente.findById(id);

  const {produto, valor, status } = req.body;
    const criaProduto = await Pedido.create({
      nomeCliente: cliente_pedido.nomeCliente,
      cpfCliente: cliente_pedido.cpfCliente,
      produto,
      valor,
      status,
    });
    console.log("produto adicionado " + criaProduto.nome);
    res.redirect("/menuPedido.html");
},

/*
  async cadastroPedido(req, res) {
    const { produto, valor, status } = req.body;
    const criaProduto = await Pedido.create({
      produto,
      valor,
      status,
    });
    console.log("produto adicionado " + criaProduto.nome);
    res.redirect("/menuPedido.html");
  },

  */

  async create(req, res) {
    try {
      const { cliente, produto, valor, status } = req.body;
      const clienteEncontrado = await Cliente.findById(cliente);
      const pedido = await Pedido.create({
        cliente: clienteEncontrado._id,
        cpfCliente: clienteEncontrado.cpf,
        nomeCliente: clienteEncontrado.nome,
        produto,
        valor,
        status,
      });
      return res.json(pedido);
    } catch (err) {
      res.status(400).send({ error: "Erro ao criar o pedido" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const pedidoAlterar = await Pedido.findOne({ _id: id });

      pedidoAlterar.status = status;

      await pedidoAlterar.save();
      return res.json(pedidoAlterar);
    } catch (err) {
      res.status(400).send({ error: "Não foi possível realziar a alteração" });
    }
  },
};
