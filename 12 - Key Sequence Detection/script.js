document.addEventListener('DOMContentLoaded', () => {
  var script  = document.createElement('script')
  script.src  = 'https://www.cornify.com/js/cornify.js'
  script.type = 'text/javascript'
  script.defer = true
  document.getElementsByTagName('head').item(0).appendChild(script)

  let pressed = []
  const secretKey = 'wesbos'

  window.addEventListener('keyup', event => {
    pressed.push(event.key)
    pressed = pressed.splice(-secretKey.length)

    if (pressed.join('') === secretKey) {
      cornify_add()
    }
  })
})
