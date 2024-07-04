document.addEventListener('DOMContentLoaded', function () {
    // Navbar Animation
    const navLinks = document.querySelectorAll('nav a img');
    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
    });

    // Hero Animation
    const hero = document.querySelector('.hero');
    gsap.from(hero, { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(hero.querySelector('h1'), { y: -50, opacity: 0, duration: 1, delay: 1 });
    gsap.from(hero.querySelector('p'), { y: 50, opacity: 0, duration: 1, delay: 1.5 });
    gsap.from(hero.querySelector('.cta-button'), { y: 50, opacity: 0, duration: 1, delay: 2 });

    // Menu Item Animation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        gsap.from(item, { opacity: 0, y: 50, duration: 1, delay: index * 0.2 });
    });

    // Gallery Item Animation
    const galleryItems = document.querySelectorAll('.gallery img');
    galleryItems.forEach((item, index) => {
        gsap.from(item, { opacity: 0, y: 50, duration: 1, delay: index * 0.2 });
    });
});