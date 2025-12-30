document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskDescription = taskInput.value;

    buildToDo(taskDescription);

    form.reset();
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  }
});
