const ObjectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
    //testa um erro de cada vez
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' deve ser preenchido!`});
    }
    if(!req.body.email){
        return res.status(400).send({ message: `O campo 'email' deve ser preenchido!`});
    }
    if(!req.body.senha){
        return res.status(400).send({ message: `O campo 'senha' deve ser preenchido!`});
    }
    if(!req.body.imagem){
        return res.status(400).send({ message: `O campo 'imagem' deve ser preenchido!`});
    }
    if(!req.body.admin){
        return res.status(400).send({ message: `O campo 'admin' deve ser preenchido!`});
    }
    return next();
} 

const validaProduto = (req, res, next) => {
    let erros = []; //variavel para acumular erros
    if(!req.body.nome){
        erros.push("nome");
    }
    if(!req.body.descricao){
        erros.push("descricao");
    }
    if(!req.body.precoUnitario){
        erros.push("precoUnitario");
    }
    if(!req.body.imagem){
        erros.push("imagem");
    }
    if(!req.body.codigoBarra){
        erros.push("codigoBarra");
    }

    //testando quantos erros temos e verificar o que fazer
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos!`}); 
        }else{
        return res.status(400).send({ message: `O campo ${erros} deve ser preenchido!`}); 
        }
    }
    
}

const validaCategoria = (req, res, next) => {
    
    if(!req.body.nome){
        return res.status(400).send({ message: `O campo 'nome' deve ser preenchido`});
    }

    return next();
}

const validaPedido = (req, res, next) => {
    let erros = []; //variavel para acumular erros
    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }
    if(!req.body.frete){
        erros.push("frete");
    }
    if(req.body.concluido == undefined){
        erros.push("concluido");
    }

    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos!`}); 
        }else{
        return res.status(400).send({ message: `O campo ${erros} deve ser preenchido!`}); 
        }
    }
}

const validaCarrinho = (req, res, next) => {
    let erros = []; //variavel para acumular erros
    if(!req.body.precoTotal){
        erros.push("precoTotal");
    }
    if(!req.body.frete){
        erros.push("frete");
    }
    
    if(erros.length == 0){
        return next();
    }else{
        if(erros.length > 1){
            return res.status(400).send({ message: `Os campos ${erros} devem ser preenchidos!`}); 
        }else{
        return res.status(400).send({ message: `O campo ${erros} deve ser preenchido!`}); 
        }
    }
}

// const validaEndereco = (req, res, next) => {
//     if(!req.body.rua){
//         return res.status(400).send({ message: `O campo 'rua' deve ser preenchido`});
//     }
//     if(!req.body.numero){
//         return res.status(400).send({ message: `O campo 'numero' deve ser preenchido`});
//     }
//     if(!req.body.CEP){
//         return res.status(400).send({ message: `O campo 'CEP' deve ser preenchido`});
//     }
//     return next();
// }

const validaId = (req, res, next) => {
    if(ObjectId.isValid(req.param.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde a um válido!`});
    }
}

module.exports = {
    validaUsuario,
    validaProduto,
    //validaEndereco,    
    validaPedido,
    validaCategoria,
    validaCarrinho,
    validaId
}