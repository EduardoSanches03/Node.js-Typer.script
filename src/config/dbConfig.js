const mongoose = require("mongoose");
const dbConfig = "mongodb+srv://Eduardo:@EDUardo17@cluster0.zt8ai2u.mongodb.net/cliente?retryWrites=true&w=majority";
const conexao = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;