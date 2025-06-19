document.addEventListener('DOMContentLoaded', () => {
  //LOGICA PARA EL CONTENEDOR DE PERFIL DE USUARIO
  const contenedorPrincipalPerfil = document.querySelector('.cont-config-opciones');
  const contenedorInformacionPersonal = document.querySelector('.cont-form-personal');
  const contenedorSeguridad = document.querySelector('.container-form-seguridad');
  const contenedorInfoTienda = document.querySelector('.container-info-tienda');
  const abrirContInfoPersonal = document.getElementById('abrirContInfoPersonal');
  const abrirContSeguridad = document.getElementById('abrirContSeguridad');
  const abrirContInfoTienda = document.getElementById('abirContInfoTienda');

  if (abrirContInfoPersonal) {
    abrirContInfoPersonal.addEventListener('click', function () {
      contenedorInformacionPersonal.style.display = 'flex';
      contenedorPrincipalPerfil.style.display = 'none';
    });
  }

  if (abrirContSeguridad) {
    abrirContSeguridad.addEventListener('click', function () {
      contenedorSeguridad.style.display = 'flex';
      contenedorPrincipalPerfil.style.display = 'none';
    });
  }

  if (abrirContInfoTienda) {
    abrirContInfoTienda.addEventListener('click', function () {
      contenedorInfoTienda.style.display = 'flex';
      contenedorPrincipalPerfil.style.display = 'none';
    });
  }

  function estaOculto(elemento) {
    const estilo = window.getComputedStyle(elemento);
    return estilo.display === 'none' || estilo.visibility === 'hidden';
  }

  // VERIFICAR SI EL CONTENEDOR DEL FORMULARIO ESTÁ PRESENTE
  if (!estaOculto(contenedorSeguridad)) {
    const btnActualizarContrasena = document.getElementById('btnActualizarContrasena');
    const contrasenaInput = document.getElementById('contrasenaNueva');
    if (btnActualizarContrasena && contrasenaInput) {
      validarContrasena();
      btnActualizarContrasena.addEventListener('click', function () {
        mostrarConfirmacionContrasena();
      });
    }
  }

  function validarContrasena() {
    const contrasenaInput = document.getElementById('contrasenaNueva');
    if (!contrasenaInput) return;

    const bars = document.querySelectorAll('.progreso');
    const infoDebilidad = document.getElementById('infoDebilidad');

    const mensajes = [
      "Débil - Utiliza mínimo 8 caracteres con mayúscula",
      "Medio - Utiliza mínimo 8 caracteres con mayúscula y números",
      "Aceptable - Utiliza mínimo 8 caracteres con mayúsculas, números y símbolos especiales",
      "Segura - tu contraseña cumple todos los requisitos"
    ];

    const levelColors = ["#eee", "#F75A5A", "#FFA955", "#FFD63A", "#16C47F"];

    contrasenaInput.addEventListener('input', () => {
      const pwd = contrasenaInput.value;
      const isLength = pwd.length >= 6;
      const hasUpper = /[A-Z]/.test(pwd);
      const hasNumber = /\d/.test(pwd);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>_]/.test(pwd);
      const metCount = [isLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

      bars.forEach((bar, i) => {
        bar.style.backgroundColor = i < metCount ? levelColors[i + 1] : levelColors[0];
      });

      infoDebilidad.textContent = mensajes[metCount - 1] || "Muy débil - Utiliza mínimo 8 caracteres";
    });
  }

  function mostrarConfirmacionContrasena() {
    const confirmacionFormulario = document.querySelector('.cont-confirmacion-formulario');
    if (confirmacionFormulario) {
      confirmacionFormulario.style.display = 'flex';
    }
  }

  const modal = document.getElementById('modalCencelar');
  const btnAceptarModal = document.getElementById('btnAceptarModal');
  const btnCancelarModal = document.getElementById('btnCancelarModal');

  const btnCancelarContrasena = document.getElementById('btnCancelarContrasena');
  const btnCancelarInfoPersonal = document.getElementById('btnCancelarInfoPersonal');
  const btnAjusteCuenta = document.getElementById('btnAjusteCuenta');
  const btnCancelarInfoTiendaBasica = document.getElementById('btnCancelarInfoTienda');
  const btnCancelarHorariosTienda = document.getElementById('btnCancelarHorarios');
  const btnCancelarMetodosPagoTienda = document.getElementById('btnCancelarMetodoPago');

  function openConfirm(onAccept) {
    if (!modal) return;
    modal.showModal();
    const handler = () => {
      onAccept();
      modal.close();
      btnAceptarModal.removeEventListener('click', handler);
    };
    btnAceptarModal.addEventListener('click', handler);
  }

  function closeConfirm() {
    modal.close();
  }

  if (btnCancelarModal) {
    btnCancelarModal.addEventListener('click', closeConfirm);
  }

  if (btnCancelarContrasena) {
    btnCancelarContrasena.addEventListener('click', () => {
      openConfirm(() => console.log('Formulario de seguridad cancelado por el usuario.'));
    });
  }

  if (btnCancelarInfoPersonal) {
    btnCancelarInfoPersonal.addEventListener('click', () => {
      openConfirm(() => console.log('Formulario de info personal cancelado por el usuario.'));
    });
  }

  if (btnCancelarInfoTiendaBasica) {
    btnCancelarInfoTiendaBasica.addEventListener('click', () => {
      openConfirm(() => console.log('Cancelar en formulario de información básica de la tienda.'));
    });
  }

  if (btnCancelarHorariosTienda) {
    btnCancelarHorariosTienda.addEventListener('click', () => {
      openConfirm(() => console.log('Cancelar en formulario de información de los horarios de la tienda'));
    });
  }

  if (btnCancelarMetodosPagoTienda) {
    btnCancelarMetodosPagoTienda.addEventListener('click', () => {
      openConfirm(() => console.log('Cancelar en formulario de métodos de pago de la tienda.'));
    });
  }

  if (btnAjusteCuenta) {
    btnAjusteCuenta.addEventListener('click', () => {
      const estilos = window.getComputedStyle(contenedorPrincipalPerfil);
      if (estilos.display !== 'flex') {
        openConfirm(() => {
          contenedorPrincipalPerfil.style.display = 'flex';
          contenedorInformacionPersonal.style.display = 'none';
          contenedorSeguridad.style.display = 'none';
        });
      }
    });
  }

  if (btnAceptarModal) {
    btnAceptarModal.addEventListener('click', function () {
      contenedorSeguridad.style.display = 'none';
      contenedorInformacionPersonal.style.display = 'none';
      contenedorInfoTienda.style.display = 'none';
      contenedorPrincipalPerfil.style.display = 'flex';
    });
  }

  // LOGICA DEL CONTENEDOR PARA ACTUALIZAR LA INFORMACIÓN DE LA TIENDA
  const abrirInfoBasica = document.getElementById('btnInfoBasica');
  const abrirInfoHorarios = document.getElementById('btnDatosEnvio');
  const abrirInfoMetodosPago = document.getElementById('btnDatosPago');

  const formInfoBasica = document.querySelector('.cont-formulario-basico');
  const formInfoHorarios = document.querySelector('.cont-formulario-horarios');
  const formInfoMetodosPago = document.querySelector('.cont-formulario-pago');

  const tabs = [
    { btn: abrirInfoHorarios, form: formInfoHorarios },
    { btn: abrirInfoMetodosPago, form: formInfoMetodosPago },
    { btn: abrirInfoBasica, form: formInfoBasica }
  ];

  const ANIM_BASE = 'animate__animated';
  const ANIM_FADEIN = 'animate__fadeInRight';

  function activarTab(seleccionada) {
    tabs.forEach(({ btn, form }) => {
      if (!btn || !form) return;
      const isActive = btn === seleccionada;
      form.style.display = isActive ? 'flex' : 'none';

      if (form === formInfoBasica) {
        if (isActive) {
          form.classList.remove(ANIM_BASE, ANIM_FADEIN);
          void form.offsetWidth;
          form.classList.add(ANIM_BASE, ANIM_FADEIN);
          form.addEventListener('animationend', () => {
            form.classList.remove(ANIM_BASE, ANIM_FADEIN);
          }, { once: true });
        } else {
          form.classList.remove(ANIM_BASE, ANIM_FADEIN);
        }
      }

      btn.classList.toggle('activeInfoTienda', isActive);
    });
  }

  tabs.forEach(({ btn }) => {
    if (btn) {
      btn.addEventListener('click', () => activarTab(btn));
    }
  });

  const fileInput = document.getElementById('imagenInput');
  const preview = document.getElementById('preview');

  if (fileInput && preview) {
    fileInput.addEventListener('change', function () {
      preview.innerHTML = '';
      const files = Array.from(this.files);

      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.style.width = '100px';
          img.style.margin = '10px';
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      });
    });
  }
});
