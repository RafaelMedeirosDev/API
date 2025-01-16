const express = require('express')
const route_aluno = express.Router();
const { cadastrar, atualizarPerfil, deletarPerfil, listarPerfil} = require('../controller/index')
const autenticar = require('../../../middleware/autenticar')





//LISTAR POR ID
// http://localhost:3000/aluno/1
route_aluno.get('/perfil', autenticar, listarPerfil)


//Rota pública
//CADASTRAR ALUNO
// http://localhost:3000/aluno/cadastrar
route_aluno.post('/cadastrar', cadastrar)



//ATUALIZAR POR ID
// http://localhost:3000/aluno/editar/1
route_aluno.put('/perfil', autenticar, atualizarPerfil)



//DELETAR ALUNO POR ID
// http://localhost:3000/aluno/deletar/1
route_aluno.delete('/perfil', autenticar, deletarPerfil)


// Rota pública
//Login aluno
// http://localhost:3000/aluno/login
route_aluno.post('/login', login)



module.exports = route_aluno;