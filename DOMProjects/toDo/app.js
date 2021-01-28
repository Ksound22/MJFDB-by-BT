// UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all events
loadEventListeners();

// Function to load all events
function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add Task events
  form.addEventListener("submit", addTask);

  //   Remove task event
  taskList.addEventListener("click", removeTask);

  //   Clear task event
  clearBtn.addEventListener("click", clearTasks);

  //   Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    //   Create Li element
    const li = document.createElement("li");

    //   Add class to li
    li.className = "collection-item";
    // Create text node and append to the li
    li.appendChild(document.createTextNode(task));

    // Create a new link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";

    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append the link to the li
    li.appendChild(link);

    // Append the li to the ul
    taskList.appendChild(li);
  });
}

// Add task function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a TODO");
  }

  //   Create Li element
  const li = document.createElement("li");

  //   Add class to li
  li.className = "collection-item";
  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create a new link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to the li
  li.appendChild(link);

  // Append the li to the ul
  taskList.appendChild(li);

  //   Save to local storage
  saveTaskInLocalStorage(taskInput.value);

  //   Clear the input
  taskInput.value = "";
  e.preventDefault();
}

// Local storage function
function saveTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();

      //   Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear task
function clearTasks() {
  //   taskList.innerHTML = "";
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  //   clear from local storage
  clearTasksFromLS();
}

function clearTasksFromLS() {
  localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
