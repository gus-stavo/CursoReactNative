const express = require('express')
const app = express()
/*const bodyParser = require('body-parser')

app.use(meuJson())
app.use(bodyParser.json())

function meuJson() {
    return (req, res, next) => {
        console.log('Antes de tudo: Meu middleware...')
        next()
    }
}

app.post('/blabla/:valor', (req, res, next) => {
    console.log('Func 0')
    next()
})

app.post('/blabla/:valor', (req, res, next) => {
    console.log('Func 1')
    res.status(200).send('Meu Backend = ' 
        + JSON.stringify(req.body.dependentes[0].nome))
})

app.post('/blabla/:valor', (req, res) => {
    console.log('Func 3')
})*/

app.listen(3000, () => {
    console.log('Backend executando...')
})