const express = require('express')
const route_aluno = express.Router();
const { listar, cadastrar, atualizar, deletar, deletarTodos, listarPorId} = require('../controller/index')



//LISTAR
// http://localhost:3000/
route_aluno.get('/', listar );

//LISTAR POR ID
// http://localhost:3000/aluno/1
route_aluno.get('/listar/:id', listarPorId)

//ATUALIZAR POR ID
// http://localhost:3000/aluno/editar/1
route_aluno.put('/:id', atualizar)

//CADASTRAR ALUNO
// http://localhost:3000/aluno/cadastrar
route_aluno.post('/cadastrar', cadastrar)

//DELETAR ALUNO POR ID
// http://localhost:3000/aluno/deletar/1
route_aluno.post('/deletar/:id', deletar)

//DELETAR TODOS OS ALUNOS
// http://localhost:3000/aluno/deletar
route_aluno.post('/deletar', deletarTodos)




module.exports = route_aluno;