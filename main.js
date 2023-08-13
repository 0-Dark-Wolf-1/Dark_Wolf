const menuBtn = docutent.querySelector('.menu-header__btn');
const menu = docutent.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});