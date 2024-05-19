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
    if(!req.body.admin == undefined){
        return res.status(400).send({ message: `O campo 'admin' deve ser preenchido!`});
    }
    return next();
} 

const validaEndereco = (req, res, next) => {
    let erros = []; //variavel para acumular erros

    req.body.map((value, key) =>{
        if(!value.rua){
            erros.push(`'${key+1} - rua'`)
        }
        if(!value.numero){
            erros.push(`'${key+1} - numero'`)
        }
        if(!value.CEP){
            erros.push(`'${key+1} - CEP'`)
        }
    });

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

const validaIdParams = (req, res, next) => {
    if(ObjectId.isValid(req.param.id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde a um válido!`});
    }
}

const valida_IdBody = (req, res, next) => {
    if(ObjectId.isValid(req.param._id)){
        return next();
    }else{
        return res.status(400).send({ message: `O ID não corresponde a um válido!`});
    }
}

const validaLogin = (req, res, next) => {
    let erros = []; //variavel para acumular erros
    
    if(!req.body.email){
        erros.push("email");
    }
    if(!req.body.senha){
        erros.push("senha");
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

const validaProdutosCarrinhoPedido = (req, res, next) => {
    let erros = []; //variavel para acumular erros

    req.body.produtos.map((value, key) =>{
        if(!value._id){
            erros.push(`'${key+1} - _id'`)
        }
        if(!ObjectId.isValid(value._id)){
            erros.push(`'${key+1} - Tipo Inválido'`)
        }
        if(!value.quantidade){
            erros.push(`'${key+1} - quantidade'`)
        }
       
    });

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

module.exports = {
    validaUsuario,
    validaEndereco,
    validaProduto,    
    validaPedido,
    validaCategoria,
    validaCarrinho,
    validaLogin,
    validaIdParams,
    valida_IdBody,
    validaProdutosCarrinhoPedido
}