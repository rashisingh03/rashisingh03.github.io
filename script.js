// ===== Mobile menu toggle =====
const hamburger = document.getElementById('hamburger');
const tabs = document.getElementById('tabs');

hamburger.addEventListener('click', () => {
  tabs.classList.toggle('open');
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.classList.remove('open');
  });
});

// ===== Active tab highlight on scroll =====
const sections = document.querySelectorAll('section[id]');
const tabLinks = document.querySelectorAll('.tab');

const highlightObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');

      tabLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${id}`
        );
      });
    }
  });
}, {
  rootMargin: '-40% 0px -50% 0px',
  threshold: 0
});

sections.forEach(section => {
  highlightObserver.observe(section);
});

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

sections.forEach(section => {
  revealObserver.observe(section);
});

// ===== Footer year =====
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
