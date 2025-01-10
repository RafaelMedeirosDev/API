const Aluno = require('../models/index');

// Listar - Read
const listar = async (req, res) => {
    try {
        const alunos = await Aluno.findAll(); //Lista todos os alunos criados no banco
        res.status(200).json(alunos)
    } catch (error) {
        res.status(500).json({error: 'Erro ao listar os alunos!'})
    }
}

//Listar por id
const listarPorId = async (req, res) => {
    try {
        const {id} = req.body
        const aluno = await Aluno.findByPk(id)
        if(!aluno){
            res.status(404).json({msg: 'Aluno não encontrado'})
        }

        res.status(200).json(aluno)
        
    } catch (error) {
        res.status(500).json({error: 'Erro ao listar os alunos!'})
    }
}

//Cadastrar alunos
const cadastrar = async (req, res) => {
    try {

        const {nome, notas, email, senha} = req.body;
        const novoAluno = await Aluno.create({nome, notas, email, senha})
        res.status(201).json(novoAluno)

    } catch (error) {
        res.status(500).json({error: "Erro ao cadastrar aluno!"})
    }
}

//Editar
const atualizar = async (req, res) => {
    try {
        //Se no localhost:3000/api/aluno/1
        const {id} = req.body
        const {nome, notas, email, senha} = req.body;
        const aluno = await Aluno.findByPk(id)  //Verifica a chave primaria no banco de dados se é igual ao solicitado na req.
        if(!aluno){
            res.status(404).json({msg: 'Aluno não encontrado'})
        }

        await aluno.update({nome, notas, email, senha}) //Faz a atualização no banco de dados.
        res.status(200).json(aluno)

    } catch (error) {
        res.status(500).json({error: 'Erro ao tentar atualizar aluno!'})
    }
}

//Deletar
const deletar = async (req, res) => {
    try {       
        const {id} = req.body
        const aluno = await Aluno.findByPk({id})  //Verifica a chave primaria no banco de dados se é igual ao solicitado na req.
        if(!aluno){
            res.status(404).json({msg: 'Aluno não encontrado'})
        }

        await aluno.destroy() //destroy (Exclui) o aluno do banco de dados.
        res.status(200).json({msg: 'Aluno excluido com sucesso!'})

    } catch (error) {
        res.status(500).json({error: 'Erro ao tentar excluir aluno!'})
    }
}

//Deletar todos
const deletarTodos = async (req, res) => {
    try {       
        await Aluno.destroyAll() //destroy (Exclui) o aluno do banco de dados.
        res.status(200).json({msg: 'Todos os alunos foram excluidos com sucesso!'})

    } catch (error) {
        res.status(500).json({error: 'Erro ao tentar excluir!'})
    }
}

module.exports = { listar, cadastrar, atualizar, deletar, deletarTodos, listarPorId};