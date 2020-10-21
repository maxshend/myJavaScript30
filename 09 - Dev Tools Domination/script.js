function makeGreen() {
  this.style.color = '#BADA55';
  this.style.fontSize = '50px';
}

document.addEventListener('DOMContentLoaded', () => {
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]
  const p = document.querySelector('p')

  if (p) {
    p.addEventListener('click', makeGreen)
  }

  // Regular
  console.log('Regular Text')

  // Interpolated
  console.log('Test interpolation: %s', 'Hello, World!')

  // Styled
  console.log('%cStyle text', 'font-weight: bold; color: blue')

  // warning!
  console.warn('Warning message!')

  // Error :|
  console.error('Error message!')

  // Info
  console.info('Info message')

  // Testing
  console.assert(1 === 2, 'Wrong!')

  // clearing
  // console.clear()

  // Viewing DOM Elements
  console.dir(p)

  // Grouping together
  dogs.forEach(dog => {
    console.group(dog.name)
    console.log(`Age: ${dog.age}`)
    console.groupEnd(dog.name)
  })

  // Counting
  console.count('Foo')
  console.count('Bar')
  console.count('Foo')

  // Table
  console.table(dogs)

  // Timing
  console.time('Fetching Data')
  fetch('https://api.github.com/users/maxshend')
    .then(data => data.json())
    .then(data => {
      console.timeEnd('Fetching Data')
    })
})
