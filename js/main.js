// Manuscripta - Dynamic Features
// Enhanced interactivity and animations

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // 1. INTERSECTION OBSERVER - Fade-in animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // For staggered animations
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.style.transitionDelay = `${delay}ms`;
                }, 0);
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.dataset.delay = index * 100;
        observer.observe(card);
    });

    // Observe team members
    document.querySelectorAll('.team-member').forEach((member, index) => {
        member.dataset.delay = index * 100;
        observer.observe(member);
    });

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in-element').forEach(element => {
        observer.observe(element);
    });


    // ========================================
    // 2. ANIMATED COUNTERS - Statistics
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Observe stat numbers for animation
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                if (target) {
                    animateCounter(entry.target, target);
                    statObserver.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(stat => {
        statObserver.observe(stat);
    });


    // ========================================
    // 3. COLLAPSIBLE SECTIONS
    // ========================================
    function makeCollapsible() {
        const contentPage = document.querySelector('.content-page');
        if (!contentPage) return;

        const headings = contentPage.querySelectorAll('h2');

        headings.forEach(heading => {
            // Skip if already processed
            if (heading.classList.contains('collapsible')) return;

            heading.classList.add('collapsible');

            // Gather content until next h2 or end
            const content = [];
            let nextElement = heading.nextElementSibling;

            while (nextElement && nextElement.tagName !== 'H2') {
                content.push(nextElement);
                nextElement = nextElement.nextElementSibling;
            }

            if (content.length > 0) {
                // Create wrapper
                const wrapper = document.createElement('div');
                wrapper.classList.add('collapsible-content');

                // Move content into wrapper
                content.forEach(el => {
                    wrapper.appendChild(el.cloneNode(true));
                    el.remove();
                });

                // Insert wrapper after heading
                heading.parentNode.insertBefore(wrapper, heading.nextSibling);

                // Add click handler
                heading.addEventListener('click', function() {
                    this.classList.toggle('collapsed');
                    wrapper.classList.toggle('collapsed');
                });
            }
        });
    }

    // Initialize collapsible sections
    makeCollapsible();


    // ========================================
    // 4. INTERACTIVE FEATURE CARDS
    // ========================================
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle scale effect on click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // Add ripple effect
        card.addEventListener('mousedown', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) {
                existingRipple.remove();
            }

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });


    // ========================================
    // 5. SMOOTH SCROLL TO SECTIONS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ========================================
    // 6. NAVBAR SCROLL EFFECT
    // ========================================
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });


    // ========================================
    // 7. IMAGE GALLERY/CAROUSEL (Placeholder)
    // ========================================
    function initGallery() {
        const gallery = document.querySelector('.image-gallery');
        if (!gallery) return;

        const images = gallery.querySelectorAll('.gallery-item');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        // Add navigation buttons if needed
        const prevBtn = gallery.querySelector('.gallery-prev');
        const nextBtn = gallery.querySelector('.gallery-next');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            });
        }

        // Auto-play
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 5000);
    }

    initGallery();


    // ========================================
    // 8. LOADING ANIMATIONS
    // ========================================
    // Add a class to body when page is fully loaded
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });


    // ========================================
    // 9. DROPDOWN ACCESSIBILITY
    // ========================================
    // Ensure dropdowns work on touch devices
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (!link || !menu) return;

        // On touch devices, first tap opens dropdown, second tap follows link
        let touched = false;
        link.addEventListener('touchstart', function(e) {
            if (!touched) {
                e.preventDefault();
                touched = true;
                dropdown.classList.add('open');

                setTimeout(() => {
                    touched = false;
                    dropdown.classList.remove('open');
                }, 3000);
            }
        });
    });


    // ========================================
    // 10. DYNAMIC FORM INTERACTIONS (if forms are added)
    // ========================================
    document.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

});


// ========================================
// CSS for Ripple Effect (added dynamically)
// ========================================
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .feature-card {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 117, 24, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    .dropdown.open .dropdown-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;
document.head.appendChild(rippleStyles);
