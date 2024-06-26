const mongoose = require("mongoose");

function connectToDatabase(){
    mongoose.connect(process.env.URLDATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MONGO DB CONECTADO");
    }).catch((err) =>{
        return console.log(`Erro ao conectar com o Banco de dados: ${err}`);
    })
}

module.exports = connectToDatabase;