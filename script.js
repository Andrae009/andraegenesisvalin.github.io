// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: "smooth"
        });
    });
});

// Glitch Effect on Title
let glitchText = document.querySelector(".glitch");
setInterval(() => {
    let randomText = glitchText.innerText.split('').map(letter => Math.random() > 0.7 ? '█' : letter).join('');
    glitchText.innerText = randomText;
    setTimeout(() => glitchText.innerText = "Andrae Genesis Valin", 200);
}, 500);
