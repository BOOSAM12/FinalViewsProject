let contCarrito = document.getElementById('contCarrito');
let abrirCarrito = document.getElementById('abrirCarrito');
let cerrarCarrito = document.getElementById('cerrarCarrito');
let imagenApertura = document.getElementById('desplegarProducto')

abrirCarrito.addEventListener('click', () => {
    contCarrito.classList.add('visible-carrito');
    
});

cerrarCarrito.addEventListener('click', () => {
    contCarrito.classList.remove('visible-carrito');
});

imagenApertura.addEventListener('click',()=>{
    if (imagenApertura.src.includes("../sources/img/arrow-down-circle (1).svg")) {
        imagenApertura.src = "../sources/img/arrow-up-circle.svg"; // Nueva imagen
    } else {
        imagenApertura.src = "../sources/img/arrow-down-circle (1).svg"; // Imagen original
    }
});