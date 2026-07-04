function quickExit() {
  window.location.replace('https://www.google.com');
}

const exitTop = document.getElementById('exitBtnTop');
const exitFooter = document.getElementById('exitBtnFooter');
if (exitTop) exitTop.addEventListener('click', quickExit);
if (exitFooter) exitFooter.addEventListener('click', quickExit);

let escCount = 0;
let escTimer = null;

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    escCount += 1;
    clearTimeout(escTimer);
    escTimer = setTimeout(function () {
      escCount = 0;
    }, 1000);
    if (escCount >= 3) quickExit();
  }
});

const anonToggle = document.getElementById('anonToggle');
const nameFields = document.getElementById('nameFields');

function syncAnon() {
  if (nameFields && anonToggle) {
    nameFields.style.display = anonToggle.checked ? 'none' : 'block';
  }
}

if (anonToggle) {
  anonToggle.addEventListener('change', syncAnon);
}
syncAnon();

const form = document.getElementById('reportForm');
const confirmPanel = document.getElementById('confirmPanel');
const refCode = document.getElementById('refCode');
const resetButton = document.getElementById('resetForm');

if (form && confirmPanel && refCode) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const code = 'REF-' + Math.floor(1000 + Math.random() * 9000);
    refCode.textContent = code;
    form.style.display = 'none';
    confirmPanel.classList.add('show');
    confirmPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

if (resetButton) {
  resetButton.addEventListener('click', function () {
    if (form) {
      form.reset();
    }
    syncAnon();
    if (form) {
      form.style.display = 'block';
    }
    if (confirmPanel) {
      confirmPanel.classList.remove('show');
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('loaded');

  const sections = document.querySelectorAll('main section, footer');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  sections.forEach(function (section) {
    section.classList.add('reveal');
    observer.observe(section);
  });

  const links = document.querySelectorAll('header nav a');
  const setActiveLink = function () {
    let currentId = '';
    document.querySelectorAll('section[id]').forEach(function (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        currentId = section.id;
      }
    });
    links.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
});
