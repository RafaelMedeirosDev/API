const express = require('express')

const route_professor = express.Router();

// http://localhost:3000/
route_professor.get('/', (req,res) => {
    res.send('Raiz do projeto /professor')
})

route_professor.get('/cadastro', (req,res) => {
    res.send('Olá Professor!')
})

module.exports = route_professor;