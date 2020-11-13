document.addEventListener('DOMContentLoaded', () => {
  window.SpeechRecognition ||= window.webkitSpeechRecognition

  const recognition = new SpeechRecognition()
  recognition.interimResults = true

  const words = document.querySelector('.words')
  let p = document.createElement('p')
  words.appendChild(p)

  recognition.addEventListener('result', event => {
    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript).join('')
    p.textContent = transcript

    if (event.results[0].isFinal) {
      p = document.createElement('p')
      words.appendChild(p)
    }
  })

  recognition.addEventListener('end', recognition.start)
  recognition.start()
})
