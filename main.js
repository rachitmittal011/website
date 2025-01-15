// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1000);
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.documentElement.setAttribute('data-theme', 
        document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
}

// Initialize theme from localStorage
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Search Functionality
function performSearch(query) {
    // Example search implementation
    const searchResults = document.querySelector('.search-results');
    // Implement your search logic here
}

// Back to Top Button
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

// Cookie Consent
function setCookieConsent() {
    localStorage.setItem('cookieConsent', 'true');
    document.querySelector('.cookie-banner').style.display = 'none';
}

if (!localStorage.getItem('cookieConsent')) {
    document.querySelector('.cookie-banner').style.display = 'flex';
}