// getElementById
// console.log(document.getElementById("task-title"));

// // Get stuffs from the element
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");
// // Change styles
// taskTitle.style.background = "#2ecc71";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// taskTitle.style.display = "none";

// taskTitle.textContent = "Task Lists for Kolade";
// taskTitle.innerText = "Task List for Kolade";
// taskTitle.innerHTML = "<b>Task List for Kolade<b>";

// QuerySelector
// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "#2ecc71";
// document.querySelector("li:last-child").style.color = "#2ecc71";
// document.querySelector("li:nth-child(3)").style.color = "#2ecc71";
// document.querySelector("li:nth-child(4)").textContent = "Hello Kolade";
// document.querySelector("li:nth-child(odd)").style.background = "#ccc";

// Multiple Selector
// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "#2ecc71";
// items[3].textContent = "Kolade is here";

// const listItem = document
// .querySelector("ul")
// .getElementsByClassName("collection-item");

// console.log(listItem);

// Get elements by tag name
// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "#2ecc71";
// lis[3].textContent = "Kolade is here";

// // Convert HTML collection to an array
// lis = Array.from(lis);

// lis.reverse();
// lis.forEach(function (li, index) {
//   console.log(li);
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// QuerySelectorAll()
const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello Kolade`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd");
const liEven = document.querySelectorAll("li:nth-child(even");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f1f1f1";
}

// console.log(items);
