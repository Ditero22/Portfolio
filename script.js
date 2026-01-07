
// Lock scroll immediately
document.body.classList.add("splash-active");

window.addEventListener("load", () => {
    setTimeout(() => {
        const splash = document.getElementById("splash");

        splash.remove();

        // Restore scroll
        document.body.classList.remove("splash-active");

        // Trigger animations immediately
        requestAnimationFrame(() => {
            document.body.classList.add("loaded");
        });

    }, 5000); // splash duration
});

// Project card animation
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: "-20% 0px -20% 0px"
});

cards.forEach(card => observer.observe(card));

const contentCards = document.querySelectorAll('.Content-card');
contentCards.forEach(card => observer.observe(card));

const skillGroups = document.querySelectorAll('.skill-group');

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: "-20% 0px -20% 0px"
});

skillGroups.forEach(skill => skillObserver.observe(skill));
