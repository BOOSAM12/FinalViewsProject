const btnCategoria = document.querySelectorAll('.btn-categoria');
// const productos = document.querySelectorAll('.card-producto');
// const labelFavorito = document.querySelectorAll('.cont-corazon');


btnCategoria.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        btn.classList.toggle('btn-categorias-activo');
    });
});

// productos.forEach((btnFavoritoProducto, index) => {

// });