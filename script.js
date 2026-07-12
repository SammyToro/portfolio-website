// Count-up animation for hero metrics
const nums = document.querySelectorAll('.metric .num');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateNum(el) {
  const target = parseInt(el.dataset.target, 10);
  if (prefersReduced) {
    el.textContent = target + '%';
    return;
  }
  let current = 0;
  const duration = 900;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    current = Math.floor(progress * target);
    el.textContent = current + '%';
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + '%';
  }
  requestAnimationFrame(step);
}

const tickerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nums.forEach(animateNum);
      tickerObserver.disconnect();
    }
  });
}, { threshold: 0.4 });

const ticker = document.querySelector('.ticker');
if (ticker) tickerObserver.observe(ticker);

// Ledger entry expand/collapse
document.querySelectorAll('.entry-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const entry = btn.closest('.entry');
    const isOpen = entry.classList.contains('open');
    entry.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navlinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('active');
    });
  });
}
