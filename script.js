let addButton = document.querySelector('#add-task-button');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');
let totalItems = document.querySelector('#total');
// let taskListChildElements = `<li class="task-list-item">
//                                  <label class="task-list-item-label">
//                                       <input type="checkbox"> <span>[text]</span>
//                                  </label>
//                                  <span class="delete-button" id="deleteButton"></span>
//                              </li>`;

addButton.addEventListener('click', (event) => {
     if (taskInput.value === '') return
     // taskList.innerHTML += taskListChildElements.replace('[text]', taskInput.value);
     changeList (taskInput.value)
     taskInput.value = ''
});

let items = 0;

totalItems.innerHTML = items

function changeList (value) {
     items++

     let li = document.createElement('li')
     li.className = 'task-list-item'

     let label = document.createElement('label')
     label.className = 'task-list-item-label'

     let input = document.createElement('input')
     input.setAttribute('type', 'checkbox')

     let spanInput = document.createElement('span')
     spanInput.className = 'span-input'
     spanInput.textContent = value

     let spanDltBtn = document.createElement('span')
     spanDltBtn.className = 'delete-button'

     taskList.appendChild(li)
     li.appendChild(label)
     li.appendChild(spanDltBtn)
     label.appendChild(input)
     label.appendChild(spanInput)

     spanDltBtn.addEventListener('click', (event) => {
          totalItems.innerHTML = --items
          taskList.removeChild(li)
     })

     totalItems.innerHTML = items

     input && li.addEventListener('click', (event) => {
          li.classList.toggle('li-done')
     })

}
