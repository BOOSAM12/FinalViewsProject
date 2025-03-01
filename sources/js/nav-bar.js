const icono_nav = document.getElementById('icono-nav-bar');
const cont_nav = document.getElementById('cont-nav-bar');
const close_nav = document.getElementById('close-nav-bar');

// Función para mostrar el menú
icono_nav.addEventListener('click', () => {
    cont_nav.style.display = 'flex';
    cont_nav.offsetHeight;
    cont_nav.classList.add('visible');
});

// Función para ocultar el menú
close_nav.addEventListener('click', () => {
    cont_nav.classList.remove('visible');
    setTimeout(() => {
        cont_nav.style.display = 'none';
    }, 500); 
});