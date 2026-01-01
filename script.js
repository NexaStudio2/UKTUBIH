// Navigacija - Dodavanje senke pri skrolovanju
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
        navbar.style.transition = "0.4s";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});

// Glatko skrolovanje do sekcija (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mala animacija za slike kada se pojave na ekranu
const revealImages = () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imgTop = img.getBoundingClientRect().top;
        if (imgTop < window.innerHeight - 100) {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
            img.style.transition = "0.8s ease-out";
        }
    });
};

window.addEventListener('scroll', revealImages);
