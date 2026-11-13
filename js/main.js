(function () {
  // 모바일 메뉴
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // 시안 배너 닫기
  document.getElementById('draftClose').addEventListener('click', function () {
    document.getElementById('draftBanner').remove();
  });

  // 연도
  document.getElementById('year').textContent = new Date().getFullYear();

  // 스크롤 등장 애니메이션
  var targets = document.querySelectorAll('.card, .step, .plan, .stat, .product, .split > *, .about-text');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }
})();
