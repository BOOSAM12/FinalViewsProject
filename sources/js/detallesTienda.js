const btnCategoria = document.querySelectorAll('.btn-categoria');
const contProductosTienda = document.querySelector('.cont-productos-tienda');
const contDetallesTienda = document.querySelector('.cont-detalles-tienda');
const verProductos = document.getElementById('verProductos');
const verDetalles = document.getElementById('verDetalles');

// Activar solo un botón de categoría a la vez
btnCategoria.forEach((btn) => {
    btn.addEventListener('click', () => {
        btnCategoria.forEach(b => b.classList.remove('btn-categorias-activo'));
        btn.classList.add('btn-categorias-activo');
    });
});

// Función para mostrar una sección con animación y ocultar la otra
function mostrarSeccion(mostrar, ocultar) {
    ocultar.style.display = 'none';
    ocultar.classList.remove('animate__fadeInRight');

    mostrar.style.display = 'flex';
    void mostrar.offsetWidth; // Reinicia animación
    mostrar.classList.add('animate__animated', 'animate__fadeInRight');
}

// Eventos para cambiar entre secciones
verProductos.addEventListener('click', () => {
    mostrarSeccion(contProductosTienda, contDetallesTienda);
});

verDetalles.addEventListener('click', () => {
    mostrarSeccion(contDetallesTienda, contProductosTienda);
});
