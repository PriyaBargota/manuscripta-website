// Manuscripta - Dynamic Features
// Enhanced interactivity and animations

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // 0a. RESPONSIVE NAV TOGGLE (hamburger)
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is clicked (mobile UX)
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Reset menu state when resizing past breakpoint
        window.addEventListener('resize', function () {
            if (window.innerWidth > 900) {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ========================================
    // 0b. ANIMATED PENCIL MARKS BACKGROUND
    // ========================================
    function createPencilMarks() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const container = document.createElement('div');
        container.className = 'pencil-marks';
        hero.insertBefore(container, hero.firstChild);

        // Define different pencil stroke paths (handwritten style)
        const strokePaths = [
            'M 10,30 Q 40,10 70,30',  // Curved stroke
            'M 20,20 L 80,20',          // Horizontal line
            'M 30,15 Q 50,40 70,15',    // Wave
            'M 40,10 L 40,50',          // Vertical line
            'M 15,25 Q 30,35 45,25 Q 60,15 75,25', // Double wave
            'M 20,30 C 30,10 50,10 60,30', // Bezier curve
            'M 25,20 L 35,30 L 45,20 L 55,30', // Zigzag
            'M 30,25 Q 50,15 70,25',    // Simple arc
        ];

        // Create 12-15 random pencil marks
        const numMarks = 12 + Math.floor(Math.random() * 4);

        for (let i = 0; i < numMarks; i++) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('pencil-mark');

            // Random size and position
            const size = 80 + Math.random() * 40;
            const left = Math.random() * 95; // Keep within bounds
            const top = Math.random() * 90;

            svg.setAttribute('width', size);
            svg.setAttribute('height', size);
            svg.style.left = left + '%';
            svg.style.top = top + '%';

            // Random rotation for variety
            const rotation = Math.random() * 360;
            svg.style.transform = `rotate(${rotation}deg)`;

            // Create path
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const randomPath = strokePaths[Math.floor(Math.random() * strokePaths.length)];
            path.setAttribute('d', randomPath);

            svg.appendChild(path);
            container.appendChild(svg);

            // Animate with delay
            const delay = i * 200 + Math.random() * 500; // Stagger the animations
            const duration = 1 + Math.random(); // 1-2 seconds

            setTimeout(() => {
                svg.style.animation = `drawPencil ${duration}s ease-out forwards`;
            }, delay);
        }
    }

    createPencilMarks();

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
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Extract the hash part (e.g., "index.html#timeline" -> "#timeline")
            const hashIndex = href.indexOf('#');
            if (hashIndex === -1 || href === '#') return;

            const hash = href.substring(hashIndex);
            const pageUrl = href.substring(0, hashIndex);

            // Only handle if it's the same page or no page specified
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const targetPage = pageUrl.split('/').pop() || currentPage;

            if (targetPage !== currentPage && pageUrl !== '') return;

            e.preventDefault();
            const target = document.querySelector(hash);

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
    const navContainer = document.querySelector('.nav-container');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (navContainer) {
            if (currentScroll > 100) {
                navContainer.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)';
            } else {
                navContainer.style.boxShadow = '';
            }
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


    // ========================================
    // 11. DOCUMENTATION TOC ACTIVE STATE
    // ========================================
    function updateActiveTocLink() {
        const tocLinks = document.querySelectorAll('.doc-toc a');
        if (tocLinks.length === 0) return;

        const sections = Array.from(tocLinks).map(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                return document.querySelector(href);
            }
            return null;
        }).filter(section => section !== null);

        function updateActive() {
            const scrollPosition = window.scrollY + 150; // Offset for header

            let currentSection = null;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollPosition >= sectionTop) {
                    currentSection = section;
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (currentSection && href === '#' + currentSection.id) {
                    link.classList.add('active');
                }
            });
        }

        // Update on scroll
        window.addEventListener('scroll', updateActive);
        // Initial update
        updateActive();
    }

    updateActiveTocLink();


    // ========================================
    // 12. DOCUMENT SECTIONS & TABLE OF CONTENTS
    // ========================================
    function initDocSections() {
        const docContent = document.querySelector('.doc-content');
        if (!docContent) return;

        // Get all direct-child h2 elements
        const allH2s = Array.from(docContent.querySelectorAll(':scope > h2'));
        if (allH2s.length === 0) return;

        // Collect section data before modifying DOM
        const sectionsData = allH2s.map(function(h2) {
            return { id: h2.id, text: h2.textContent.trim() };
        });

        // Wrap each h2 + following content in a doc-section
        allH2s.forEach(function(h2, index) {
            var section = document.createElement('div');
            section.className = 'doc-section';
            if (index % 2 === 1) {
                section.classList.add('doc-section--alt');
            }

            h2.parentNode.insertBefore(section, h2);
            section.appendChild(h2);

            // Move all following siblings until next h2 or existing doc-section
            while (
                section.nextElementSibling &&
                section.nextElementSibling.tagName !== 'H2' &&
                !section.nextElementSibling.classList.contains('doc-section')
            ) {
                section.appendChild(section.nextElementSibling);
            }
        });

        docContent.classList.add('has-sections');

        // Build Table of Contents dropdown
        var docHeader = docContent.querySelector('.doc-header');
        if (!docHeader || sectionsData.length < 2) return;

        var tocWrapper = document.createElement('div');
        tocWrapper.className = 'toc-wrapper';

        var tocButton = document.createElement('button');
        tocButton.className = 'toc-toggle';
        tocButton.setAttribute('aria-expanded', 'false');
        tocButton.setAttribute('aria-label', 'Table of contents');
        tocButton.innerHTML = [
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">',
            '  <line x1="3" y1="6" x2="21" y2="6"></line>',
            '  <line x1="3" y1="12" x2="15" y2="12"></line>',
            '  <line x1="3" y1="18" x2="18" y2="18"></line>',
            '</svg>',
            '<span>Contents</span>',
            '<svg class="toc-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">',
            '  <polyline points="6 9 12 15 18 9"></polyline>',
            '</svg>'
        ].join('');

        var tocMenu = document.createElement('div');
        tocMenu.className = 'toc-menu';

        var tocList = document.createElement('ol');
        sectionsData.forEach(function(data) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#' + data.id;
            a.textContent = data.text;
            a.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.getElementById(data.id);
                if (target) {
                    var y = target.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
                tocMenu.classList.remove('open');
                tocButton.setAttribute('aria-expanded', 'false');
            });
            li.appendChild(a);
            tocList.appendChild(li);
        });

        tocMenu.appendChild(tocList);
        tocWrapper.appendChild(tocButton);
        tocWrapper.appendChild(tocMenu);
        document.body.appendChild(tocWrapper);

        // Toggle dropdown
        tocButton.addEventListener('click', function(e) {
            e.stopPropagation();
            var isOpen = tocMenu.classList.toggle('open');
            tocButton.setAttribute('aria-expanded', String(isOpen));
        });

        // Close on outside click
        document.addEventListener('click', function(e) {
            if (!tocWrapper.contains(e.target)) {
                tocMenu.classList.remove('open');
                tocButton.setAttribute('aria-expanded', 'false');
            }
        });

        // Highlight active section in TOC on scroll
        var tocLinks = tocList.querySelectorAll('a');
        function updateTocActive() {
            var scrollPos = window.scrollY + 160;
            var activeId = null;
            sectionsData.forEach(function(data) {
                var el = document.getElementById(data.id);
                if (el && el.getBoundingClientRect().top + window.pageYOffset <= scrollPos) {
                    activeId = data.id;
                }
            });
            tocLinks.forEach(function(link) {
                link.classList.toggle('toc-active', link.getAttribute('href') === '#' + activeId);
            });
        }

        window.addEventListener('scroll', updateTocActive, { passive: true });
        updateTocActive();
    }

    initDocSections();

    // ========================================
    // INTERVIEW TABS
    // ========================================
    document.querySelectorAll('.interview-tab-buttons').forEach(function(buttonGroup) {
        buttonGroup.querySelectorAll('.interview-tab-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                const tabId = btn.getAttribute('data-tab');
                const container = btn.closest('.interview-tabs');

                container.querySelectorAll('.interview-tab-btn').forEach(function(b) {
                    b.classList.remove('active');
                });
                container.querySelectorAll('.interview-tab-panel').forEach(function(p) {
                    p.classList.remove('active');
                });

                btn.classList.add('active');
                container.querySelector('#' + tabId).classList.add('active');
            });
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
        background: rgba(45, 90, 61, 0.3);
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
`;
document.head.appendChild(rippleStyles);
