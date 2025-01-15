const express = require('express')
const route_aluno = express.Router();
const { cadastrar, atualizar, deletar, listarPorId, login} = require('../controller/index')





//LISTAR POR ID
// http://localhost:3000/aluno/1
route_aluno.get('/perfil', login, listarPorId)

//ATUALIZAR POR ID
// http://localhost:3000/aluno/editar/1
route_aluno.put('/perfil/:id', login, atualizar)

//CADASTRAR ALUNO
// http://localhost:3000/aluno/cadastrar
route_aluno.post('/cadastrar', cadastrar)

//DELETAR ALUNO POR ID
// http://localhost:3000/aluno/deletar/1
route_aluno.delete('/deletar/:id', login, deletar)

//DELETAR TODOS OS ALUNOS
// http://localhost:3000/aluno/deletar
// route_aluno.delete('/deletar', deletarTodos)

//Login aluno
// http://localhost:3000/aluno/login
route_aluno.post('/login', login)



module.exports = route_aluno;