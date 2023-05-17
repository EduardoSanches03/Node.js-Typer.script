const cliente = require("../model/clienteModel");

module.exports={
    async read(req,res){
        try{
        const clienteList = await cliente.find();
        return res.json(clienteList);
        }catch(err){
            return res.status(400).send({error: 'Nenhum cliente cadastrado'});
        }
    },


/*{
    nome: String,
    cpf: String,
    telefone: String,
    email: String
}
*/
    async create(req,res){
       try{
        const {nome, cpf, telefone, email} = req.body;
        const clienteCriado = await cliente.create({
            nome,
            cpf,
            telefone,
            email
        });
        return res.json(clienteCriado);
    }catch(err){
        return res.status(400).send({error: 'Erro ao cadastrar cliente'});
    }
    },

    async delete(req,res){
        try{
        const {id} = req.params;
        const clienteDeletado = await cliente.findOneAndDelete({ _id:id});
        if(clienteDeletado){
            return res.json(clienteDeletado);
        }
    }catch(err){
        return res.status(400).send({error: 'Cliente não encontrado'});
    }
    },

        async update(req,res){
        try{
        const {id} = req.params;
        const {nome, cpf, telefone, email} = req.body;
        const clienteAtualizado = await cliente.findOne({ _id:id});

        clienteAtualizado.nome = nome;
        clienteAtualizado.cpf = cpf;
        clienteAtualizado.telefone = telefone;
        clienteAtualizado.email = email;

        await clienteAtualizado.save();
        return res.json(clienteAtualizado);
    }catch(err){
        return res.status(400).send({erroe: "Cliente não encontrado"});
    }
    }
}

