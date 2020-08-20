var navMain = document.querySelector('.main-nav');
var navButtonOpen = document.querySelector('.main-nav__burger-button');
var navButtonClose = document.querySelector('.main-nav__close-button');


navButtonOpen.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav_closed')) {
    navMain.classList.remove('main-nav_closed');
  } else {
    navMain.classList.add('main-nav--closed');
  }
});

navButtonClose.addEventListener('click', function() {
  navMain.classList.add('main-nav_closed');
});
