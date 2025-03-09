console.log("надеюсь вам понравилась моя работа:)")

document.querySelector('.nav__mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav__mobile').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
});

// Плавный скролл к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;  
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return; 
    
    const navHeight = document.querySelector('.nav').offsetHeight;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});