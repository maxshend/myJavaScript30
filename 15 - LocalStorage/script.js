document.addEventListener('DOMContentLoaded', () => {
  const addItems = document.querySelector('.add-items')
  const itemsList = document.querySelector('.plates')
  const items = JSON.parse(localStorage.getItem('items')) || []
  
  function addItem(event) {
    event.preventDefault()

    const text = this.querySelector('[name="item"]').value
    const item = {
      text,
      done: false
    }

    items.push(item)
    populateList(items, itemsList)

    localStorage.setItem('items', JSON.stringify(items))

    this.reset()
  }

  function populateList(elements = [], list) {
    list.innerHTML = elements.map((element, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${element.done ? "checked" : ""}/>
          <label for="item${i}">${element.text}</label>
        </li>
      `
    }).join('')
  }

  function toggleDone(event) {
    if (!event.target.matches('input[type="checkbox"]')) return

    const element = event.target
    const index = element.dataset.index
    items[index].done = !items[index].done

    localStorage.setItem('items', JSON.stringify(items))
  }

  addItems.addEventListener('submit', addItem)
  itemsList.addEventListener('click', toggleDone)

  populateList(items, itemsList)
})
