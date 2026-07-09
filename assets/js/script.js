// --- LÓGICA DO MENU HAMBÚRGUER ---
const menuToggle = document.getElementById('menu-toggle');
const navOverlay = document.getElementById('nav-overlay');

function toggleMenu() {
    menuToggle.classList.toggle('open');
    navOverlay.classList.toggle('open');
    document.body.style.overflow = navOverlay.classList.contains('open') ? 'hidden' : 'auto';
}

menuToggle.addEventListener('click', toggleMenu);

// --- LÓGICA DO CAROUSEL ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlideIndex = index;
}

function nextSlide() { 
    showSlide((currentSlideIndex + 1) % slides.length); 
}

function currentSlide(index) {
    clearInterval(slideInterval);
    showSlide(index);
    startAutoSlide(5000); 
}

function startAutoSlide(timer) { 
    slideInterval = setInterval(nextSlide, timer); 
}

window.onload = () => { 
    startAutoSlide(5000); 
};

// --- REVEAL ON SCROLL (ANIMAÇÃO AO DESCER A PÁGINA) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { 
        if (entry.isIntersecting) entry.target.classList.add('active'); 
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));