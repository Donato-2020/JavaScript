function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'Fotos/manha.png'
        document.body.style.backgroundColor = 'rgb(77, 175, 231)'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Fotos/tarde.png'
        document.body.style.backgroundColor = 'rgb(187, 146, 127)'
    } else {
        img.src = 'Fotos/noite.png'
        document.body.style.backgroundColor = 'rgb(6, 10, 32)'
    }
}