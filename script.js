document.addEventListener('DOMContentLoaded', () => {

  /* MENU HAMBÚRGUER (mobile) */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  const closeMenu = () => {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Abrir menu');
  };

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  };

  if (hamburger && nav) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Fecha o menu com a tecla Esc e devolve o foco ao botão
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav && nav.classList.contains('is-open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* SCROLL SUAVE + fecha o menu ao clicar num link */
  document.querySelectorAll('.nav__link, .nav__cta').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        }
      }
      closeMenu();
    });
  });

  // Fecha o menu se a pessoa clicar fora dele (mobile)
  document.addEventListener('click', (event) => {
    const clickedInsideNav = nav.contains(event.target) || hamburger.contains(event.target);
    if (!clickedInsideNav && nav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  /* ANO ATUAL NO RODAPÉ */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});