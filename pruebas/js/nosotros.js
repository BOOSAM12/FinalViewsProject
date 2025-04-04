document.addEventListener('DOMContentLoaded', () => {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    const timelineProgress = document.querySelector('.timeline-progress');
    const timelineCards = document.querySelectorAll('.timeline-card');

    function updateTimeline(activeIndex) {
        // Update points
        timelinePoints.forEach((point, index) => {
            if (index === activeIndex) {
                point.classList.add('active');
            } else {
                point.classList.remove('active');
            }
        });

        // Update cards
        timelineCards.forEach((card, index) => {
            if (index === activeIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Update progress line
        const progressWidth = (activeIndex / (timelinePoints.length - 1)) * 100;
        timelineProgress.style.width = `${progressWidth}%`;
    }

    // Click event for points
    timelinePoints.forEach((point) => {
        point.addEventListener('click', () => {
            const index = point.getAttribute('data-index');
            updateTimeline(parseInt(index));
        });
    });

    // Auto-rotate timeline
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % timelinePoints.length;
        updateTimeline(currentIndex);
    }, 5000);
});