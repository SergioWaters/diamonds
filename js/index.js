
document
  .querySelectorAll('.card_icon.heart')
  .forEach(i => i.addEventListener(
    'click', (e) => classToggler(e, 'card_icon-checked')
  ));

function classToggler(e, className) {
  e.target.classList.toggle(className)
}