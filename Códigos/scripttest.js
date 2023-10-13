const slider = document.getElementById('slider');
const galleryItems = document.querySelectorAll('.gallery');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function updateSlider() {
    galleryItems.forEach((item, index) => {
        item.style.display = index === currentIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateSlider();
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);