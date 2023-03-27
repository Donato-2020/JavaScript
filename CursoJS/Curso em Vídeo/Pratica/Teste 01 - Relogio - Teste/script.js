const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time () {    
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec


    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec

    if (hr <= 5) {
        document.body.style.background = 'linear-gradient(0deg, rgb(0, 0, 0), rgb(2, 2, 15))'
    } else if (hr <= 12) {
        document.body.style.background = 'linear-gradient(0deg, rgb(40, 150, 120), rgb(0, 120, 250))'
    } else if (hr <= 18) {
        document.body.style.background = 'linear-gradient(0deg, rgb(150, 150, 120), rgb(30, 120, 200))'
    } else if (hr <= 22) {
        document.body.style.background = 'linear-gradient(0deg, rgb(0, 10, 30), rgb(0, 0, 10))'
    }
 })
