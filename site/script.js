/* ═══════════════════════════════════════════════
   CADIFOR — Interactive Script
   Scroll reveals, counters, filters, particles
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ═══════ SCROLL REVEAL ═══════
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Trigger bar fill for char cards
        if (entry.target.classList.contains('char-card')) {
          const bar = entry.target.querySelector('.char-card__bar-fill');
          if (bar) {
            bar.style.width = bar.style.getPropertyValue('--width');
          }
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ═══════ NAV SCROLL BEHAVIOR ═══════
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => sectionObserver.observe(s));

  // ═══════ MOBILE MENU ═══════
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ═══════ COUNTER ANIMATION ═══════
  const counters = document.querySelectorAll('.hero__stat-number');
  let countersAnimated = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.count);
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.floor(eased * target);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target;
            }
          }

          requestAnimationFrame(updateCounter);
        });
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // ═══════ CHARACTER CARD EXPAND ═══════
  document.querySelectorAll('.char-card__expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;
      if (details) {
        details.classList.toggle('open');
        btn.textContent = details.classList.contains('open') ? '−' : '+';
      }
    });
  });

  // ═══════ FILTERS ═══════
  const filterBtns = document.querySelectorAll('.filter');
  const charCards = document.querySelectorAll('.char-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      charCards.forEach(card => {
        if (filter === 'all' || card.dataset.era === filter) {
          card.style.display = '';
          // Re-trigger reveal
          setTimeout(() => card.classList.add('revealed'), 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ═══════ PARTICLES ═══════
  const particleContainer = document.getElementById('particles');
  if (particleContainer) {
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      const isCyan = Math.random() > 0.6;

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${isCyan ? 'rgba(0, 212, 255, 0.4)' : 'rgba(123, 104, 238, 0.3)'};
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: particle-float ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
      `;

      particleContainer.appendChild(particle);
    }

    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particle-float {
        0%, 100% {
          transform: translate(0, 0) scale(1);
          opacity: 0.3;
        }
        25% {
          transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.2);
          opacity: 0.6;
        }
        50% {
          transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 80 - 40}px) scale(0.8);
          opacity: 0.4;
        }
        75% {
          transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.1);
          opacity: 0.5;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // ═══════ SMOOTH SCROLL ═══════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = nav.offsetHeight + 20;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
