let lastChecked

function multipleSelect(event) {
  if (this.checked && event.shiftKey) {
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
    let between = false

    checkboxes.forEach(checkbox => {
      if (this === checkbox || checkbox === lastChecked) {
        between = !between
      }

      if (between) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', multipleSelect))
})
