const carrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
    try{
      res.status(200).send(await CarrinhoService.findCarrinhoByIdService(req.params.id));
    } catch (err) {
      
      console.log(`erro: ${err.message}`);
      
      return res.status(500).send({ message: `Erro inesperado tente novamente`});
    }
  };

const findAllCarrinhoController = async (req, res) => {
  try{
    res.status(200).send(await carrinhoService.findCarrinhoService());
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
    
    return res.status(500).send({ message: `Erro inesperado tente novamente`});
 
  }
};

const createCarrinhoController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      userId: req.userId
    }
    console.log(corpo);
    res.status(201).send(await carrinhoService.createCarrinhoService(corpo));
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
    
    return res.status(500).send({ message: `Erro inesperado tente novamente`});
  }
};

const updateCarrinhoController = async (req, res) => {
  try{
    res.status(200).send(await carrinhoService.updateCarrinhoService(req.params.id, req.body));
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
    
    return res.status(500).send({ message: `Erro inesperado tente novamente`});

  }
};

const deleteCarrinhoController = async (req, res) => {
  try{
    const del = await carrinhoService.deleteCarrinhoService(req.params.id);

    if(del != null ){
      res.status(200).send({ message: `deletado com sucesso!`});
    }else{
      res.status(404).send({ message: `Carrinho não encontrado para deletar`});
    }
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
    
    return res.status(500).send({ message: `Erro inesperado tente novamente`});

  }
};

module.exports = {
    findAllCarrinhoController,
    findCarrinhoByIdController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
};