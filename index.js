const express = require("express");
const connectToDatabase = require("./src/database/database");//arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router");//rota do usuario
const auth = require("./src/router/auth.router");//rota do auth

const app = express();

const port = 4000;

app.use(express.json());

connectToDatabase();//conectando como banco

app.use("/usuario", usuario);//chamando as rotas do usuario
app.use("/auth", auth);//chamando as rotas do auth

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo a nossa Pizzaria"
    })
});

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})

module.export = router;