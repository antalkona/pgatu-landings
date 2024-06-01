document.addEventListener("DOMContentLoaded", function() {
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");

            var content = this.querySelector(".accordion-content");
            if (this.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }

            // Close other accordions
            accordions.forEach(function(otherAccordion) {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove("active");
                    otherAccordion.querySelector(".accordion-content").style.maxHeight = null;
                }
            });
        });
    });
});


document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= windowHeight) {
        header.style.top = '10px';
    } else {
        header.style.top = '-100px';
    }
});











