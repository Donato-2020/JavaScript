function calcular () {
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const res = document.getElementById('res')
    const ResIMC = (Number(peso.value) / (Number(altura.value)**2)).toFixed(2)

    if (altura.value.length == 0 && peso.value.length == 0) {
        alert("É necessario inserir valores para o calculo.")
    } else {
        res.innerHTML = ''
        res.innerHTML += `<p>Índice IMC: <strong>${ResIMC}</strong>.</p>`
    }

    if (ResIMC < 18.5) {
        res.innerHTML += '<p>Seu IMC está abaixo da classificação <strong>MAGREZA.</strong> Recomenda-se procurar um medico.</p>'
    } else if (ResIMC <= 24.9) {
        res.innerHTML += '<p>Seu IMC está dentro da classificação <strong>NORMAL</strong>.</p>'
    } else if (ResIMC <= 29.9) {
        res.innerHTML += '<p>Seu IMC está dentro da classificação <strong>SOBREPESO</strong>. Necessario cuidado, pois você está na Obesidade de grau I.</p>'
    } else if (ResIMC <= 39.9) {
        res.innerHTML += '<p>Seu IMC está dentro da classificação <strong>OBESIDADE</strong>. Necessario cuidado, pois você está na Obesidade de grau II.</p>'
    } else (ResIMC > 40) ;{
        res.innerHTML += '<p>Seu IMC está dentro da classificação <strong>OBESIDADE GRAVE</strong>. Estado de alerta, pois você está na Obesidade de grau III, grande riscos à saúde.</p>'
    }
}
