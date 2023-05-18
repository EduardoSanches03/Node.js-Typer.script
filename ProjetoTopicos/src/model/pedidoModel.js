const mongoose = require("mongoose");
const pedidoModelSchema = new mongoose.Schema({
    cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cliente'
    },

    cpfCliente:{
        type: mongoose.Schema.Types.String,
        ref: 'cliente'
    },

    nomeCliente:{
        type: mongoose.Schema.Types.String,
        ref: 'cliente'
    },

    produto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'produto'
    },

    tipoProduto:{
        type: mongoose.Schema.Types.String,
        ref: 'produto'
    },

    marcaProduto:{
        type: mongoose.Schema.Types.String,
        ref: 'produto'
    },

    valorProduto:{
        type: mongoose.Schema.Types.Number,
        ref: 'produto'
    },

    
});

module.exports = mongoose.model("pedido", pedidoModelSchema);