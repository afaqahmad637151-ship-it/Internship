const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;


// Image click
images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentIndex = index;
        lightboxImg.src = image.src;
        lightbox.style.display = "flex";
    });
});


// Close button
close.addEventListener("click", function() {
    lightbox.style.display = "none";
});


// Next button
next.addEventListener("click", function() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;
});


// Previous button
prev.addEventListener("click", function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImg.src = images[currentIndex].src;
});
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryImages = document.querySelectorAll(".gallery-img");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryImages.forEach(function(image) {

            if (filter === "All" || image.getAttribute("data-category") === filter) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }

        });

    });

});