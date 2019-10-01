var navBg = document.getElementById('nav-bg');
var nav = document.getElementsByTagName('NAV');
var i;

function openMenu() {
  navBg.classList.add('nav-open');
  for (i = 0; i < nav.length; i++) {
    nav[i].classList.add('nav-open');
  }
}

function closeMenu() {
  for (i = 0; i < nav.length; i++) {
    nav[i].classList.remove('nav-open');
  }
  navBg.classList.remove('nav-open');
}
navBg.addEventListener('click', closeMenu);
