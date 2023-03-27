let num = [5, 8, 2, 9, 3]
/* num.sort() // Organiza em ordem crescente
console.log(`${num}`)
console.log(`O segundo elemento é ${num[2]}`) // Mostra o valor do elemento desejado // Inicia-se sempre em 0
console.log(`Essa Array possuí ${num.length} elementos`) // Mostra quantos elementos há na Array
console.log(`Adicione o Valor 3 no elemento 6: ${num[3]=6}`) // Adiona um valor em um elemento indicado
console.log(`Adicione o valor 7 no proximo elemento Vazio: ${num.push(2)}`)

for (let pos = 0;pos < num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

for(let pos in num) {
    console.log(num[pos])
} 
*/

let pos = num.indexOf(3)
console.log(pos)