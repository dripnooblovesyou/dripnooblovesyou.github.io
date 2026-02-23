document.addEventListener("DOMContentLoaded", function () {

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        if (slides.length === 0) return;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        slides[slideIndex - 1].style.display = "block";

        setTimeout(showSlides, 4000);
    }

    const committeeDropdowns = document.querySelectorAll(".committee-dropdown");

    committeeDropdowns.forEach(function (dropdown) {
        const summary = dropdown.querySelector("summary");
        const body = dropdown.querySelector(".committee-body");
        if (!summary || !body) return;

        if (dropdown.open) {
            body.style.maxHeight = body.scrollHeight + "px";
            body.style.opacity = "1";
            body.style.padding = "0.2rem 1.3rem 1.25rem";
            body.style.borderTopColor = "#e8ddbf";
        } else {
            body.style.maxHeight = "0px";
        }

        summary.addEventListener("click", function (event) {
            event.preventDefault();

            if (!dropdown.open) {
                dropdown.open = true;
                body.style.maxHeight = "0px";
                body.style.opacity = "0";
                body.style.padding = "0 1.3rem";
                body.style.borderTopColor = "transparent";

                requestAnimationFrame(function () {
                    body.style.maxHeight = body.scrollHeight + "px";
                    body.style.opacity = "1";
                    body.style.padding = "0.2rem 1.3rem 1.25rem";
                    body.style.borderTopColor = "#e8ddbf";
                });
                return;
            }

            body.style.maxHeight = body.scrollHeight + "px";
            requestAnimationFrame(function () {
                body.style.maxHeight = "0px";
                body.style.opacity = "0";
                body.style.padding = "0 1.3rem";
                body.style.borderTopColor = "transparent";
            });

            function closeAfterTransition(e) {
                if (e.propertyName !== "max-height") return;
                dropdown.open = false;
                body.removeEventListener("transitionend", closeAfterTransition);
            }

            body.addEventListener("transitionend", closeAfterTransition);
        });
    });

    const about = document.querySelector(".about-container");

    function revealOnScroll() {
        if (!about) return;
        const position = about.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            about.classList.add("show");
        }
    }

    if (about) {
        window.addEventListener("scroll", revealOnScroll);
    }
});
