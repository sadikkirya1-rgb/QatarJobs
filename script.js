/* MOBILE MENU */

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.onclick = () => {
        navLinks.classList.toggle('active');
    };
}

/* DARK MODE TOGGLE */

const themeBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
}

/* SCROLL REVEAL */

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing after reveal
            // revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

/* REAL-TIME JOB SEARCH */

const searchInput = document.getElementById('jobSearch');
const jobCards = document.querySelectorAll('.job-card');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        jobCards.forEach(card => {
            const isVisible = 
                card.dataset.title.toLowerCase().includes(value) || 
                card.dataset.company.toLowerCase().includes(value);
            card.classList.toggle('hide', !isVisible);
        });
    });
}

/* BACK TO TOP BUTTON */

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    backToTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

/* PROGRESS BAR */

window.addEventListener('scroll', () => {

    let winScroll =
    document.body.scrollTop ||
    document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById("progressBar");
    if (progressBar) progressBar.style.width = scrolled + "%";

    // Show/Hide Back to Top button
    if (backToTopBtn) {
        if (winScroll > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});