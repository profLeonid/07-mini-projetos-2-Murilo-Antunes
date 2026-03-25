'use strict'

const tbody = document.getElementById('tabela')


const criarListaContagem = function(quantidade){
    let listaNumeros = []

    for(let i=1; i <= quantidade; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}

const criarListapares = function(quantidade){
    let listaPar = []

    for(let i = 1; i <= quantidade; i++){
            let resultado = i * 2
            listaPar.push(resultado)
    }

    return listaPar
}

const criarListaImpares = function(quantidade){
    let listaImpar = []

    for(let i = 1; i <= quantidade; i++){
        let resultado = (i * 2) + 1
        listaImpar.push(resultado)
    }

    return listaImpar
}

const criarListaMultiplo = function(quantidade){
    let listaMultiplos = []

    for(let i = 1; i <= quantidade; i++){
        let multiplo = Number(i) * 5
        listaMultiplos.push(multiplo)
    }

    return listaMultiplos
}

const criarListaPotencia = function(quantidade){
    let listaPotencia2 = []

    for(let i = 0; i <= quantidade; i++){
        let resultado = 2 ** Number(i)
        listaPotencia2.push(resultado) 
    }

    return listaPotencia2
}

const criarTr = function(numero, par, impar, multiplos, potencias){
    let tr = document.createElement('tr')
    let tdNumero = document.createElement('td')
    tdNumero.textContent = numero
    let tdPar = document.createElement('td')
    tdPar.textContent = par
    let tdImpar = document.createElement('td')
    tdImpar.textContent = impar
    let tdMultiplos = document.createElement('td')
    tdMultiplos.textContent = multiplos
    let tdPotencias = document.createElement('td')
    tdPotencias.textContent = potencias

    tr.replaceChildren(tdNumero, tdPar, tdImpar, tdMultiplos,tdPotencias)
    tbody.appendChild(tr)
}

const handleClick = function(){
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaContagem(quantidade)
    const listaPar = criarListapares(quantidade)
    const listaImpar = criarListaImpares(quantidade)
    const listaMultiplos = criarListaMultiplo(quantidade)
    const listaPotencia2 = criarListaPotencia(quantidade)

    for(let i = 0; i < quantidade; i++){
        criarTr(listaNumeros[i], listaPar[i], listaImpar[i],listaMultiplos[i],listaPotencia2[i])
    }
}
