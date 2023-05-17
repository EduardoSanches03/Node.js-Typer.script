const cliente = require("../model/clienteModel");

module.exports={
    async read(req,res){
        const clienteList = await cliente.find();
        return res.json(clienteList);
    },


/*
    nome: String,
    cpf: String,
    telefone: String,
    email: String
*/
    async create(req,res){
        const {nome, cpf, telefone, email} = req.body;
        const clienteCriado = await cliente.create({
            nome,
            cpf,
            telefone,
            email
        });
        return res.json(clienteCriado);
    },

    async detele(req,res){
        const {id} = req.params;
        const clienteDeletado = await cliente.findOneAndDelete({_id:id});
        if(clienteDeletado){
            return res.json(clienteDeletado);
        }
    }

}

