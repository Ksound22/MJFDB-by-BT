// The value has to be a string - json.stringify()
// TO retrieve items, we need to parse them - json.parse()

// Set local storage item
// localStorage.setItem("name", "Kolade");
// localStorage.setItem("age", "27");

// Set session storage item
// sessionStorage.setItem("name", "Chris");

// Remove form local storage
// localStorage.removeItem("name");

// Get from storage

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// // clear localstorage
// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const task = document.getElementById("task").value;

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("Task Saved");

  console.log(task);

  const form = document.getElementById("task-form");
  form.reset();
});

// Get the items
const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function (task) {
  console.log(task);
});
