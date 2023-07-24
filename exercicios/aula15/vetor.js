let num = [0, 1, 7, 2, 9]
console.log(num)

//for...
/*for (let pos = 0; pos < num.length; pos++) {
    console.log(` A posição ${pos} tem o valor ${num[pos]}`)
}*/

//for... in
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}