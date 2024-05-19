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

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categoria: {
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

const removeCategoriaProdutoService = (categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: categoria.id,
        },
        {
            $pull:{
                categoria: {
                    _id: categoria.idCategoria,
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