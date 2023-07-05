const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  produto: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pendente", "Em andamento", "Concluído"],
    default: "Pendente",
  },
});

module.exports = mongoose.model("Pedido", pedidoSchema);
