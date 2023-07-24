let num = [5, 8, 3 , 2 , 9]
num.sort()
num.push(1)
console.log(`Nosso vetor ${num} tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor está na posição ${pos}`)
}
