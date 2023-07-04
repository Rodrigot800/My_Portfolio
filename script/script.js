 function carregar() {
    var saudacao = document.getElementById('saudacao')
    var dataAtual = new Date()
    var hora = dataAtual.getHours()

    if ( hora >= 6 && hora < 12 ) {
        saudacao.innerHTML = `olá, bom dia!`
    } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML = `olá, boa tarde!`
    }
    else {
        saudacao.innerHTML = `olá, boa noite!`
    }
}


function funcMenu() {
    var itens = document.getElementById("itens")
    var icon = document.getElementById("icone")
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}