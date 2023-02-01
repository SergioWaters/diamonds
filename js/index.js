document
  .querySelectorAll('.card_icon.heart')
  .forEach(i => i.addEventListener(
    'click', (e) => classToggler(e.target, 'card_icon-checked')
  ));

function classToggler(elem, className) {
  elem.classList.toggle(className)
}

document
  .querySelectorAll('.dropdown')
  .forEach(i => i.addEventListener(
    'click', dropdownClickHandler));

function dropdownClickHandler(e) {
  const t = e.target;
  if (t.className === 'dropdown-selected') {
    const icon = document.createElement('i');
    t.parentNode.querySelectorAll('li')
      .forEach(i => {
        i.querySelector('i')?.remove();
        if (i.textContent === t.textContent) {
          i.appendChild(icon)
        }
      })
  };
  if (t.className === 'dropdown-list-item') {
    const text = t.textContent;
    const items = t.parentNode.parentNode.childNodes; items[1].textContent = text;
  }
}