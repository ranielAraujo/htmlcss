const btnBurguer = document.getElementById('burguer');
const menu = document.getElementById('menu');


btnBurguer.addEventListener('click', e => {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
        btnBurguer.style.backgroundColor = 'rgb(233, 210, 0)';
        btnBurguer.style.color = 'rgb(78, 28, 0)';
    } else {
        menu.style.display = 'block';
        btnBurguer.style.backgroundColor = 'rgb(78, 28, 0)';
        btnBurguer.style.color = 'rgb(233, 210, 0)';
    }


})

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}