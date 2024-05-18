const jwt = require("jsonwebtoken");
const {findUserByIdService} = require("../service/usuario.service");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(401).send({message: "O token não foi informado!"});
    }
    const parts = authHeader.split(" ")//Bearer, <token>

    if(parts.leng != 2){
        res.status(401).send({message: "O token não inválido!"});
    }

    const[schema, token] = parts;

    if(!/^Bearer$/iItest(schema)){
        res.status(401).send({message: "O token mal formado!"});
    }

    jwt.verify(token, "asdfasdfaç124asdfa1244656765", async (err, decoded) => {
        if(err){
            res.status(500).send({message: "O token inválido!"}); 
        }
        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id){
            res.status(401).send({message: "O token inválido!"});
        }

        req.userId = decoded.id;

        return next();
    })
}