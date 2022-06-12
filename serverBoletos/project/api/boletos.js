const express = require('express');
const router = express.Router();

const pessoa = require('./pessoas');
const pessoas = pessoa.listaPessoas;
const usuario = require('./pessoas');
const usuarios = usuario.listaUsuarios;

listaBoletos = [
    {'id': 1, 'Valor': 20, 'idPessoa': '1', 'idUsuario': '1', 'status': 'pago', 'nomePessoa': 'Pedro'},
    {'id': 2, 'Valor': 10, 'idPessoa': '1', 'idUsuario': '2', 'status': 'pago', 'nomePessoa': 'Vytor'},
    {'id': 3, 'Valor': 10, 'idPessoa': '3', 'idUsuario': '3', 'status': 'pago', 'nomePessoa': 'Gerson'}
]

router.get('/:id', (req, res) => {
    res.json(buscarBoleto(req.params.id));
});

function buscarBoleto(id){
    const boleto = listaBoletos.find(p => p.id == id);
    return (boleto);
}

router.get('/pessoa/:id', (req, res) => {
    res.json(buscarBoletoPessoa(req.params.id));
});

function buscarBoletoPessoa(id){
    for(let i = 0; i < listaBoletos.length; i++){
    const boleto = listaBoletos.find(p => p.idPessoa == id);
    return boleto;
    }
}

router.get('/', (req, res) => {
    res.json(listaBoletos);
})

function buscarBoletos(){
    return listaBoletos;
}

router.post('/', (req, res) => {
    res.json(Adicionarboleto(req, res));
})

function Adicionarboleto(req, res){
    const boleto = req.body;
    const indexPessoa = listaPessoas.findIndex(p => p.id == boleto.idPessoa);
    if(indexPessoa == -1){
    return res.status(400).send("o valor não pode ser negativo");
    }
    else{
        boleto.id = listaBoletos.length + 1;
        listaBoletos.push(boleto);
        return(boleto);
    }
}

router.delete('/:id', (req, res) => {
    res.json(removerboleto(req.params.id));
})

function removerboleto(id){
    index = listaBoletos.findIndex(p => p.id == id);
    listaBoletos.splice(index, 1);
    return(listaBoletos);
}

router.put('/:id', (req, res) => {
    res.json(editarboleto(req, req.params.id));
})

function editarboleto(req, id){
    const boleto = req.body;
    const index = listaBoletos.findIndex(p => p.id == id);
    boleto.id = id;
    listaBoletos[index] = boleto;
    return (boleto);
}



module.exports = {
    router,
    buscarBoleto,
    buscarBoletos,
    Adicionarboleto,
    removerboleto,
    editarboleto,
    buscarBoletoPessoa,
    listaBoletos
}