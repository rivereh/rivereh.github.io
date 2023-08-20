const backToTopButton = document.getElementById('back-to-top')
const colorToggle = document.getElementById('color-toggle-input')

// Typing effect with typed.js
const typed = new Typed('.animate', {
  strings: ['coder.', 'gamer.', 'cat lover.'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})

// Make navbar fixed
function stickyNav() {
  const nav = document.querySelector('nav')
  nav.classList.toggle('fixed', window.scrollY > 0)
}

// Button entrance and exit
function scrollDownFunction() {
  if (window.pageYOffset > 100) {
    backToTopButton.style.cursor = 'pointer'
    backToTopButton.style.opacity = 1
  } else {
    backToTopButton.style.opacity = 0
    backToTopButton.style.cursor = 'default'
  }
}

// Back to top button
function backToTop() {
  window.scrollTo(0, 0)
}

window.addEventListener('scroll', stickyNav)
window.addEventListener('scroll', scrollDownFunction)
backToTopButton.addEventListener('click', backToTop)
