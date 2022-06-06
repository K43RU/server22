const express = require('express');
const app = express();
const port = 3000;
const pessoas = require('./api/pessoas');
const usuarios = require('./api/usuarios');

app.use(express.json());

app.use('/api/pessoas', pessoas.router);
app.use('/api/usuarios', usuarios.router);

app.get('/', (req, res) => {
    res.send('Salve')
})

app.listen(port, () => {console.log(`Porta: ${port}`)})