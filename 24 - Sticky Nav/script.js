document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('#main')
  const topNav = nav.offsetTop

  function fixNav() {
    if (window.scrollY >= topNav) {
      document.body.style.paddingTop = `${nav.offsetHeight}px`
      document.body.classList.add('fixed-nav')
    } else {
      document.body.classList.remove('fixed-nav')
      document.body.style.paddingTop = 0
    }
  }

  window.addEventListener('scroll', fixNav)
})