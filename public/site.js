let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

function addItem(data) {
  let myInput = document.getElementById('do-it')
  let myList = document.getElementById('todo-list')

  if (myInput.value !== '') {
    let newItem = document.createElement('li')
    newItem.innerText = myInput.value
    myList.appendChild(newItem)
    myInput.value = '';
  }
}

let allbrow = document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    addItem()
  }
})