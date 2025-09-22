const images = ["image.png", "image1.png", "image2.png"];
let currentIndex = 0;

function showSlide(index) {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Auto slideshow every 3 seconds
setInterval(nextSlide, 3000);
