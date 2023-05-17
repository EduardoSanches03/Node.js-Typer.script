const  express = require("express");
const rotas = express.Router();

rotas.get("/", (req, res) =>{
    return res.json({
    mensagem: "rota raiz",
    });
    });


module.exports = rotas;