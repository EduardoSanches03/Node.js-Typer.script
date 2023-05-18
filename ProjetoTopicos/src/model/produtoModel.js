const mongoose = require("mongoose");

const produtoModelSchema = new mongoose.Schema({
    tipo: String,
    marca: String,
    valor: Number
})

module.exports = mongoose.model("produto", produtoModelSchema);