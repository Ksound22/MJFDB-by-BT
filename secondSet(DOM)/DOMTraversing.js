// let val;

// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// // Returns node list

// // Get children element nodes
// val = list.children;
// // Returns a HTML Collection

// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// /*
// 1 - Element
// 2 - Atttribute
// 3 - Text node
// 8 - Cocmment
// 9 - Document itself
// 10 - Dctype
// */

// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = "Kolade";

// // Get children of children
// val = list.children[3].children[0].id = "test-link";
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get previous sibling
// val = listItem.previousSibling;

// console.log(val);

// CREATING ELEMENT
// const li = document.createElement("li");

// // ADD class to it
// li.className = "collection-item";
// // Add id
// li.id = "new-item";

// // Add attribute
// li.setAttribute("title", "New Item");

// //Create text node and append it
// li.appendChild(document.createTextNode("Kolade"));

// // Create new link
// const link = document.createElement("a");

// // Add classes
// link.className = "delete-item secondary-content";
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link to li
// li.appendChild(link);

// // Append li as child to Ul
// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

// REMOVING AND REPLACING ELEMENTS

// Replacing

// Create element

// const newHeading = document.createElement("h4");

// // Add id
// newHeading.id = "task-title";

// // New text node
// newHeading.appendChild(document.createTextNode("Task LIST"));

// // Get old heading
// const oldHeading = document.getElementById("task-title");

// // Parent
// const cardAction = document.querySelector(".card-action");

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove from the DOM
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul");

// console.log(lis);

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES AND ATTRIBUTES
// const firstLi = document.querySelector("li:first-child");

// const link = firstLi.children[0];

// console.log(link);

// let val;
// val = link.className;
// val = link.classList;
// val = link.classList[0];

// // Add class using class list
// link.classList.add("testing");
// val = link;

// // Remove class
// link.classList.remove("testing");
// val = link;

// // Attributes
// val = link.getAttribute("href");
// val = link.setAttribute("href", "http://chriskaydevs.com");

// // See if theres attribute
// val = link.hasAttribute("href");
// val = link.hasAttribute("title");

// val = link;

// // Remove attribute
// val = link.removeAttribute("href");

// console.log(link);
