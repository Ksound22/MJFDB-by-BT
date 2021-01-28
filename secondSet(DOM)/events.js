// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("Clicked");
//   e.preventDefault();
// });

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
//   e.preventDefault();
//   //   console.log("Hello World");

//   let val;
//   val = e;

//   //   Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;
//   val = e.target.innerText = "Hello";

//   //   Event type
//   val = e.type;

//   //   Timestamp
//   val = e.timeStamp;

//   // Coords of event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // Coords of event relative to the element
//   val = e.offsetY;
//   val = e.offsetX;
//   console.log(val);
// }

// MOUSE EVENTS
const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener("click", runEvent);
// Doubleclick
// clearBtn.addEventListener("dblclick", runEvent);
// Mousedown
// clearBtn.addEventListener("mousedown", runEvent);
// Mouseup
// clearBtn.addEventListener("mouseup", runEvent);
// // Mouse enter
// card.addEventListener("mouseenter", runEvent);
// // Mouse leave
// card.addEventListener("mouseleave", runEvent);
// // Mouse over
// card.addEventListener("mouseover", runEvent);
// //
// card.addEventListener("mouseover", runEvent);

// MOuse move
// card.addEventListener("mousemove", runEvent);

// // Event handler
// function runEvent(e) {
//   e.preventDefault();
//   console.log(`EVENT TYPE: ${e.type}`);
//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// KEYBOARD and INPUT EVENTS
// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");
// const select = document.querySelector("select");
// // Clear inout
// taskInput.value = "";

// SUbmit
// form.addEventListener("submit", runEvent);

// Keydown
// taskInput.addEventListener("keydown", runEvent);

// Keyup
// taskInput.addEventListener("keyup", runEvent);

// Keypress
// taskInput.addEventListener("keypress", runEvent);

// focus
// taskInput.addEventListener("focus", runEvent);

// focus
// taskInput.addEventListener("blur", runEvent);

// cut
// taskInput.addEventListener("cut", runEvent);

// paste
// taskInput.addEventListener("paste", runEvent);

// copy
// taskInput.addEventListener("copy", runEvent);

// input
// taskInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   //   //   Get inout values
//   //   console.log(taskInput.value);
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);

//   //   heading.innerText = e.target.value;
// }

// Event Bubbling and Delegation
// Event bubbling is the bubbling up of events through the DOM
// Event delegation is almost the opposite of event bubbling

// EVENT BUBBLING
// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card-title");
// });

// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card content");
// });

// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function () {
//   console.log("column");
// });

// Event Delegation
// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

// document.body.addEventListener("click", deleteItem);

// function deleteItem(e) {
//   console.log(e.target);

//   if (e.target.parentElement.className === "delete-item secondary-content") {
//     console.log("deleted");
//   }
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     console.log("deleted");
//     e.target.parentElement.parentElement.remove();
//   }
// }
