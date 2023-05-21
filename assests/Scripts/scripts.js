//--------------------//
// TOGGLE ICON NAVBAR //
//--------------------//
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
};
//-----------------//
// SCROLL SECTIONS //
//-----------------//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
  //sticky header
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  // remove toogle when click on navbar links
  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
};
//--------------------//
// HERO TYPING EFFECT //
//--------------------//
const typed = new Typed('.typed', {
  strings: ['Cédric', 'UX/UI Designer', 'Développeur Web'],
  stringsElement: null,

  loop: true,
  typeSpeed: 75,
  backSpeed: 50,
  backDelay: 2000,
});
