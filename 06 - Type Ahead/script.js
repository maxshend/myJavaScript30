const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

function findMatches(query, cities) {
  const regexp = new RegExp(query, 'gi')

  return cities.filter(place => {
    return place.city.match(regexp) || place.state.match(regexp)
  })
}

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches(container, cities, query) {
  const regexp = new RegExp(query, 'gi')

  const renderedHTML = cities.map(place => {
    const state = place.state.replace(regexp, `<span class="hl">${query}</span>`)
    const city = place.city.replace(regexp, `<span class="hl">${query}</span>`)

    return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
  }).join('')

  container.innerHTML = renderedHTML
}

document.addEventListener('DOMContentLoaded', () => {
  fetch(endpoint).then(blob => blob.json()).then(data => {
    const cities = data
    const suggestions = document.querySelector('.suggestions')
    const input = document.querySelector('input.search')
  
    if (input && suggestions) {
      input.addEventListener('input', () => {
        const matches = findMatches(input.value, cities)
  
        displayMatches(suggestions, matches, input.value)
      })
    }
  })
})
