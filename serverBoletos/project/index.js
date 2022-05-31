const express = require('express');
const app = express();
const port = 3000;
const pessoas = require('./api/pessoas');

app.use(express.json());

app.use('/api/pessoas', pessoas.router);

app.get('/', (req, res) => {
    res.send('Salve')
})

app.listen(port, () => {console.log(`Porta: ${port}`)})