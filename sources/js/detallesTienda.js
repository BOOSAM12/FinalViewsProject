const btnCategoria = document.querySelectorAll('.btn-categoria');

btnCategoria.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        btn.classList.toggle('btn-categorias-activo');
    });
});
