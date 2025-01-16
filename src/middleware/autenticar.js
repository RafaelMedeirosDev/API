const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


const autenticar = (req, res, proximo) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.status(401).json({msg: "Acesso não autorizado!", detalhes: "Token  não fornecido!"})
    }

    try {
        const aluno = jwt.verify(token, process.env.SECRET_KEY)
        if(!aluno){
            return res.status(401).json({msg: "Token inválido!", detalhes: "Token invãlido!"})
        }

        req.aluno = aluno
        proximo()
    } catch (error) {
        res.status(401).json({error: "Erro ao autenticar!", detalhes: "Token ausente!"})
    }
}

module.exports = autenticar;