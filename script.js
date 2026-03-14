// אנימציה לדוגמאות - הוספת צבעים משתנים
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.background = '#ff6f61';
    card.style.color = '#fff';
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '#3b3b5f';
    card.style.color = '#fff';
  });
});
