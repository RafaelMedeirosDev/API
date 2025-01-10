const {Sequelize, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../../config/configDb');

const Aluno = sequelize.define(
    'Aluno',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true    //Identificador único,  não pode se repetir.
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 50],
                    msg: 'O nome deve ter no mínimo 3 caracteres e no máximo 50'
                },
                notNull: {
                    msg: 'O nome é obrigatório!'
                }
            }
        },
        notas: {
            type: DataTypes.FLOAT,
            validate: {
                min: {
                    args: [0],
                    msg: 'A nota mínima é zero'
                },
                max: {
                    args: 100,
                    msg: 'A nota máxima é 100'
                },
                isFloat: true,
                
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail:{
                    msg: 'Forneça um email válido'
                },
                contains: '@senac.com.br', 
                notNull:{
                    msg: 'O email é obrigatório'
                }
            }
        },
        data_cadastro:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: {
                    args: [7, 12],
                    msg: 'A senha deve ter entre 7 e 12 caracteres!'
                },
                notEmpty: {
                    msg: 'A senha não pode ser vazia!'
                }

            }
        }  
    },
    {
        sequelize,
        modelName: 'aluno',
        timestamps: false
    }
);

module.exports = Aluno;