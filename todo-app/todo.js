
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');


function addTask(event) {
  event.preventDefault(); 

  const task = input.value.trim(); 

  if (task !== '') {
    const listItem = document.createElement('li'); 
    listItem.className = 'todo-item';
    listItem.textContent = task;

    const deleteButton = document.createElement('button'); 
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    listItem.appendChild(deleteButton); 
    list.appendChild(listItem);

    input.value = ''; 
  }
}

function deleteTask(event) {
  const listItem = event.target.parentElement; 
  list.removeChild(listItem); 
}

form.addEventListener('submit', addTask);
