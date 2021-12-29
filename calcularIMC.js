function calcularIMC(peso, altura)
{
    return peso / (altura * altura)
}

function statusIMC(imc)
{
    let status;

    if (imc >= 30)
    {
        status = 'Obesidade'
    }

    if (imc >= 25 && imc < 30)
    {
        status = 'Sobrepeso'
    }

    if (imc >= 18.5 && imc < 25)
    {
        status = 'Peso Normal'
    }

    if (imc < 18.5)
    {
        status = 'Abaixo do Normal'
    }

    return status
}

exports.calcularIMC = calcularIMC
exports.statusIMC = statusIMC