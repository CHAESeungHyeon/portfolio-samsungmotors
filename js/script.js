document.addEventListener('DOMContentLoaded', () => {

  const bannerImgNew = document.getElementById('banner-img-new');
  const yearEl   = document.getElementById('year-text');
  const logoIcon = document.getElementById('logo-icon');
  const engTxt   = document.getElementById('eng-txt');

  let loopTimer = null; // ← 타이머 참조 저장용

  function countUp(from, to, duration, el) {
    let startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      el.textContent = Math.floor(eased * (to - from) + from) + '년 3월.';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function forwardTransition() {
    console.log('▶ 순방향 시작');
    countUp(1998, 2028, 900, yearEl);
    setTimeout(() => bannerImgNew.classList.add('reveal'), 400);
    setTimeout(() => logoIcon.classList.add('show'), 1400);
    setTimeout(() => engTxt.classList.add('show'), 1800);

    // 기존 타이머 취소 후 새로 등록
    clearTimeout(loopTimer);
    loopTimer = setTimeout(() => reverseTransition(), 4500);
  }

  function reverseTransition() {
    console.log('◀ 역방향 시작');
    engTxt.classList.remove('show');
    setTimeout(() => logoIcon.classList.remove('show'), 300);
    setTimeout(() => bannerImgNew.classList.remove('reveal'), 600);
    setTimeout(() => countUp(2028, 1998, 900, yearEl), 700);

    // 기존 타이머 취소 후 새로 등록
    clearTimeout(loopTimer);
    loopTimer = setTimeout(() => forwardTransition(), 4000);
  }

  forwardTransition();

const hamburger = document.getElementById('hamburger');
const navbar    = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // X 아이콘 전환
  navbar.classList.toggle('open');      // 메뉴 열기/닫기
});

// 메뉴 항목 클릭 시 자동 닫기
document.querySelectorAll('.navbtn1 a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('open');
  });
});
// 배너 관련 요소들의 margin/padding 전부 출력
['#banner-old', '#banner-old .container', '#view-cards', 'main', 'body'].forEach(sel => {
  const el = document.querySelector(sel);
  if (!el) return;
  const s = getComputedStyle(el);
  console.log(`\n[${sel}]`);
  console.log(`margin: ${s.marginTop} ${s.marginRight} ${s.marginBottom} ${s.marginLeft}`);
  console.log(`padding: ${s.paddingTop} ${s.paddingRight} ${s.paddingBottom} ${s.paddingLeft}`);
});
// 콘솔에 붙여넣기
console.log(document.querySelector('header').offsetHeight);
});