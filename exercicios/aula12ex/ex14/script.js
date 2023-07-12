function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são(é) ${hora} hora(s)`)
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = "manhã.jpg"
    } else if (hora >=12 && hora < 18) {
        //Boa Tarde
        img.src = "tarde.jpg"
    } else {
        //Boa Noite
        img.src = "noite.jpg"
    }
}

