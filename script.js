const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        lightboxImg.src = image.src;
        lightbox.style.display = "flex";
    });
});

close.addEventListener("click", function() {
    lightbox.style.display = "none";
});