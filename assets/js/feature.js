document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    // Toggle mobile navigation
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});

// Initialize map
const map = L.map('map').setView([25.409039, 55.436240], 16); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([25.409039, 55.436240]).addTo(map)
    .bindPopup('TAMAM ELECTRONICS TRADING')
    .openPopup();

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
