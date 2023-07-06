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
    var htmltext = document.getElementById('html')
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text1')
    
    if (imgcode.style.display == 'block') {
        imgcode.style.display = 'none'
        text.style.display = 'block'
    } else {
        imgcode.style.display = 'block'
        text.style.display = 'none'
    }


}
function csstext() {
    var htmltext = document.getElementById('html')
    var img = document.getElementById('imgcode')
    var text = document.getElementById('text2')
    if (imgcode.style.display == 'block') {
        imgcode.style.display = 'none'
        text.style.display = 'block'
    } else {
        imgcode.style.display = 'block'
        text.style.display = 'none'
    }

}

window.onload = function() {
    var divs = document.querySelectorAll('.alinhamento > .imgcnc');

    divs.forEach(function(div) {
        div.addEventListener('click', function() {
            var texto = this.getAttribute('data-texto');
            var imagem1 = document.querySelector('.imagem1');
            imagem1.style.display = 'none';
            var textoElement = document.createElement('p');
            textoElement.textContent = texto;
            this.parentNode.insertBefore(textoElement, imagem1.nextSibling);
        });
    });
};