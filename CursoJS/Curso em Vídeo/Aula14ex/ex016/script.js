function contagem () {
    
    //Var para puxar valores das Inputs
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Confira os dados e tente novamente')
    } else {
        res.innerHTML = 'Contagem: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            window.alert('Passo invalido, será considerado valor de inicio')
            p = i
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} ` 
            }
        }
        else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} ` 
            }
        }
    }

} 























/*
Se (Valor < F) Entao
Enquanto (Valor <= F) Faca
         Escreva (Valor, "... ")
         Valor <- Valor + 1
FimEnquanto
Senao
Enquanto (Valor >= F) Faca
         Escreva(Valor, "... ")
         Valor <- Valor - 1
FimEnquanto
FimSe
*/