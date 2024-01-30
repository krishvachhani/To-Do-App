const input = document.querySelector("#inputField");
const btn = document.querySelector("#submitTodo");
const ul = document.querySelector("#todoList");

taskDone = (e) => {
  const selectedList = e.target.parentElement;
  const todoText = selectedList.querySelector('p');
  todoText.classList.toggle("taskDone");
}

editTodo = (e) => {
  const selectedList = e.target.parentElement.parentElement;
  const todoText = selectedList.querySelector('p');
  const newTodoText = prompt("Edit To-Do Task", todoText.innerText);
  if (newTodoText !== null && newTodoText !== "") {
    todoText.innerText = newTodoText;
    alert("Task Edited Successfully!");
  }
}

deleteTodo = (e) => {
  const selectedList = e.target.parentElement.parentElement;
  const todoText = selectedList.querySelector('p');
  if (confirm(`Do you want to delete this task ?\n${todoText.innerText}`)) {
    selectedList.remove();
    alert("Task Deleted Successfully!");
  }
}

btn.addEventListener("click", () => {
  const taskValue = input.value.trim();

  if (taskValue !== "") {
    const newList = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.classList.add("taskDoneCheckBox");

    const edit = document.createElement("button");
    edit.classList.add("editBtn");
    edit.innerText = "Edit";

    const dlt = document.createElement("button");
    dlt.classList.add("deleteBtn");
    dlt.innerText = 'Delete';

    const task = document.createElement("p");
    task.innerText = taskValue;

    const action = document.createElement("div");
    action.classList.add("actions")
    action.appendChild(edit);
    action.appendChild(dlt);

    newList.appendChild(checkBox);
    newList.appendChild(task);
    newList.appendChild(action);

    ul.appendChild(newList);

    input.value = '';
  } else {
    alert("EMPTY TASKS CANNOT BE ADDED");
  }
});

ul.addEventListener("click", e => {
  const selectedUl = e.target.parentElement;
  const clickedCheckBox = selectedUl.querySelector(".taskDoneCheckBox");
  const clickedEditBtn = selectedUl.querySelector(".editBtn")
  const clickedDeleteBtn = selectedUl.querySelector(".deleteBtn")

  if (e.target === clickedCheckBox) {
    taskDone(e);
  }
  if (e.target === clickedEditBtn) {
    editTodo(e);
  }
  if (e.target === clickedDeleteBtn) {
    deleteTodo(e);
  }
});
