document.addEventListener('DOMContentLoaded', () => {
  const timeNodes = [...document.querySelectorAll('[data-time]')]

  const seconds = timeNodes.reduce((sum, node) => {
    const [mins, secs] = node.dataset.time.split(':').map(parseFloat)

    return sum + (mins * 60 + secs)
  }, 0)

  const hours = Math.floor(seconds / 3600)
  let secondsLeft = seconds % 3600

  const minutes = Math.floor(secondsLeft / 60)
  secondsLeft %= 60
  
  console.log(hours, minutes, secondsLeft)
})
