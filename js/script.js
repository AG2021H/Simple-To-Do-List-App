document.addEventListener('DOMContentLoaded', loadTasks);

function addItem() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text === "") return;

  addToList(text);
  saveTask(text);
  input.value = "";
}

function addToList(text) {
  const list = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✕';
  removeBtn.className = 'remove-btn';
  removeBtn.onclick = function () {
    li.remove();
    deleteTask(text);
  };

  li.appendChild(removeBtn);
  list.appendChild(li);
}

// Local Storage
function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addToList(task));
}
