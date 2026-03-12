document.addEventListener('DOMContentLoaded', () => {
 // ── 햄버거 메뉴 ──
  const hamburger = document.getElementById('hamburger');
  const navbar    = document.querySelector('.navbar');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('open');
  });

  document.querySelectorAll('.navbtn1 a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navbar.classList.remove('open');
    });
  });
});