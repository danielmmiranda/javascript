
function contar() {
    let ini = document.getElementById("iinicio")
    let fim = document.getElementById("ifim")
    let passo = document.getElementById("ipasso")
    let resp = document.getElementById("res")
        
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO! Faltam dados')
        resp.innerHTML = "Impossível contar!"
    } else {
        resp.innerHTML = "Contando . . . "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i<f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += `${c} \u{1f449}`
            }
                
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                    resp.innerHTML += `${c} \u{1f449}`
            }
        }
        resp.innerHTML += `\u{1f3c1}`              
    }
   
}

