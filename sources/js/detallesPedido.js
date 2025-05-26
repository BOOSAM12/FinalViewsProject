const abrirModal = document.querySelector('.btn-confirmar-pedido');
const modal = document.getElementById('modalDetallesPedido');

abrirModal.addEventListener('click', (event) => {
    event.preventDefault(); // ✅ Detiene la navegación automática del enlace
    modal.showModal();      // ✅ Muestra el modal

    // Espera 5 segundos, luego cierra el modal y redirige
    setTimeout(() => {
        modal.close(); // opcional
        window.location.href = abrirModal.href; // ✅ Redirige al enlace original manualmente
    }, 3000);
});
