const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome:{type: String, unique: true, required: true},
    descricao:{type: String, unique: true},
    precoUnitario:{type: Number, require: true},
    imagem: {type: String, unique: true},
    codigoBarra: {type: Number, unique: true, unique: true},
    /*categoria: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "categorias" },
            createAt: { type: Date, required: true}
        },
    ],*/

});

const Produto = mongoose.model("produtos", ProdutoSchema);

module.exports = Produto;