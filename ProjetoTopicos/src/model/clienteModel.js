const mongoose = require("mongoose");

const clienteModelSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    telefone: String,
    email: String
})

module.exports = mongoose.model("cliente", clienteModelSchema);