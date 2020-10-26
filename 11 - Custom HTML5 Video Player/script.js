document.addEventListener('DOMContentLoaded', () => {
  const player = document.querySelector('.player')
  const video = player.querySelector('video')
  const playBtn = player.querySelector('.player__button')
  const skipBtns = player.querySelectorAll('.player__button[data-skip]')
  const ranges = player.querySelectorAll('input[type="range"]')
  const progress = player.querySelector('.progress')
  const progressBar = player.querySelector('.progress__filled')
  const fullScreen = player.querySelector('.fullscreen')

  let mouseDown = false

  function togglePlay() {
    video.paused ? video.play() : video.pause()
  }

  function updatePlayBtn() {
    playBtn.textContent = video.paused ? '❚ ❚' : '►'
  }

  function skip() {
    video.currentTime += parseFloat(this.dataset.skip)
  }

  function changeRange() {
    video[this.name] = this.value
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
  }

  function scrub(event) {
    video.currentTime = video.duration * event.offsetX / progress.offsetWidth
  }

  function toggleFullScreen() {
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen()
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen()
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen()
    }
  }

  playBtn.addEventListener('click', togglePlay)
  video.addEventListener('click', togglePlay)
  video.addEventListener('play', updatePlayBtn)
  video.addEventListener('pause', updatePlayBtn)
  video.addEventListener('timeupdate', handleProgress)
  skipBtns.forEach(skipBtn => {
    skipBtn.addEventListener('click', skip)
  })
  ranges.forEach(range => {
    range.addEventListener('change', changeRange)
  })
  progress.addEventListener('click', scrub)
  progress.addEventListener('mousemove', event => mouseDown && scrub(event))
  progress.addEventListener('mousedown', () => mouseDown = true)
  progress.addEventListener('mouseup', () => mouseDown = false)
  fullScreen.addEventListener('click', toggleFullScreen)
})
