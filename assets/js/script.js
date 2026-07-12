// INTERACTIVE GLOW AURA TRACKER
const glowBg = document.getElementById('glow-bg');

window.addEventListener('mousemove', (e) => {
    // Menghitung posisi kursor dan memperbarui variabel CSS secara dinamis
    const x = e.clientX;
    const y = e.clientY;
    
    glowBg.style.setProperty('--mouse-x', `${x}px`);
    glowBg.style.setProperty('--mouse-y', `${y}px`);
});

// SCROLL ANIMATION FADE-IN (OPIONAL & HALUS)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Hanya animasi satu kali saat di-scroll
        }
    });
}, observerOptions);

// Menerapkan efek transisi halus pada setiap elemen class 'card'
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInObserver.observe(card);
});

// DYNAMIC NAVBAR SHRINK EFFECT
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});