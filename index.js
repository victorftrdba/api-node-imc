const express = require('express')
const app = express()
let calculoIMC = require('./calcularIMC')
let data = new Date()

app.get('/', (req, res) => {
    let peso = req.query.peso
    let altura = req.query.altura

    let imc = calculoIMC.calcularIMC(peso, altura)
    let status = calculoIMC.statusIMC(imc)

    res.json({imc: imc, status: status})
})

app.listen(8000, () => {
    console.log('Servidor rodando na porta ', data)
})