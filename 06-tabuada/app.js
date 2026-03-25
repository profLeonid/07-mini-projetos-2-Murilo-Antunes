'use strict'

const criarListaContagem = function(){
    let listaContagem = []

    for(let i = 1; i <= 10; i++)
        listaContagem.push(i)

    return listaContagem
}

console.log(criarListaContagem())

const criarListaAdicao = function(numero){
    const listaAdicao = []

    for(let i = 1; i <= 10; i++){
        let resultado = i + numero
        listaAdicao.push(resultado)
    }

    return listaAdicao
}

console.log(criarListaAdicao(7))


const criarListaSubtracao = function(numero){
    const listaSubtracao = []

    for(let i = 1; i <= 10; i++){
        let resultado = numero - i 
        listaSubtracao.push(resultado)
    }

    return listaSubtracao
}

console.log(criarListaSubtracao(7))


const criarListaMultiplicacao = function(numero){
    const listaMultiplicacao = []

    for(let i = 1; i <= 10; i++){
        let resultado = i * numero
        listaMultiplicacao.push(resultado)
    }

    return listaMultiplicacao
}
console.log(criarListaMultiplicacao(7))

const criarListaDivisao = function(numero){
    const listaDivisao = []

    for(let i = 1; i <= 10; i++){
        let resultado = numero / i 
        listaDivisao.push(resultado.toFixed(2))
    }

    return listaDivisao
}

console.log(criarListaDivisao(7))

const criarLinha = function(numero, adicao, subtracao, multiplicacao, divisao){
    let tabela = document.getElementById('tabela')
    let tr = document.createElement('tr')
    let tdNumero = document.createElement('td')
    tdNumero.textContent = numero
    let tdAdicao = document.createElement('td')
    tdAdicao.textContent = adicao
    let tdSubtracao = document.createElement('td')
    tdSubtracao.textContent = subtracao
    let tdMultiplicacao = document.createElement('td')
    tdMultiplicacao.textContent = multiplicacao
    let tdDivisao = document.createElement('td')
    tdDivisao.textContent = divisao 

    tr.replaceChildren(tdNumero, tdAdicao, tdSubtracao, tdMultiplicacao, tdDivisao)
    tabela.appendChild(tr)
}

const handleClick = function(){
    const numero = Number(document.getElementById('numero').value)

    const listaContagem = criarListaContagem()
    const listaAdicao = criarListaAdicao(numero)
    const listaSubtracao = criarListaSubtracao(numero)
    const listaMultiplicacao = criarListaMultiplicacao(numero)
    const listaDivisao = criarListaDivisao(numero)

    for(let i = 0; i <= 10; i++)
        criarLinha(listaContagem[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i])
}