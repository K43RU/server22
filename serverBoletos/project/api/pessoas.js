const express = require('express');
const router = express.Router(); 

listaPessoas = [
    {id: 1, nome: "Pedro", cpf: "123456789-00"},
    {id: 2, nome: "Vytor", cpf: "123456789-00"},
    {id: 3, nome: "Gerson", cpf: "123456789-00"}
]

router.get('/:id', (req, res) => {
    res.json(buscarPessoa(req.params.id));
});

router.get('/', (req, res) => {
    res.json(listaPessoas);
})

function buscarPessoas(){
    return listaPessoas;
}

router.post('/', (req, res) => {
    res.json(adicionarPessoa(req))
})

function adicionarPessoa(req){
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
}

function buscarPessoa(id){
    const pessoa = listaPessoas.find(p => p.id == id);
    return (pessoa);
}

module.exports = {
    router,
    buscarPessoa,
    adicionarPessoa
}