document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('bg-video');

    function tryPlay() {
        if (!video) return;
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {

            });
        }
    }

    tryPlay();

    // Intersection Observer для анімації картинок
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.prince-card').forEach(section => {
        observer.observe(section);
    });

    // Обробник кліків на картки князів
    document.querySelectorAll('.prince-card').forEach(card => {
        card.addEventListener('click', () => {
            const prince = card.getAttribute('data-prince');
            if (prince) {
                showPrinceDetail(prince);
            }
        });
    });
});

function showPrinceDetail(prince) {
    // Сховати всі деталі
    document.querySelectorAll('.prince-detail').forEach(detail => {
        detail.classList.remove('active');
    });
    
    // Показати вибраний деталь
    const detail = document.getElementById(prince);
    if (detail) {
        detail.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closePrinceDetail() {
    document.querySelectorAll('.prince-detail').forEach(detail => {
        detail.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
}

