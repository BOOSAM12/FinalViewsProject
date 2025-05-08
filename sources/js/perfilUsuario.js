const passwordInput = document.getElementById('passwordInput');
const bars = document.querySelectorAll('.bar');
const reqs = {
  length: document.getElementById('req-length'),
  uppercase: document.getElementById('req-uppercase'),
  number: document.getElementById('req-number'),
  special: document.getElementById('req-special')
};

// Paleta de colores por nivel
const levelColors = ["#eee", "#ff4d4d", "#ffa500", "#ffd700", "#4caf50"];

passwordInput.addEventListener('input', () => {
  const pwd = passwordInput.value;
  let metCount = 0;

  // Validaciones
  const isLength = pwd.length >= 8;
  const hasUpper = /[A-Z]/.test(pwd);
  const hasNumber = /\d/.test(pwd);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

  // Marcar cada requisito como cumplido o no
  reqs.length.classList.toggle('met', isLength);
  reqs.uppercase.classList.toggle('met', hasUpper);
  reqs.number.classList.toggle('met', hasNumber);
  reqs.special.classList.toggle('met', hasSpecial);

  // Contar los requisitos cumplidos
  metCount = [isLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  // Colorear las barras según los requisitos cumplidos
  bars.forEach((bar, i) => {
    if (i < metCount) {
      bar.style.backgroundColor = levelColors[i + 1];
    } else {
      bar.style.backgroundColor = levelColors[0];
    }
  });
});
