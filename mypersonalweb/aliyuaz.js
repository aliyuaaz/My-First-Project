// ============================================
// 1. MOBILE HAMBURGER MENU
// ============================================
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
hamburger.addEventListener('click', () => {
nav.classList.toggle('active');
});
}

// Close menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', () => {
nav.classList.remove('active');
});
});

// ============================================
// 2. TYPING ANIMATION
// ============================================
const roles = [
'IT & Customer Service Professional',
'Level 2 Student',
'Diploma in IT Holder',
'Customer Service Expert',
'Tech Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function typeEffect() {
if (!typingElement) return;

const currentRole = roles[roleIndex];

if (isDeleting) {
typingElement.textContent = currentRole.substring(0, charIndex - 1);
charIndex--;
} else {
typingElement.textContent = currentRole.substring(0, charIndex + 1);
charIndex++;
}

if (!isDeleting && charIndex === currentRole.length) {
isDeleting = true;
setTimeout(typeEffect, 2000);
return;
}

if (isDeleting && charIndex === 0) {
isDeleting = false;
roleIndex = (roleIndex + 1) % roles.length;
setTimeout(typeEffect, 500);
return;
}

const speed = isDeleting ? 50 : 100;
setTimeout(typeEffect, speed);
}

// Start typing animation when page loads
if (typingElement) {
typeEffect();
}

// ============================================
// 3. ACTIVE NAV LINK HIGHLIGHT
// ============================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
let current = '';

sections.forEach(section => {
const sectionTop = section.offsetTop - 120;
if (window.pageYOffset >= sectionTop) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${current}`) {
link.classList.add('active');
}
});
});

// ============================================
// 4. CONTACT FORM - WORKING
// ============================================
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (form) {
form.addEventListener('submit', function(e) {
e.preventDefault();

// Get form values
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const subject = document.getElementById('subject').value.trim();
const message = document.getElementById('message').value.trim();

// Validation
if (!name || !email || !message) {
feedback.style.color = '#e94560';
feedback.textContent = '⚠️ Please fill in all required fields.';
return;
}

// Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
feedback.style.color = '#e94560';
feedback.textContent = '⚠️ Please enter a valid email address.';
return;
}

// Success message
feedback.style.color = '#f0a500';
feedback.textContent = `✅ Thanks ${name}! Your message has been sent. I'll get back to you soon.`;

// Clear form
form.reset();

// Hide message after 5 seconds
setTimeout(() => {
feedback.textContent = '';
}, 5000);
});
}

// ============================================
// 5. SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
const target = document.querySelector(this.getAttribute('href'));
if (target) {
e.preventDefault();
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});

// ============================================
// 6. SKILL BARS ANIMATION ON SCROLL
// ============================================
function animateSkillBars() {
const skillBars = document.querySelectorAll('.skill-progress');
const windowHeight = window.innerHeight;

skillBars.forEach(bar => {
const position = bar.getBoundingClientRect().top;
if (position < windowHeight - 100) {
// Store the original width
const width = bar.style.width;
// Reset to 0
bar.style.width = '0%';
// Animate to original width
setTimeout(() => {
bar.style.width = width;
}, 100);
}
});
}

// Run on scroll and page load
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ============================================
// 7. CERTIFICATE IMAGE ZOOM ON HOVER
// ============================================
const certificateImages = document.querySelectorAll('.certificate-image img');

certificateImages.forEach(img => {
img.addEventListener('mouseenter', function() {
this.style.transform = 'scale(1.05)';
this.style.transition = 'transform 0.3s ease';
});

img.addEventListener('mouseleave', function() {
this.style.transform = 'scale(1)';
});
});

// ============================================
// 8. CONSOLE GREETING
// ============================================
console.log('🚀 Welcome to Aliyu Abdullahi Zubairu\'s Portfolio!');
console.log('🎓 Level 2 Student | Diploma in IT');
console.log('💼 Customer Service Professional');
console.log('📧 Contact: aliyu@student.edu');

// ============================================
// 9. PAGE LOAD ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
// Fade in the home section
const home = document.querySelector('#home');
if (home) {
home.style.opacity = '0';
setTimeout(() => {
home.style.transition = 'opacity 1s ease';
home.style.opacity = '1';
}, 100);
}
});

// ============================================
// 10. SCROLL TO TOP BUTTON
// ============================================
// Create a scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.style.cssText = `
position: fixed;
bottom: 30px;
right: 30px;
background: #f0a500;
color: #1e2a3a;
border: none;
border-radius: 50%;
width: 50px;
height: 50px;
font-size: 1.8rem;
cursor: pointer;
box-shadow: 0 4px 15px rgba(240, 165, 0, 0.4);
transition: all 0.3s ease;
opacity: 0;
visibility: hidden;
z-index: 999;
`;

// Add to page
document.body.appendChild(scrollBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
if (window.pageYOffset > 500) {
scrollBtn.style.opacity = '1';
scrollBtn.style.visibility = 'visible';
} else {
scrollBtn.style.opacity = '0';
scrollBtn.style.visibility = 'hidden';
}
});

// Scroll to top when clicked
scrollBtn.addEventListener('click', function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// Hover effect
scrollBtn.addEventListener('mouseenter', function() {
this.style.transform = 'scale(1.1)';
this.style.boxShadow = '0 6px 25px rgba(240, 165, 0, 0.6)';
});

scrollBtn.addEventListener('mouseleave', function() {
this.style.transform = 'scale(1)';
this.style.boxShadow = '0 4px 15px rgba(240, 165, 0, 0.4)';
});

// ============================================
// 11. PROFILE IMAGE ZOOM ON HOVER
// ============================================
const profileImages = document.querySelectorAll('.profile-image, .about-profile-image');

profileImages.forEach(img => {
img.addEventListener('mouseenter', function() {
this.style.transform = 'scale(1.05)';
this.style.transition = 'transform 0.3s ease';
});

img.addEventListener('mouseleave', function() {
this.style.transform = 'scale(1)';
});
});

// ============================================
// 12. SCROLL REVEAL ANIMATION
// ============================================
function revealOnScroll() {
const elements = document.querySelectorAll('.education-card, .experience-card, .skill-category, .certificate-card, .project-card');

const windowHeight = window.innerHeight;

elements.forEach(element => {
const position = element.getBoundingClientRect().top;
if (position < windowHeight - 50) {
element.style.opacity = '1';
element.style.transform = 'translateY(0)';
}
});
}

// Set initial state for reveal elements
document.addEventListener('DOMContentLoaded', function() {
const elements = document.querySelectorAll('.education-card, .experience-card, .skill-category, .certificate-card, .project-card');
elements.forEach(element => {
element.style.opacity = '0';
element.style.transform = 'translateY(30px)';
element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Trigger after a small delay
setTimeout(revealOnScroll, 200);
});

window.addEventListener('scroll', revealOnScroll);

console.log('✅ All JavaScript features loaded successfully!');