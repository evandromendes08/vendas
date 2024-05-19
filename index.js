const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database");//arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router");//rota do usuario
const auth = require("./src/router/auth.router");//rota do auth
const produto = require("./src/router/produto.router");//rota do produto
const categoria = require("./src/router/categoria.router");//rota da categoria
const carrinho = require("./src/router/carrinho.router");//rota do carrinho

const app = express();

const port = 4000;

app.use(express.json());

connectToDatabase();//conectando com o banco

app.use("/usuario", usuario.router);//chamando as rotas do usuario
app.use("/auth", auth);//chamando as rotas do auth
app.use("/produto", produto);//chamando as rotas do produto
app.use("/categoria", categoria);//chamando as rotas categoria
app.use("/carrinho", carrinho);//chamando as rotas carrinho

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo a nossa Pizzaria"
    })
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})