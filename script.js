function toggleSlideMenu() {
  const slideMenu = document.querySelector('.slide-menu');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;
  
  slideMenu.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('menu-open');
}

function closeSlideMenu() {
  const slideMenu = document.querySelector('.slide-menu');
  const overlay = document.querySelector('.menu-overlay');
  const body = document.body;
  
  slideMenu.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('menu-open');
}

// Zamykanie menu klawiszem Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSlideMenu();
  }
});
