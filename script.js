let tasks = [];

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task) {
    tasks.push(task);
    displayTasks();
    input.value = "";
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => deleteTask(index);
    li.appendChild(btn);
    list.appendChild(li);
  });
}
