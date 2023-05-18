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