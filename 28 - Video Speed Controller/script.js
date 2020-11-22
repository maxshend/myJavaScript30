document.addEventListener('DOMContentLoaded', () => {
  const speed = document.querySelector('.speed')
  const bar = speed.querySelector('.speed-bar')
  const video = document.querySelector('.flex')

  const min  = 0.4
  const max = 4

  speed.addEventListener('mousemove', (event) => {
    const y = event.pageY - speed.offsetTop
    const percent = y / speed.offsetHeight
    const height = Math.round(100 * percent) + '%'
    const playbackRate = percent * (max - min) + min

    bar.style.height = height
    bar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate
  })
})
