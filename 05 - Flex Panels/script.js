function toggleOpen() {
  this.classList.toggle('open')
}

function toggleActive(event) {
  if (event.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel')

  panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen)
    panel.addEventListener('transitionend', toggleActive)
  })
})
