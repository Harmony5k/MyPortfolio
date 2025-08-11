// Basic interactivity: mobile menu toggle, set year, close menu on link click
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const navAnchors = navLinks.querySelectorAll('a');

  // toggle mobile nav
  menuBtn.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
  });

  // close menu when clicking a nav link (mobile)
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // set footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Optional: simple fade-in on scroll for sections
  const sections = document.querySelectorAll('section');
  const showOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(showOnScroll, { threshodocument.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  const navAnchors = navLinks.querySelectorAll('a');

  // toggle mobile nav
  menuBtn.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
  });

  // close menu when clicking a nav link
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // set footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll animations
  const animatedElements = document.querySelectorAll('.fade-up, .fade-in');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));
});
ld: 0.15 });
  sections.forEach(s => observer.observe(s));
});

