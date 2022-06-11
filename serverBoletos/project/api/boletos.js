const express = require('express');
const router = express.Router(); 

const pessoas = require('./pessoas');
const listaPessoas = pessoas.listaPessoas;
const usuarios = require('./pessoas');
const listaUsuarios = usuarios.listaUsuarios;

listaBoletos = [
    {'id': 1, 'Valor': 20, 'idPessoa': '1', 'idUsuario': '1', 'status': 'pago', 'nomePessoa': 'Pedro'},
    {'id': 3, 'Valor': 10, 'idPessoa': '1', 'idUsuario': '1', 'status': 'pago', 'nomePessoa': 'Vytor'},
    {'id': 4, 'Valor': 10, 'idPessoa': '3', 'idUsuario': '3', 'status': 'pago', 'nomePessoa': 'Gerson'}
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
    const boleto = listaBoletos.find(p => p.idPessoa == id);
    return (boleto);
}

router.get('/', (req, res) => {
    res.json(listaBoletos);
})

function buscarBoletos(){
    return listaBoletos;
}

router.post('/', (req, res) => {
    res.json(Adicionarboleto(req, res))
})

function Adicionarboleto(req, res){
    const boleto = req.body;
    const pessoa = listaPessoas.findIndex(p => p.idPessoa == boleto.idPessoa);
    const usuario = listaUsuarios.findIndex(p => p.idUsuario == boleto.idUsuario);
    if(boleto.Valor < 0){
        return res.status(400).send("o valor não pode ser negativo");
    }else if(pessoa == -1){
        return res.status(400).send("pessoa inexistente");
    }else if(usuario == -1){
        return res.status(400).send("usuário inexistente");
    }
    boleto.id = listaBoletos.length + 1;
    listaBoletos.push(boleto);
    return(boleto);
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