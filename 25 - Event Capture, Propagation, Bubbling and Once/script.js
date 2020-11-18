document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('div')
  const btn = document.querySelector('button')

  function logText(event) {
    console.log(this.classList.value)
    event.stopPropagation()
  }

  divs.forEach(div => div.addEventListener('click', logText, { capture: false }))
  btn.addEventListener('click', () => { console.log('Clicked!') }, { once: true })
})
