const Pedido = require("../model/pedidoModel");
const Cliente = require("../model/clienteModel");

const path = require('path');
const fs = require('fs');


module.exports={

    async menuPedido(req,res){
        const filePath = path.join(__dirname,'../view/menuPedido.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('Erro ao ler o arquivo:', err);
              return res.status(500).send('Ocorreu um erro ao processar a solicitação.');
            }
            res.set('Content-Type', 'text/html');
            res.send(data);
          });
    },

    async listarPedido(req, res) {
        const listarPedidos = await Pedido.find();
        res.render('listarPedidos.ejs', { listarPedidos });
    },

    async read(req,res){
        try{
            const pedidoList = await pedido.find();
            return res.json(pedidoList);
        }catch(err){
            return res.status(400).send({error: "Nenhum pedido realizado"});
        }
    },

    async cadastroPedido(req, res) {

        const { nome, marca, valor } = req.body;
        const criaProduto = await Pedido.create({
          nome,
          marca,
          valor
        });
        console.log("produto adicionado"+ criaProduto.nome);
        res.redirect('/menu.html');
      },

    async create(req,res){
        try{
            const {cliente, produto, valor, status } = req.body;
            const clienteEncontrado = await Cliente.findById(cliente); 
            const pedido = await Pedido.create({
                cliente: clienteEncontrado._id,
                cpfCliente: clienteEncontrado.cpf, 
                nomeCliente: clienteEncontrado.nome, 
                produto,
                valor,
                status
            });
            return res.json(pedido);
        }catch(err){
            res.status(400).send({error:"Erro ao criar o pedido"});
        }
    },

    async update(req,res){
        try{
            const {id} = req.params;
            const {status} = req.body;
            const pedidoAlterar = await Pedido.findOne({_id:id});

            pedidoAlterar.status = status;

            await pedidoAlterar.save();
            return res.json(pedidoAlterar);
        }catch(err){
            res.status(400).send({error: "Não foi possível realziar a alteração"});
        }
    }
}
    
