const express = require('express');
const router = express.Router(); 

listaUsuarios = [
    {id: 1, nome: "Pedro", senha: "123"},
    {id: 2, nome: "Vytor", senha: "123"},
    {id: 3, nome: "Gerson", senha: "123"}
]

router.get('/:id', (req, res) => {
    res.json(buscarUsuario(req.params.id));
});

router.get('/', (req, res) => {
    res.json(listaUsuarios);
})

function buscarUsuario(){
    return listaUsuarios;
}

router.post('/', (req, res) => {
    res.json(AdicionarUsuario(req))
})

function AdicionarUsuario(req){
    const usuario = req.body;
    usuario.id = listaUsuarios.length + 1;
    listaUsuarios.push(usuario);
    return(usuario);
}

router.delete('/:id', (req, res) => {
    res.json(removerUsuario(req.params.id));
})

function removerUsuario(id){
    index = listaUsuarios.findIndex(p => p.id == id);
    listaUsuarios.splice(index, 1);
    return(listaUsuarios);
}

function buscarUsuario(id){
    const usuario = listaUsuarios.find(p => p.id == id);
    return (usuario);
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
    buscarUsuario,
    AdicionarUsuario,
    removerUsuario,
    editarUsuario
}