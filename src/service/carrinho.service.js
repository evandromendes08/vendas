const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = async (id) => {
  return await Carrinho.findById(id);
};

const findAllCarrinhoService = async (limit, offset) => {
  return await Carrinho.find().limit(limit).skip(offset);
};

const createCarrinhoService = async (body) => {
  return await Carrinho.create(body);
};

const updateCarrinhoService = async (id, body) => {
  return await Carrinho.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const deleteCarrinhoService = async (id) => {
  return await Carrinho.findByIdAndRemove(id);
};

module.exports = {
  findAllCarrinhoService,
  findCarrinhoByIdService,
  createCarrinhoService,
  updateCarrinhoService,
  deleteCarrinhoService
};