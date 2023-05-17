const  express = require("express");
const rotas = express.Router();
const clienteController = require("./controller/clienteController");

rotas.get("/", (req, res) =>{
    return res.json({
    mensagem: "rota raiz",
    });
    });

rotas.get('/cliente', clienteController.read);
rotas.post('/cliente', clienteController.create);

module.exports = rotas;