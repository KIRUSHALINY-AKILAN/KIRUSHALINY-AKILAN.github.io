// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 2. Dynamic Scroll Reveal Animation (Trigger Elements when scrolled into view)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 120; // Trigger distance from bottom

    reveals.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// 3. Parallax Earth Movement on Scroll
const earthSphere = document.querySelector('.earth-sphere');

window.addEventListener('scroll', () => {
    revealOnScroll(); // Trigger reveal logic
    
    // Parallax background earth scroll
    const scrollValue = window.scrollY;
    if (earthSphere) {
        earthSphere.style.transform = `translateY(${scrollValue * 0.25}px) rotate(${scrollValue * 0.04}deg)`;
    }
});

// Trigger once on page load
window.addEventListener('load', () => {
    revealOnScroll();
});

console.log("Portfolio Loaded with Smooth Transitions & Scroll Reveal FX!");
