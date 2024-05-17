const express =require("express");
const connectToDatabase = require("./src/database/database");
const usuario = require("./src/router/usuario.router");

const app = express();

const port = 4000;

app.use(express.json());

connectToDatabase();

app.use("/usuario", usuario);

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo a nossa Pizzaria"
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
})