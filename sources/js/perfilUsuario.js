//LOGICA PARA EL CONTENEDOR DE PERFIL DE USUARIO
const contenedorPrincipalPerfil =  document.querySelector('.cont-config-opciones');
const contenedorInformacionPersonal =  document.querySelector('.cont-form-personal');
const contenedorSeguridad =  document.querySelector('.container-form-seguridad');
const abrirContInfoPersonal = document.getElementById('abrirContInfoPersonal');
const abrirContSeguridad = document.getElementById('abrirContSeguridad');

//ABRIR EL CONTENEDOR DE INFORMACION PERSONAL
abrirContInfoPersonal.addEventListener('click', function() {
  contenedorInformacionPersonal.style.display = 'flex';
  contenedorPrincipalPerfil.style.display = 'none';
});

//ABRIR EL CONTENEDOR DE SEGURIDAD
abrirContSeguridad.addEventListener('click', function() {
  contenedorSeguridad.style.display = 'flex';
  contenedorPrincipalPerfil.style.display = 'none';
});

// Función para verificar si un elemento está oculto
function estaOculto(elemento) {
    const estilo = window.getComputedStyle(elemento);
    return estilo.display === 'none' || estilo.visibility === 'hidden';
}

//LOGICA PARA EL CONTENEDOR DE SEGURIDAD
//VERIFICAR SI EL CONTENEDOR DEL FORMULARIO ESTA PRESENTE EN EL VIEWPORT
if(estaOculto(contenedorSeguridad) === true){
    const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
   // Si el contenedor es visible, ejecuta la función
    validarContrasena();
    btnActualizarContrasena.addEventListener('click', function() {
      mostrarConfirmacionContrasena();
  });
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
//FUNCION PARA MOSTRAR RECUADRO DE CONFIRMACION DE ACTULIZACIÓN DE CONTRASEÑA
  function mostrarConfirmacionContrasena() {
    const confirmacionFormulario = document.querySelector('.cont-confirmacion-formulario');
    confirmacionFormulario.style.display = 'flex';
}

//FUNCIONES DEL MODAL
// ——— Referencias al DOM ———
const modal = document.getElementById('modalCencelar');
const btnAceptarModal = document.getElementById('btnAceptarModal');
const btnCancelarModal = document.getElementById('btnCancelarModal');

const btnCancelarContrasena = document.getElementById('btnCancelarContrasena');
const btnCancelarInfoPersonal = document.getElementById('btnCancelarInfoPersonal');
const btnAjusteCuenta = document.getElementById('btnAjusteCuenta');

// ——— Funciones auxiliares ———

/**
 * Abre el modal y asigna el handler de "Aceptar", que se auto-elimina tras ejecutarse.
 * @param {Function} onAccept Función a ejecutar cuando el usuario pulse "Aceptar".
 */
function openConfirm(onAccept) {
  modal.showModal();
  const handler = () => {
    onAccept();
    modal.close();
    btnAceptarModal.removeEventListener('click', handler);
  };
  btnAceptarModal.addEventListener('click', handler);
}

/** Cierra el modal inmediatamente */
function closeConfirm() {
  modal.close();
}

// ——— Asignar listener al botón interno "Cancelar" del modal ———
btnCancelarModal.addEventListener('click', closeConfirm);

// ——— Disparadores del modal ———

// 1) Cancelar en formulario de contraseña
if (btnCancelarContrasena) {
  btnCancelarContrasena.addEventListener('click', () => {
    openConfirm(() => {
      // Aquí puedes resetear o limpiar el formulario de seguridad si quieres
      console.log('Formulario de seguridad cancelado por el usuario.');
    });
  });
}

// 2) Cancelar en formulario de información personal
if (btnCancelarInfoPersonal) {
  btnCancelarInfoPersonal.addEventListener('click', () => {
    openConfirm(() => {
      // Aquí puedes resetear o limpiar el formulario de información personal
      console.log('Formulario de info personal cancelado por el usuario.');
    });
  });
}

// 3) Ajustes de cuenta: solo si el contenedor principal NO está visible
if (btnAjusteCuenta) {
  btnAjusteCuenta.addEventListener('click', () => {
    const estilos = window.getComputedStyle(contenedorPrincipalPerfil);
    if (estilos.display !== 'flex') {
      openConfirm(() => {
        // Mostrar pestaña principal, ocultar las demás
        contenedorPrincipalPerfil.style.display       = 'flex';
        contenedorInformacionPersonal.style.display   = 'none';
        contenedorSeguridad.style.display             = 'none';
      });
    }
  });
}

if(btnAceptarModal){
  btnAceptarModal.addEventListener('click', function() {
    contenedorSeguridad.style.display = 'none';
    contenedorInformacionPersonal.style.display   = 'none';
    contenedorPrincipalPerfil.style.display = 'flex';
  });
}


