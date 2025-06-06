const checkbox = document.getElementById('checkboxEstadoTienda');
const mensaje  = document.getElementById('mensajeEstadoTienda');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    mensaje.textContent = 'Tu tienda esta actualmente abierta';
  } else {
    mensaje.textContent = 'Tu tienda esta actualmente cerrada';
  }
});

const estadoProducto = document.querySelectorAll('.estado-producto');
estadoProducto.forEach((estado) => {
  if (estado.textContent === 'Disponible') {
    estado.style.color = 'green';
  }else{
    estado.style.color = 'red';
  }
});