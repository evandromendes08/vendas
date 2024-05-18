const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    return Produto.findById(id);
}
const findAllProductsController = async (req, res) => {
    return Produto.find();
}

const createProductController = async (req, res) => {
    return Produto.create(body);
}

const updateProductController = async (req, res) => {
    return Produto.findByIdUpdate(id, body, {returnDocument: "after"});
}

const deleteProductController = async (req, res) => {
    return Produto.findByIdAndRemove(id);
}

module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController
}