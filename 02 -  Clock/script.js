function setDate() {
  const newDate = new Date();
  const secondHand = document.querySelector('div.hand.second-hand')
  const minuteHand = document.querySelector('div.hand.min-hand')
  const hourHand = document.querySelector('div.hand.hour-hand')

  if (secondHand) {
    secondHand.style.transform = `rotate(${90 + newDate.getSeconds() / 60 * 360}deg)`
  }

  if (minuteHand) {
    minuteHand.style.transform = `rotate(${90 + newDate.getMinutes() / 60 * 360}deg)`
  }

  if (hourHand) {
    hourHand.style.transform = `rotate(${90 + newDate.getHours() / 12 * 360}deg)`
  }
}

setInterval(setDate, 1000)
