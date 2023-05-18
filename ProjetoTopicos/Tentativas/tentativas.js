
/*const mongoose = require("mongoose");

const produtoModelSchema = new mongoose.Schema({
    tipo: String,
    marca: String,
    valor: Number
})

module.exports = mongoose.model("produto", produtoModelSchema);
*/






/*cliente:{
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



rotas.get('/produto', produtoController.read);
rotas.post('/produto', produtoController.create);
rotas.delete('/produto/:id', produtoController.delete);
rotas.post('/produto/:id', produtoController.update);

const produto = require("../model/produtoModel");

module.exports={
    async read(req,res){
        try{
            const produtoList = await produto.find();
            return res.json(produtoList);
        }catch(err){
            return res.status(400).send({error: "Nenhum produto cadastrado"});
        }
    },

    async create(req,res){
        try{
            const {tipo, marca, valor} = req.body;
            const produtoCriado = await produto.create({
                tipo,
                marca,
                valor
            });
        return res.json(produtoCriado);
        }catch(err){
            return res.status(400).send({error: "Erro ao cadastrar produto"});
        }
    },

    async delete(req,res){
      try{
        const {id} = req.params;
        const produtoDeletado = await produto.findOneAndDelete({_id:id});
        if(produtoDeletado){
            return res.json(produtoDeletado);
        }
      }catch(err){
        return res.status(400).send({error: "Produto não encontrado"});
      }
    },

    async update(req,res){
        try{
            const {id} = req.params;
            const {tipo, marca, valor} = req.body;
            const produtoAtualizado = await produto.findOne({ _id:id});

            produtoAtualizado.tipo = tipo;
            produtoAtualizado.marca = marca;
            produtoAtualizado.valor = valor;

            await produtoAtualizado.save();
            return res.json(produtoAtualizado);
        }catch(err){
            return res.status(400).send({èrror: "Produto não encontrado"});
        }
    }
}




async create(req,res){
        
            const {cliente, status} = req.body;
            const clienteEncontrado = await cliente.findById();
            //const produtoEncontrado = await produto.findById(produto);
            const pedido = await Pedido.create({
                cliente: clienteEncontrado._id,
                cpfCliente: clienteEncontrado.cpf,
                nomeCliente: clienteEncontrado.nome,
                /*produto: produtoEncontrado._id,
                tipoProduto: produtoEncontrado.tipo,
                marcaProduto: produtoEncontrado.marca,
                valorProduto: produtoEncontrado.valor,
                
                status
            });
            return res.json(pedido);
   
   
*/