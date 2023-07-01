const mongoose = require("mongoose");
const pedidoModelSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cliente",
  },

  cpfCliente: {
    type: mongoose.Schema.Types.String,
    ref: "cliente",
  },

  nomeCliente: {
    type: mongoose.Schema.Types.String,
    ref: "cliente",
  },

  produto: String,
  valor: Number,
  status: String,
});

module.exports = mongoose.model("pedido", pedidoModelSchema);
