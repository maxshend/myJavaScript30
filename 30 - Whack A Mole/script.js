document.addEventListener('DOMContentLoaded', () => {
  const holes = document.querySelectorAll('.hole')
  const scoreBoard = document.querySelector('.score')
  const moles = document.querySelectorAll('.mole')
  const startBtn = document.querySelector('#start')
  let score = 0
  let lastHole
  let timeUp

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
  }

  function randomHole(holes) {
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    if (hole === lastHole) {
      return randomHole(holes)
    }
    lastHole = hole

    return hole
  }

  function peep() {
    const time = randomTime(200, 1000)
    const hole = randomHole(holes)

    hole.classList.add('up')

    setTimeout(() => {
      hole.classList.remove('up')
      if (!timeUp) {
        peep()
      }
    }, time)
  }

  function startGame() {
    scoreBoard.textContent = 0
    timeUp = false
    score = 0
    setInterval(() => {
      timeUp = true
    }, 10000)

    peep()
  }

  function bonk(event) {
    if (event.isTrusted) {
      this.classList.remove('up')
      score++
      scoreBoard.textContent = score
    }
  }

  startBtn.addEventListener('click', startGame)
  moles.forEach(mole => mole.addEventListener('click', bonk))
})
