// Smooth Scrolling Navigation
document.querySelectorAll('nav a[href^="#"], .hero-btns a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Log for Debugging
console.log("Akilan Kirushaliny - Portfolio loaded successfully.");
