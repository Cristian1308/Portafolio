// Typing animation text
const roles = [
  "Junior Developer",
  "Platform Expert",
  "HubSpot Specialist",
  "Automation",
  "Marketing Tech Expert"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;

function typeText() {
  const currentRole = roles[roleIndex];
  const typedTextSpan = document.querySelector(".typed-text");
  
  if (isDeleting) {
    typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = erasingDelay;
  } else {
    typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 200;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    typingDelay = newTextDelay;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingDelay = 500;
  }

  setTimeout(typeText, typingDelay);
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(typeText, newTextDelay);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.skill-card, .project-card').forEach((element) => {
  observer.observe(element);
});