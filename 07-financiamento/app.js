'use strict'
//numero de parcela sempre sera o mesmo
//valor total sempre sera o mesmo
//taxa de jurso sempre sera o mesmo
//valor da parcela sempre será o mesmo
//saldo devedor precisa do valor da parcela atualizado
//juros precisa do saldo devedor para ser atualizado
//total a pagar precisa de juros para ser atualizado
const criarListaContagem = function(numeroParcela){
    let listaContagem = []

    for(let i = 1; i <= numeroParcela; i++)
        listaContagem.push(i)

    return listaContagem
}

const criarListaParcela = function(numeroParcela, valorTotal){
    let parcela = valorTotal / numeroParcela
    let listaParcela = []
    for(let i = 1; i <= numeroParcela; i++ )
        listaParcela.push(parcela)

    return listaParcela
}

console.log(criarListaParcela(12, 12000))

const criarListaJuros = function(numeroParcela,saldoDevedor,taxaJuros){
    let listaJuros = []
    for(let i = 1; i <= numeroParcela; i++){
        let juros = saldoDevedor * (taxaJuros/100)
        listaJuros.push(juros)
    }
    return listaJuros
}

console.log(criarListaJuros(12,12000,1.5))

const criarListaTotalMes = function(numeroParcela, parcela, juros){
    let listaTotalMes = []
    for(let i = 1; i <=numeroParcela; i++){
        let resultado = parcela + juros
        listaTotalMes.push(resultado)
    }
    return listaTotalMes
}

console.log(criarListaTotalMes(12,1000,165))


const criarListaSaldoDevedor = function(numeroParcela, valorTotal, parcela){
    let listaSaldoDevedor = []
    for(let i = 1; i <= numeroParcela; i++){
        let resultado = valorTotal - parcela

        listaSaldoDevedor.push(resultado)
    }
    return listaSaldoDevedor
}

console.log(criarListaSaldoDevedor(12,12000,1000))

const criarLinha = function(){
    let tabela = document.getElementById('tabela')
    let tr = document.createElement('tr')
    let tdMes = document.createElement('td')
    let tdParcela = document.createElement('td')
    let tdJuros = document.createElement('td')
    let tdTotal = document.createElement('td')
    let tdSaldoDevedor = document.createElement('td')


}

const handleClick = function(){
    let tfValorTotal = document.getElementById('valorTotal')
    let tfTaxaJuros = document.getElementById('taxaJuros')
    let tfNumeroParcelas = document.getElementById('numeroParcela')
}

