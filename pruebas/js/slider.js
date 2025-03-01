const container = document.querySelector('.carousel-container');
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        const itemWidth = items[0].offsetWidth;
        let currentIndex = Math.floor(totalItems / 2); 
        // Comienza con la imagen central
        // Actualizar el carrusel
        function updateCarousel() {
            const offset = -currentIndex * itemWidth + (carousel.offsetWidth - itemWidth) / 2;
            container.style.transform = `translateX(${offset}px)`;

            items.forEach((item, index) => {
                if (index === currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        // Rotar automáticamente cada 3 segundos
        function autoSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        // Inicializar el carrusel
        const carousel = document.querySelector('.carousel');
        updateCarousel();
        setInterval(autoSlide, 10000);

        // Opcional: controles manuales con clic
        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });