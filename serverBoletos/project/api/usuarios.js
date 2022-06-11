const express = require('express');
const { buscarBoleto } = require('./boletos');
const router = express.Router(); 
const boletos = require('./boletos');
const listaBoleto = boletos.listaBoletos; 

listaUsuarios = [
    {id: 1, nome: "Pedro", senha: "123"},
    {id: 2, nome: "Vytor", senha: "123"},
    {id: 3, nome: "Gerson", senha: "123"}
]

router.get('/:id', (req, res) => {
    res.json(buscarUsuario(req.params.id, res));
});

function buscarUsuario(id, res){
    const usuario = listaUsuarios.find(p => p.id == id);
    if(usuario != undefined){
        return (usuario);
    }else{
        return res.status(400).send("usuário inexistente");
    }
}

router.get('/', (req, res) => {
    res.json(listaUsuarios);
})

function buscarUsuarios(){
    return listaUsuarios;
}

router.post('/', (req, res) => {
    res.json(AdicionarUsuario(req, res))
})

function AdicionarUsuario(req, res){
    const usuario = req.body;
    usuario.id = listaUsuarios.length + 1;
    if(usuario.nome != undefined && usuario.cpf != undefined){
    listaUsuarios.push(usuario);
    return(usuario);
    }else{
        return res.status(400).send("cpf ou usuario não informados");
    }
}

router.delete('/:id', (req, res) => {
    res.json(removerUsuario(req.params.id, res));
})

function removerUsuario(id, res){
    boletoPessoa = listaBoleto.find(b => b.idUsuario == id)
    index = listaUsuarios.findIndex(p => p.id == id);
    if(index == -1 || boletoPessoa != undefined){
        if(index == -1){
            return res.status(400).send("usuário inexistente");
        }else{
            return res.status(400).send("usuário já está vinculado a um boleto");

        }
    }else{
    listaUsuarios.splice(index, 1);
    return(listaUsuarios);
    }
}

router.put('/:id', (req, res) => {
    res.json(editarUsuario(req, req.params.id));
})

function editarUsuario(req, id){
    const usuario = req.body;
    const index = listaUsuarios.findIndex(p => p.id == id);
    usuario.id = id;
    listaUsuarios[index] = usuario;
    return (usuario);
}



module.exports = {
    router,
    buscarUsuarios,
    buscarUsuario,
    AdicionarUsuario,
    removerUsuario,
    editarUsuario,
    listaUsuarios
}