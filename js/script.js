document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');

    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Sticky Call Button visibility (Optional enhancement: hide when footer is visible)
    const stickyBtn = document.querySelector('.sticky-mobile-cta');
    const footer = document.querySelector('footer');

    if (stickyBtn && footer) {
        window.addEventListener('scroll', () => {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // If footer is visible, hide the sticky button to avoid overlap?
            // Actually, for a conversion focused site, keeping it visible is usually better.
            // But let's add a small fade-in effect on scroll if we wanted.
            // For now, simple fixed position is best for conversion.
        });
    }
    
    // Smooth Scroll for "Get Enquiry" buttons if not supported natively
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
});
