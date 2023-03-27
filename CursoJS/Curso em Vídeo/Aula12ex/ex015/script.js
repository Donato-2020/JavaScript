function verificar() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    res.innerHTML = ''

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >0 && idade < 12) {
                //Criança
                //img.setAttribute('src', 'arquivo')
            } else if (idade < 18) {
                // Adoles
            } else if (idade < 50) {
                // Adulto
            } else {
                //Idoso
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >0 && idade < 12) {
                //Criança
            } else if (idade < 18) {
                // Adoles
            } else if (idade < 50) {
                // Adulto
            } else {
                //Idoso
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    }
}