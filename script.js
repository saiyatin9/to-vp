// Highlight current page in the navbar based on file name
(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.toLowerCase() === path) a.classList.add('active');
    if (path === '' && href.toLowerCase() === 'index.html') a.classList.add('active');
  });

  // Keyboard prev/next: Alt + ← / Alt + →
  const prev = document.querySelector('.pager a[data-prev]');
  const next = document.querySelector('.pager a[data-next]');
  window.addEventListener('keydown', (e) => {
    if (!e.altKey) return;
    if (e.key === 'ArrowLeft' && prev) prev.click();
    if (e.key === 'ArrowRight' && next) next.click();
  });
})();
