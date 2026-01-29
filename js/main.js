document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal config
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .project-card, .timeline-item').forEach(el => {
        el.classList.add('hidden'); // Add initial hidden class (need to css this)
        observer.observe(el);
    });

    // Add hidden/visible styles dynamically if not in CSS, 
    // but better to add to CSS. For now let's just leave the simple logic here.
});

// Simple mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });
}
