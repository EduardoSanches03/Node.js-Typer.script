const Pedido = require("../model/pedidoModel");
const Cliente = require("../model/clienteModel");

module.exports={
    async read(req,res){
        try{
            const pedidoList = await pedido.find();
            return res.json(pedidoList);
        }catch(err){
            return res.status(400).send({error: "Nenhum pedido realizado"});
        }
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
    
