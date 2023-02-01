let myBtn = document.getElementById('add-btn')
myBtn.addEventListener('click', addItem)

let countTask = 0 

function addItem(data) {
  let myInput = document.getElementById('do-it')
  let myList = document.getElementById('todo-list')

  if (myInput.value !== '') {
    countTask = countTask +1;
    let newItem = document.createElement('li')
    let newBlock = 
    `<input onclick="finishTask(${countTask})" class="form-check-input me-1"  type="checkbox" value="" id="ch-${countTask}">
    <label id="${countTask}" class="form-check-label stretched-link" for="ch-${countTask}">${myInput.value}</label>

    <div style="z-index:1000" class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary btn-sm delete">Удалить</button>
  <button type="button" class="btn btn-outline-primary btn-sm delete">Изменить</button>
</div>`
    newItem.innerHTML = newBlock
    newItem.classList.add('list-group-item')
    myList.appendChild(newItem)
    myInput.value = '';
  }
}

document.querySelector('ul').onclick = function(e) {
  const btn = e.target.closest('.delete');
  if (!btn) {
    return;
  }

  btn.parentElement.remove();
}

function finishTask(lableId) {
let elem = document.getElementById(lableId)
if(elem.classList.contains ('item-completed')){

elem.classList.remove ('item-completed')} else {
  elem.classList.add ('item-completed')
}}

let allbrow = document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    addItem()
  }
})

//var list = document.getElementById('todo list')
//text.innerHTML = ""

//var button = document.getElementById('btn-del')
//button.parentElement.parentElement.parentNode.removeChild(button.parentElement.parentElement)
