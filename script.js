document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(card => {
        card.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });
        card.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
