
let currentIndex = 0;
let autoScrollInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        const randomInterval = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;
        nextSlide();
        clearInterval(autoScrollInterval);
        startAutoScroll();
    }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);
}

document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(autoScrollInterval);
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
    startAutoScroll();
});

startAutoScroll();