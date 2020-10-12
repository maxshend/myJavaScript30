function handleUpdate() {
  const suffix = this.dataset.sizing || ''

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.controls input').forEach(input => {
    input.addEventListener('change', handleUpdate)
    input.addEventListener('mousemove', handleUpdate)
  })
})
