document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
            body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Smooth Scroll for anchor links (if not handled by CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handling (Placeholder)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Track submission
            if (window.dataLayer) {
                window.dataLayer.push({
                    'event': 'form_submission',
                    'form_id': form.id || 'unknown_form'
                });
            }
            // In a real app, you would send data here
            alert('Thank you! This is a demo form.');
            form.reset();
        });
    });

    // Event Tracking for CTAs
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function () {
            if (window.dataLayer) {
                window.dataLayer.push({
                    'event': 'cta_click',
                    'cta_text': this.innerText,
                    'cta_href': this.getAttribute('href')
                });
            }
        });
    });
});
