// Smooth Fade-in for Sections
document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transition = "opacity 1.5s ease-in-out";
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = "1";
        });
    }, 500);
});
