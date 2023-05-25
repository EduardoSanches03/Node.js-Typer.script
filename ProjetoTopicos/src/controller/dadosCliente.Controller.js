const Cliente = require("../model/clienteModel");

const path = require('path');
const fs = require('fs');

module.exports={

    async menu(req,res){
        const filePath = path.join(__dirname,'../view/menu.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.set('Content-Type', 'text/html');
            res.send(data);
          });
    },

    async menuCliente(req,res){
        const filePath = path.join(__dirname,'../view/menuCliente.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.set('Content-Type', 'text/html');
            res.send(data);
          });
    },

    async formCadastro(req,res){
        const filePath = path.join(__dirname,'../view/formCadastro.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.set('Content-Type', 'text/html');
            res.send(data);
          });
    },

    async registrar (req,res){
        const {nome,cpf,telefone,email} = req.body;
        
        const clienteCreate = await Cliente.create ({
            nome,
            cpf,
            telefone,
            email
        }); 
       console.log("Novo cliente cadastrado!");
            res.send("Nome: "+req.body.nome+
                 "<br>CPF: "+req.body.cpf+
                 "<br>Telefone: "+req.body.telefone+
                 "<br>Email: "+req.body.email);

    }

}