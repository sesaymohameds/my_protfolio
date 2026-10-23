/* ========================================
   MSS Portfolio - Main JavaScript
   ======================================== */

/* ========== SHOW / HIDE MENU ========== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(link => link.addEventListener('click', linkAction));

/* ========== CHANGE HEADER BACKGROUND ON SCROLL ========== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/* ========== ACTIVE LINK ON SCROLL ========== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* ========== SHOW SCROLL UP BUTTON ========== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 400) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

/* ========== CURRENT YEAR IN FOOTER ========== */
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ========== CONTACT FORM HANDLING ========== */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Since this is a static site, we use mailto as a fallback
        // This will open the user's email client with the message pre-filled
        const mailtoLink = `mailto:sundaymohamedsesay@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;

        // Show success message
        showMessage('Opening your email client to send the message...', 'success');

        // Open mailto
        window.location.href = mailtoLink;

        // Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
            contactMessage.textContent = '';
            contactMessage.className = 'contact__message';
        }, 3000);
    });
}

function showMessage(text, type) {
    contactMessage.textContent = text;
    contactMessage.className = `contact__message ${type}`;
}

/* ========== SMOOTH SCROLL FOR ALL INTERNAL LINKS ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ========== PLACEHOLDER NOTICE ========== */
// This helps you remember to update important links later
console.log('%c MSS Portfolio loaded successfully!', 'color: #3b82f6; font-weight: bold; font-size: 14px;');
console.log('%c Remember to update:', 'color: #94a3b8;');
console.log('1. Your profile photo (assets/images/profile-placeholder.png)');
console.log('2. Your CV/Resume (assets/documents/resume.pdf)');
console.log('3. GitHub links (search for id="github-link")');
console.log('4. LinkedIn links (search for id="linkedin-link")');
console.log('5. Project links and screenshots');
