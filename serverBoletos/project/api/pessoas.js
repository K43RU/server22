const express = require('express');
const router = express.Router(); 
const boletos = require('./boletos');
const listaBoleto = boletos.listaBoletos; 

listaPessoas = [
    {id: 1, nome: "Pedro", cpf: "123456789-00"},
    {id: 2, nome: "Vytor", cpf: "123456789-00"},
    {id: 3, nome: "Gerson", cpf: "123456789-00"}
]

router.get('/:id', (req, res) => {
    res.json(buscarPessoa(req.params.id, res));
});

function buscarPessoa(id, res){
    const pessoa = listaPessoas.find(p => p.id == id);
    if(pessoa != undefined){
        return (pessoa);
    }else{
        return res.status(400).send("usuário inexistente");
    }
}

router.get('/', (req, res) => {
    res.json(listaPessoas);
})

function buscarPessoas(){
    return listaPessoas;
}

router.post('/', (req, res) => {
    res.json(adicionarPessoa(req, res));
})

function adicionarPessoa(req, res){
    const pessoa = req.body;
    if(pessoa.nome != undefined && pessoa.cpf != undefined){
        pessoa.id = listaPessoas.length + 1;
        listaPessoas.push(pessoa);
        return(pessoa);
    }else{
        return(res.status(400).send("nome ou cpf não inserido"));
    }
}

router.delete('/:id', (req, res) => {
    res.json(removerPessoa(req.params.id, res));
})

function removerPessoa(id, res){
    boletoPessoa = listaBoleto.find(b => b.idPessoa == id)
    index = listaPessoas.findIndex(p => p.id == id);
    if(index == -1 || boletoPessoa != undefined){
        if(index == -1){
            return res.status(400).send("pessoa inexistente");
        }else{
            return res.status(400).send("pessoa já está vinculada a um boleto");

        }
    }else{
        listaPessoas.splice(index, 1);
        return(listaPessoas);
    }
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
    editarPessoa,
    listaPessoas
}