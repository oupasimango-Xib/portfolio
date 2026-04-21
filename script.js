// script.js
document.addEventListener('DOMContentLoaded', () => {

  // Smooth Scrolling for navigation links
  const links = document.querySelectorAll('.nav-links a');
  
  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 80;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  // Intersection Observer for fade-in animations on scroll
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // Trigger observer for hero section immediately if visible on load
  setTimeout(() => {
    const hero = document.getElementById('hero');
    if(hero) hero.classList.add('visible');
  }, 100);
});
