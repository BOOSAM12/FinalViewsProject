const fileInput = document.getElementById('imagenInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function () {
  preview.innerHTML = ''; // Limpia vista previa previa
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