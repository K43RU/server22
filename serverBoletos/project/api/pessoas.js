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
    return(pessoa);
}

router.delete('/:id', (req, res) => {
    res.json(removerPessoa(req.params.id));
})

function removerPessoa(id){
    index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    return(listaPessoas);
}

function buscarPessoa(id){
    const pessoa = listaPessoas.find(p => p.id == id);
    return (pessoa);
}

router.put('/:id', (req, res) => {
    res.json(editarPessoa(req, req.params.id));
})

function editarPessoa(req, id){
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
    return (pessoa);
}



module.exports = {
    router,
    buscarPessoa,
    adicionarPessoa,
    removerPessoa,
    editarPessoa
}