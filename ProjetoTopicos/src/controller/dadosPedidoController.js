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

  async deletarPedido(req, res) {
    const filePath = path.join(__dirname, "../view/deletarPedido.html");
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

  async atualizarPedidoRota(req, res) {
    const filePath = path.join(__dirname, "../view/atualizarPedidoID.html");
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

  async listarPedidos(req, res) {
    const pedidos = await Pedido.find().populate("cliente");
    res.render("listarPedidos.ejs", { listarPedidos: pedidos });
  },

  async buscarID(req, res) {
    try {
      const { id, produto, valor, status } = req.body;

      const cliente_pedido = await Cliente.findById(id);

      const pedido = await Pedido.create({
        cliente: cliente_pedido._id,
        cpfCliente: cliente_pedido.cpf,
        nomeCliente: cliente_pedido.nome,
        produto,
        valor,
        status,
      });

      console.log("Produto adicionado: " + pedido.produto);
      res.redirect("/menuPedido.html");
    } catch (err) {
      console.error("Erro ao criar o pedido:", err);
      res.status(400).send("Não foi possível criar o pedido.");
    }
  },

  async deletePedido(req, res) {
    const { id } = req.body;
    const pedidoDeletado = await Pedido.findByIdAndDelete(id);

    console.log("Pedido deletado:", pedidoDeletado);
    res.redirect("/menuPedido.html");
  },

  async atualizarPedido(req, res) {
    const { id } = req.body;
    const pedido = await Pedido.findById(id);

    if (!pedido) {
      return res.status(404).send("Pedido não encontrado.");
    }

    res.render("atualizarPedido.ejs", { pedido });
  },

  async salvarAtualizacaoPedido(req, res) {
    const { id, produto, valor, status } = req.body;

    try {
      const pedidoAtualizado = await Pedido.findByIdAndUpdate(
        id,
        { produto, valor, status },
        { new: true }
      );

      if (!pedidoAtualizado) {
        return res.status(404).send("Pedido não encontrado.");
      }

      console.log("Pedido atualizado:", pedidoAtualizado);
      res.redirect("/menuPedido.html");
    } catch (err) {
      console.error("Erro ao atualizar o pedido:", err);
      res.status(400).send("Não foi possível atualizar o pedido.");
    }
  },
};
