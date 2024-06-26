const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) => {
  try{
    res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id));
  } catch (err) {
     
    console.log(`erro: ${err.message}`);
      
    return res.status(500).send({ message: `Erro inesperado tente novamente!`});
  }
};

const findAllPedidoController = async (req, res) => {
  try{
    res.status(200).send(await pedidoService.findAllPedidoService(req.query.limit, req.query.offset));
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
      
    return res.status(500).send({ message: `Erro inesperado tente novamente!`});
  }
};

const createPedidoController = async (req, res) => {
  try{
    const corpo = {
      ...req.body,
      userId: req.userId,
    }
    res.status(201).send(await pedidoService.createPedidoService(corpo));
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
      
    return res.status(500).send({ message: `Erro inesperado tente novamente!`});
  }
};

const updateStatusPedidoController = async (req, res) => {
  try{
    res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id, req.body));
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
      
    return res.status(500).send({ message: `Erro inesperado tente novamente!`});
  }
};

const deletePedidoController = async (req, res) => {
  try{
    const del = await pedidoService.deletePedidoService(req.params.id);

    if(del != null ){
      res.status(200).send({ message: 'deletado com sucesso!' });
    }else{
      res.status(404).send({ message: 'Pedido não encontrado para deletar' });
    }
  } catch (err) {
    
    console.log(`erro: ${err.message}`);
      
    return res.status(500).send({ message: `Erro inesperado tente novamente!`});
  }
};

module.exports = {
    findPedidoByIdController,
    findAllPedidoController,
    createPedidoController,
    updateStatusPedidoController,
    deletePedidoController
};