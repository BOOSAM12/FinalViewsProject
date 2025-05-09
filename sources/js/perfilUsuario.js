const contenedorPrincipalPerfil =  document.querySelector('.cont-config-opciones');
const contenedorInformacionPersonal =  document.querySelector('.cont-form-personal');
const modal = document.getElementById('modelaCencelar');
const btnCancelarFormulario = document.getElementById('btnCancelarContrasena');
const btnCancelarModal = document.getElementById('btnCancelarModal');
const btnAceptarModal = document.getElementById('btnAceptarModal');

btnCancelarFormulario.addEventListener('click', function() {
  modal.showModal();
});

btnCancelarModal.addEventListener('click', function() {
  modal.close();
});
btnAceptarModal.addEventListener('click', function() {
  modal.close();
});

//VERIFICAR SI EL CONTENEDOR DEL FORMULARIO ESTA PRESENTE EN EL VIEWPORT
const contenedorPrincipalContrasena =  document.querySelector('.container-form-seguridad');
if(contenedorPrincipalContrasena.offsetParent !== null){
  const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
  // Si el contenedor es visible, ejecuta la función
  validarContrasena();
  btnActualizarContrasena.addEventListener('click', function() {
    mostrarRecuperarContrasena();
  });
}


//FUNCION PARA MOSTRAR RECUADRO DE CONFIRMACION DE ACTULIZACIÓN DE CONTRASEÑA
function mostrarRecuperarContrasena() {
  const confirmacionFormulario = document.querySelector('.cont-confirmacion-formulario');
  confirmacionFormulario.style.display = 'flex';
}


//FUNCION PARA VALIDAR LA SEGURIDAD DE LA CONTRASEÑNA EN EL CONTENEDOR DEL FORMULARIO CORRESPONDIENTE
function validarContrasena(){
  const contrasenaInput = document.getElementById('contrasenaNueva');
  const bars = document.querySelectorAll('.progreso');
  const infoDebilidad = document.getElementById('infoDebilidad');

  // Mensajes según nivel
  const mensajes = [
    "Débil - Utiliza mínimo 8 caracteres con mayúscula",
    "Medio - Utiliza mínimo 8 caracteres con mayúscula y números",
    "Aceptable - Utiliza mínimo 8 caracteres con mayúsculas, números y símbolos especiales",
    "Segura - tu contraseña cumple todos los requisitos"
  ];

  // Paleta de colores por nivel
  const levelColors = ["#eee", "#F75A5A", "#FFA955", "#FFD63A", "#16C47F" ];

  contrasenaInput.addEventListener('input', () => {
    const pwd = contrasenaInput.value;

    // Validaciones
    const isLength = pwd.length >= 6;
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>_]/.test(pwd);

    // Contar requisitos cumplidos
    const metCount = [isLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

    // Actualizar barras
    bars.forEach((bar, i) => {
      bar.style.backgroundColor = i < metCount ? levelColors[i + 1] : levelColors[0];
    });

    // Actualizar texto
    infoDebilidad.textContent = mensajes[metCount - 1] || "Muy débil - Utiliza mínimo 8 caracteres";
  });

}
