// Captura o botão do menu hamburguer
const btnMobile = document.getElementById('btn-mobile');

// Função que controla a exibição do menu mobile
function toggleMenu() {
    const nav = document.querySelector('.navbar');
    const menu = document.getElementById('menu');
    
    if (nav && menu) { // Verifica se os elementos existem
        nav.classList.toggle('active');
        menu.classList.toggle('active'); // Adiciona ou remove a classe 'active' para o menu também
        
        // Controla a acessibilidade
        const isExpanded = btnMobile.getAttribute('aria-expanded') === 'true';
    btnMobile.setAttribute('aria-expanded', !isExpanded);
} else {
        console.error('Elemento(s) não encontrado(s) no DOM.');
    }
}

// Adiciona o evento de clique no botão hamburguer
btnMobile.addEventListener('click', toggleMenu);


const dropbox = document.getElementsByClassName('contentBx');

for (i = 0; i < dropbox.length; i++) {
    dropbox[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}
