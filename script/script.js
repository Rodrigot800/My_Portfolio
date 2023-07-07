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
function htmltext() {
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text1')
    var apg = document.querySelectorAll('.text_conhecimentos')

    apg.forEach(function(element) {
        element.style.display = 'none';
    })
    imgcode.style.display = 'none'
    text.style.display = 'block'

}
function csstext() {
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text2')
    var apg = document.querySelectorAll('.text_conhecimentos')

    apg.forEach(function(element) {
        element.style.display = 'none';
    });
    imgcode.style.display = 'none'
    text.style.display = 'block'

}

function jstext() { 
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text3')
    var apg = document.querySelectorAll('.text_conhecimentos')

    apg.forEach(function(element) {
        element.style.display = 'none';
    });
    imgcode.style.display = 'none'
    text.style.display = 'block'
}

function gittext() { 
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text4')
    var apg = document.querySelectorAll('.text_conhecimentos')

    apg.forEach(function(element) {
        element.style.display = 'none';
    });    imgcode.style.display = 'none'
    text.style.display = 'block'

}
function githubtext() { 
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text5')
    var apg = document.querySelectorAll('.text_conhecimentos')

    apg.forEach(function(element) {
        element.style.display = 'none';
    });
    imgcode.style.display = 'none'
    text.style.display = 'block'

}
function phptext() { 
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text6')
    var apg = document.querySelectorAll('.text_conhecimentos')

    apg.forEach(function(element) {
        element.style.display = 'none';
    });
    imgcode.style.display = 'none'
    text.style.display = 'block'

}