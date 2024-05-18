const Produto = require("../model/Produto");

const findProductByIdService = (id) => {
    return Produto.findById(id);
}
const findAllProductsService = () => {
    return Produto.find();
}

const createProductService = (body) => {
    return Produto.create(body);
}

const updateProductService =  () => {
    return Produto.findByIdUpdate(id, body, {returnDocument: "after"});
}

const deleteProductService =  (id) => {
    return Produto.findByIdAndRemove(id);
}

module.exports = {
    findProductByIdService,
    findAllProductsService,
    createProductService,
    updateProductService,
    deleteProductService
}