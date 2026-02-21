document.addEventListener("DOMContentLoaded", function () {

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 4000);
    }

    const about = document.querySelector(".about-container");

    if (!about) return;

    function revealOnScroll() {
        const position = about.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            about.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});