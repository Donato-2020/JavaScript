const num = document.querySelector('input#numero')
const lista = document.querySelector('select#valores')
const res = document.getElementById('res')
const valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOF(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.valores} adicionado`
        lista.appendChild(item)
    } else {
        alert('Valor Invalido ou já encontrado na lista.')
    }
}