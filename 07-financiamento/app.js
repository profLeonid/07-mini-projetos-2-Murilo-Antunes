'use strict'
//numero de parcela sempre sera o mesmo
//valor total sempre sera o mesmo
//taxa de jurso sempre sera o mesmo
//valor da parcela sempre será o mesmo
//saldo devedor precisa do valor da parcela atualizado
//juros precisa do saldo devedor para ser atualizado
//total a pagar precisa de juros para ser atualizado
let tabela = document.getElementById('tabela')
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


const criarListaJuros = function(numeroParcela,saldoDevedor,taxaJuros){
    let listaJuros = []
    for(let i = 0; i < numeroParcela; i++){
        let juros = saldoDevedor[i] * (taxaJuros/100)
        listaJuros.push(juros)
    }
    return listaJuros
}


const criarListaTotalMes = function(numeroParcela, parcela, juros){
    let listaTotalMes = []
    for(let i = 0; i < numeroParcela; i++){
        let resultado = parcela[i] + juros[i]
        listaTotalMes.push(resultado)
    }
    return listaTotalMes
}



const criarListaSaldoDevedor = function(numeroParcela, valorTotal, parcela){
    let listaSaldoDevedor = []
    for(let i = 1; i <= numeroParcela; i++){
        valorTotal = valorTotal - parcela

        listaSaldoDevedor.push(valorTotal)
    }
    return listaSaldoDevedor
}


const criarLinha = function(mes, parcela, jurosMes, totalMes, saldoDevedor){
    let tr = document.createElement('tr')
    let tdMes = document.createElement('td')
    tdMes.textContent = mes
    
    let tdParcela = document.createElement('td')
    tdParcela.textContent = parseFloat(parcela).toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
    tdParcela.className = 'col-parcela'
    let tdJuros = document.createElement('td')
    tdJuros.textContent = parseFloat(jurosMes).toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
    tdJuros.className = 'col-juros'
    let tdTotal = document.createElement('td')
    tdTotal.textContent = parseFloat(totalMes).toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
    tdTotal.className = 'col-total'
    let tdSaldoDevedor = document.createElement('td')
    tdSaldoDevedor.textContent = parseFloat(saldoDevedor).toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
    tdSaldoDevedor.className = 'col-saldo'

    tr.replaceChildren(tdMes, tdParcela, tdJuros, tdTotal, tdSaldoDevedor)
    tabela.append(tr)
}

const handleClick = function(){
    tabela.textContent = ''
    const valorTotal = Number(document.getElementById('valorTotal').value)
    const taxaJuros = Number(document.getElementById('taxaJuros').value)
    const numeroParcelas = Number(document.getElementById('numeroParcelas').value)
    console.log(numeroParcelas)

    const LISTA_CONTAGEM = criarListaContagem(numeroParcelas)
    console.log(LISTA_CONTAGEM)
    const LISTA_PARCELA = criarListaParcela(numeroParcelas,valorTotal)
    console.log(LISTA_PARCELA)
    const LISTA_SALDO_DEVEDOR = criarListaSaldoDevedor(numeroParcelas, valorTotal,LISTA_PARCELA[0])
    console.log(LISTA_SALDO_DEVEDOR)
    const LISTA_JUROS = criarListaJuros(numeroParcelas,LISTA_SALDO_DEVEDOR,taxaJuros)
    console.log(LISTA_JUROS)
    const LISTA_TOTAL = criarListaTotalMes(numeroParcelas,LISTA_PARCELA, LISTA_JUROS)
    console.log(LISTA_TOTAL)

    for(let i = 0; i < numeroParcelas; i++)
        criarLinha(LISTA_CONTAGEM[i], LISTA_PARCELA[i], LISTA_JUROS[i], LISTA_TOTAL[i], LISTA_SALDO_DEVEDOR[i])
}



