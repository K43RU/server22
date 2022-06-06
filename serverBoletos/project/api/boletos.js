const express = require('express');
const router = express.Router(); 

listaBoletos = [
    {'Valor': 10, 'idPessoa': '1', 'idUsuario': '1', 'status': 'pago', 'nomePessoa': 'Pedro'},
    {'Valor': 10, 'idPessoa': '2', 'idUsuario': '2', 'status': 'pago', 'nomePessoa': 'Vytor'},
    {'Valor': 10, 'idPessoa': '3', 'idUsuario': '3', 'status': 'pago', 'nomePessoa': 'Gerson'}
]