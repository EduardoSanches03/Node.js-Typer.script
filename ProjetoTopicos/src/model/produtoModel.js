const mongoose = require("mongoose");

const produtoModelSchema = new mongoose.Schema({
    Marca: String,
    valor: Number
})

module.exports = mongoose.model("produto", produtoModelSchema);