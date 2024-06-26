const Produto = require("../model/Produto");

const findProductByIdService = (id) => {
    return Produto.findById(id);
}
const findAllProductsService = (limit, offset) => {
    return Produto.find().limit(limit).skip(offset);
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

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categorias: {
                    _id: categoria._id,
                    createAt: categoria.createAt
                },
            },
        },
        {
            rawResult: true,
        }
    );
}

const removeCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull:{
                categorias: {
                    _id: categoria._id,
                },
            },
        },
        {
            rawResult: true,
        }
    );
}

module.exports = {
    findProductByIdService,
    findAllProductsService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
}