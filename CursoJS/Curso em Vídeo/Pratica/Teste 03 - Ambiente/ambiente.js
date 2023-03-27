const nome = ["Ana", "João","Paulo", "André"]
const nomeA = []
for (let item of nome) {
    if (item[0] === "A") {
        nomeA.push(item)
    }
}

console.log(nomeA)