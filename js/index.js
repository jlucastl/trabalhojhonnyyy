window.addEventListener("scroll", function() {
    let header = document.querySelector('.header')
    header.classList.toggle('rolagem', window.scrollY > 190)
})
window.addEventListener("scroll", function() {
    let header = document.querySelector('.header2')
    header.classList.toggle('rolagem', window.scrollY > 80)
})

window.addEventListener("scroll", function() {
    let header = document.querySelector('.DROPDOWN_MENU')
    header.classList.toggle('rolagem', window.scrollY > 190)
})

window.addEventListener("scroll", function() {
    let link = document.querySelector('#LINK_TOPO')
    link.classList.toggle('rolagem2', window.scrollY > 600)
})
//--------------------------------------------------------------
function abrirMenu() {
    let open = document.getElementById('open');

    if(open.style.display == 'block') {
        open.style.display = 'none'
    }
    else {
        open.style.display = 'block'
    }
}
function temaEscuro() {
    document.body.classList.toggle('tema_escuro')
}

