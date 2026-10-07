document.addEventListener('DOMContentLoaded', () => {

  /* CONFIGURAÇÃO DO WHATSAPP
     Troque o número (formato: código do país + DDD + número, só dígitos)*/
  const WHATSAPP_NUMBER = '5582999201913';
  const WHATSAPP_MESSAGE = 'Vim através do Instagram, quero marcar meu horário. Qual horário está disponível?';

  const whatsappBtn = document.getElementById('whatsapp-btn');
  if (whatsappBtn) {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }

  const whatsappLink = document.getElementById('whatsapp-link');
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  }

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

  /* SCROLL SUAVE + fecha o menu ao clicar num link */
  document.querySelectorAll('.nav__link, .nav__cta').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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