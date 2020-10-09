function playSound(event) {
  let audio = document.querySelector(`audio[data-key=${event.code}]`)
  let key = document.querySelector(`div[data-key=${event.code}]`)

  if (audio) {
    audio.currentTime = 0
    audio.play()
  }

  if (key) {
    key.classList.add("playing")
  }
}

function removePlaying(event) {
  let key = document.querySelector(`div[data-key=${event.code}]`)

  if (key) {
    key.classList.remove("playing")
  }
}

window.addEventListener("keydown", playSound)
window.addEventListener("keyup", removePlaying)
