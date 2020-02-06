const $ul = document.querySelector("ul")

fetch("http://localhost:4000/items")
  .then(response => response.json())
  .then(({items}) => {
    items.map(item => {
      const $li = document.createElement("li")
      $li.textContent = item.label
      return $li
    }).forEach($li => {
      $ul.append($li)
    })
  })
