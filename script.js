// script.js

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Header animation on load
window.addEventListener('load', () => {
  const header = document.querySelector('header');
  header.style.opacity = 0;
  header.style.transition = 'opacity 1.2s ease';
  setTimeout(() => {
    header.style.opacity = 1;
  }, 300);
});

// Add dynamic tagline below header title
window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const tagline = document.createElement('p');
  tagline.textContent = '🌍 Empowering a financially smart generation';
  tagline.style.fontSize = '1.2rem';
  tagline.style.marginTop = '0.5rem';
  tagline.style.fontWeight = '600';
  tagline.style.color = '#f0f8ff';
  header.appendChild(tagline);
});

// Simple testimonials carousel (auto rotate)
const testimonials = document.querySelectorAll('.review');
let current = 0;

function rotateTestimonials() {
  testimonials.forEach((rev, index) => {
    rev.style.display = index === current ? 'block' : 'none';
  });
  current = (current + 1) % testimonials.length;
}

if (testimonials.length > 1) {
  rotateTestimonials();
  setInterval(rotateTestimonials, 5000);
}

// Flashing call-to-action on contact
const contactSection = document.querySelector('#contact');
if (contactSection) {
  const contactHeader = contactSection.querySelector('h2');
  contactHeader.style.animation = 'flash 1.2s infinite alternate';
}

// Add keyframes for animation
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes flash {
  from { color: #0072bc; }
  to { color: #28a745; }
}
</style>
`);
