// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const topnav = document.getElementById('topnav');
navToggle.addEventListener('click', () => {
  topnav.classList.toggle('nav-open');
});

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Portfolio image modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalMeta = document.getElementById('modalMeta');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const title = card.getAttribute('data-title');
    const desc = card.getAttribute('data-desc');
    modalImage.src = img.src;
    modalMeta.textContent = title + " — " + desc;
    modal.classList.add('open');
  });
});

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') modal.classList.remove('open'); });
