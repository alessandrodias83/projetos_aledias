const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.querySelector('.navbar');
    const menu = document.getElementById('menu');
    
    nav.classList.toggle('active');
    
    // Controla a acessibilidade
    const isExpanded = btnMobile.getAttribute('aria-expanded') === 'true';
    btnMobile.setAttribute('aria-expanded', !isExpanded);
}

btnMobile.addEventListener('click', toggleMenu);
