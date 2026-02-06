// Global functions for inline HTML calls
window.toggleMenu = function () {
    console.log('Toggle menu called');
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
        console.error('Mobile menu element not found');
    }
}

window.closeMenu = function () {
    console.log('Close menu called');
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Debug logging
    console.log('Script loaded successfully');

    // Mobile Menu Toggle with Event Delegation
    document.addEventListener('click', function (e) {
        // Toggle Menu
        if (e.target.closest('.menu-toggle')) {
            window.toggleMenu(); // Use shared function
        }

        // Close Menu Button
        if (e.target.closest('.close-menu-btn')) {
            window.closeMenu();
        }

        // Close when clicking outside
        if (e.target.classList.contains('mobile-menu')) {
            window.closeMenu();
        }

        // Close when clicking a link
        if (e.target.closest('.mobile-nav-list a')) {
            window.closeMenu();
        }
    });

    // Sticky Call Button visibility (Optional enhancement: hide when footer is visible)
    const stickyBtn = document.querySelector('.sticky-mobile-cta');
    const footer = document.querySelector('footer');

    if (stickyBtn && footer) {
        window.addEventListener('scroll', () => {
            // Simple visibility logic if needed
        });
    }

    // Smooth Scroll for "Get Enquiry" buttons
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
