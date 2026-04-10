(() => {
  const slides   = document.querySelectorAll('#topBanner .slide');
  const btnPrev  = document.querySelector('.btn-prev');
  const btnPause = document.querySelector('.btn-pause');
  const btnNext  = document.querySelector('.btn-next');

  if (!slides.length) return;

  const INTERVAL = 4500;
  let current  = 0;
  let isPaused = false;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  btnPrev.addEventListener('click', () => {
    goTo(current - 1);
    if (!isPaused) startTimer();
  });

  btnNext.addEventListener('click', () => {
    goTo(current + 1);
    if (!isPaused) startTimer();
  });

  btnPause.addEventListener('click', () => {
    isPaused = !isPaused;
    const icon = btnPause.querySelector('i');
    if (isPaused) {
      clearInterval(timer);
      icon.className = 'fa-solid fa-play';
    } else {
      startTimer();
      icon.className = 'fa-solid fa-pause';
    }
  });

  startTimer();
})();
