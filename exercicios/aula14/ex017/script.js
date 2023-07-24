function calcular() {
    let num = document.getElementById("itab")
    let tab = document.getElementById("seltab")
    
    if (num.value.length == 0){
        res.innerHTML = "Erro! Digite um valor"
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}