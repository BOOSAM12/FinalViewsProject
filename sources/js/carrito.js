let contCarrito = document.getElementById('contCarrito');
let abrirCarrito = document.getElementById('abrirCarrito');
let cerrarCarrito = document.getElementById('cerrarCarrito');

abrirCarrito.addEventListener('click', () => {
    contCarrito.classList.add('visible-carrito');
    
});

cerrarCarrito.addEventListener('click', () => {
    contCarrito.classList.remove('visible-carrito');
});