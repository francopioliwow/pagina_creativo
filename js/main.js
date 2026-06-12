const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// Carrusel de tarjetas superpuestas del hero, inspirado en Wodes.
const heroCardStage = document.getElementById('heroCardStage');
const stackCards = heroCardStage ? Array.from(heroCardStage.querySelectorAll('.stack-card')) : [];
const cardStates = ['is-active', 'is-next', 'is-far-right', 'is-far-left', 'is-prev'];
let activeCard = 0;
let heroCarouselTimer = null;
let heroCarouselPaused = false;

function paintHeroCards() {
  if (!stackCards.length) return;

  stackCards.forEach((card, index) => {
    card.classList.remove(...cardStates);
    const distance = (index - activeCard + stackCards.length) % stackCards.length;
    card.classList.add(cardStates[distance] || 'is-far-right');
  });
}

function nextHeroCard() {
  if (heroCarouselPaused) return;
  activeCard = (activeCard + 1) % stackCards.length;
  paintHeroCards();
}

if (stackCards.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  paintHeroCards();
  heroCarouselTimer = setInterval(nextHeroCard, 2300);

  heroCardStage.addEventListener('mouseenter', () => { heroCarouselPaused = true; });
  heroCardStage.addEventListener('mouseleave', () => { heroCarouselPaused = false; });
}
