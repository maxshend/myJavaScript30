const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
]
const sortedBands = bands.sort((a, b) => {
  const modA = withoutArticles(a)
  const modB = withoutArticles(b)

  if (modA > modB) {
    return 1
  } else if (modB > modA) {
    return -1
  }

  return 0
})

function withoutArticles(str) {
  return str.replace(/^(a|an|the)\s/i, '').trim()
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#bands').innerHTML = sortedBands.map(band => {
    return `<li>${band}</li>`
  }).join('')
})
