// var, let and const

/*var name = "John Doe";
name = "Kolade";
console.log(name);

var greeting;  
greeting = "Hello";

console.log(greeting);

const person = {
  name: "John",
  age: 30,
};

person.name = "Kay";

console.log(person.name);
*/

// Data types
// // Primitive
// const name = "John Doe";
// console.log(typeof name);

// Reference
// const movies = ["movies"];
// console.log(typeof movies);

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// Type conversion

// let val;

// val = String(5 + 5);
// val = String(new Date());
// val = (5).toString();
// val = Number("5");
// val = Number(null);
// val = parseFloat("100.31");

// Output
// console.log(val);
// console.log(typeof val);
// // // console.log(val.length);
// // console.log(val.toFixed());

// // Type cohesion
// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);
// console.log(sum);
// console.log(typeof sum);

/*
// The Math object
const num1 = 34;
const num2 = 5;
let val = num1 - num2;
val = Math.PI;
val = Math.random();
val = Math.E;
val = Math.round(2.7);
val = Math.ceil(2.9);

val = Math.floor(4.8);
val = Math.sqrt(64);
val = Math.abs(-343);
val = Math.pow(26, 2);
val = Math.min(3, 8, 5, 1, 0.1);
val = Math.max(6, 9, 89);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);

// console.log(val);
*/

// Strings and Concatenation
// const firstName = "Kolade";
// const lastName = "Kayode";
// const age = 27;
// const str = "Kolade is here keep your JavaScript";

// let val;

// val = firstName + " " + lastName;
// // Append
// val = "Kolade ";
// val += "Chris";

// val =
//   "My name is " +
//   firstName +
//   " " +
//   lastName +
//   " and I'm a self-taught web developer";

// val = 'I can\'t wait to experience "Working in an established tech company". ';

// val = firstName.length;

// val = firstName.concat(" ", lastName);
// val = firstName.toUpperCase();
// val = firstName[4];
// val = firstName.indexOf("d");
// val = firstName.charAt("3");
// val = lastName.charAt(lastName.length - 1);
// val = firstName.substring(0, 4);
// val = firstName.slice(0, 4);
// val = str.split(" ");
// val = str.replace("is", "dey");
// val = str.includes("Kolade");

// console.log(val);

// Template literals
// const name = "Kolade Chris";
// const job = "Web Developer";
// const hobby = "coding";
// const status = "To be employed";

// html = `<ul>
// <li>Name: ${name}</li>
// <li>Job: ${job}</li>
// <li>Hobby: ${hobby}</li>
// <li>Status: ${status === "To be employed" ? true : false}</li>
// </ul>`;

// document.body.innerHTML = html;

// Object literals
// const person = {
//   firstName: "Kolade",
//   age: 26,
//   email: "ksound@gmail.com",
//   hobbies: ["Football", "chess", "coding"],
//   address: {
//     city: "ADO",
//     state: "EK",
//     street: "Embassy Island",
//   },
//   getBirthYear: function () {
//     return 2020 - this.age;
//   },
// };

// let val;

// val = person;
// val = person.firstName;
// val = person["firstName"];
// val = person.hobbies[2];
// val = person.address.street;
// val = person.address["state"];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   { name: "John Doe", age: 23 },
//   { name: "Jane Doe", age: 20 },
//   { name: "Jay Smith", age: 20 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name, people[i].age);
// }

// Date and time
// let val;

// const today = new Date();

// let birthday = new Date("9-10-2020 11:25:00");
// birthday = new Date("September 10 1990");
// birthday = new Date("9/10/1991");

// console.log(birthday.getDate());

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();
// console.log(val);

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(26);

// console.log(birthday);

// Comparisons
// const id = 101;
// if (id === 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// // Not equal
// if (id !== 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// Strict equality is the best

// Testing for undefined
// if (typeof id !== "undefined") {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`No ID`);
// }

// if (id >= 100) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`Not the ID`);
// }

// const color = "red";

// if (color === "red") {
//   console.log("The color is red");
// } else if (color === "yellow") {
//   console.log("The color is yellow");
// } else {
//   console.log("Color is neither red nor blue");
// }

// Logical operators
// const name = "Kolade";
// const age = 27;

// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teen`);
// } else {
//   console.log(`${name} is an adult`);
// }

// if (age < 16 || age > 65) {
//   console.log(`${name} cannot run in the race`);
// } else {
//   console.log(`${name} is registered to run in the race`);
// }
// let id = 100;
// Ternary
// console.log(id === 100 ? `Correct. The ID is ${id}` : "Incorrect");

// In if statements, the braces are optional

// if (id === 100)
//     console.log("Correct")
// else
//     console.log("INCORRECT")

// Switches
// const favColor = "emerald";

// switch (favColor) {
//   case "red":
//     console.log("Color is red");
//     break;
//   case "blue":
//     console.log("Color is blue");
//     break;
//   case "yellow":
//     console.log("Color is yellow");
//     break;
//   default:
//     console.log("Color not in the list");
//     break;
// }

// let day;
// switch (new Date().get()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// console.log(`Today is ${day}`);

// Functions
// Function declarations

// function greet(firstName, lastName, nickname) {
//   return "Hello " + firstName + " " + lastName + " " + nickname;
// }

// console.log(greet("Kolade", "Chris", "Ksound"));

// // default parameters
// function greeter(firstName = "Kolade", lastName = "Chris") {
//   return "Hello " + firstName + " " + lastName;
// }

// console.log(greeter());

// Function expressions
// Putting a function as a varaible

// const square = function (x) {
//   return x * x;
// };

// console.log(square(12));

// IIFEs
// (function () {
//   console.log("IIFE Ran");
// })();

// (function (name) {
//   console.log("Hello " + name);
// })("Kolade");

// Property methods
// When a function is put inside an object, it is called method

// const todo = {
//   add: function () {
//     console.log("Add todo...");
//   },
//   edit: function (id) {
//     console.log(`Edit todo ${id}`);
//   },
// };

// todo.delete = function () {
//   console.log("Delete todo...");
// };

// todo.add();
// todo.edit(22);
// todo.delete();

// Loops and iterations
// // For loop
// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log("2 is my favourite number");
//     continue;
//   }
//   if (i === 5) {
//     console.log("Loop stopped");
//     break;
//   }
//   console.log("Number " + i);
// }

// while loop
// let i = 0;
// while (i <= 10) {
//   console.log("Number ", i);
//   i++;
// }

// Do while
// Always run at least once no matter what
// let i = 0;
// do {
//   console.log("Number " + i);
//   i++;
// } while (i < 10);

// const cars = ["Ford", "Chevy", "Lambo", "Bentley"];

// for (i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// forEach - a better way of looping
// cars.forEach(function (car, index) {
//   console.log(`${index}: ${car}`);
// });

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Ksound" },
//   { id: 3, name: "Chris" },
// ];

// const ids = users.map(function (user) {
//   return user.name;
// });

// console.log(ids);

// FOr in loop
// const user = {
//   firstName: "Kolade",
//   lastName: "Chris",
//   age: 27,
// };

// for (let x in user) {
//   console.log(`${x}: ${user[x]}`);
// }

// WINDOW OBJECT / METHOD / PROPERTIES

// const input = prompt();
// console.log(input);

// if (confirm("Are you sure")) {
//   console.log("Yes");
// } else {
//   console.log("NO");
// }

// let val;

// // Outer height, inner height, outer width and inner width
// val = window.outerHeight;
// val = window.outerWidth;
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points
// val = window.scrollY;
// val = window.scrollX;

// // Location object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// // Redirect
// // window.location.href = "http://google.com";
// window.location.reload();

// // History object
// val = window.history.go(-1);
// val = window.history.length;

// // Navigator
// // The browser itself
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// val = window.navigator.bluetooth;
// console.log(val);

// Block scope with let and const
// Global scope
// var a = "1";
// let b = "2";
// const c = "3";

// function test() {
//   var a = "4";
//   let b = "5";
//   const c = "6";
//   console.log("Function scope: ", a, b, c);
// }
// test();

// if (true) {
//   // Block scope
//   var a = "4";
//   let b = "5";
//   const c = "6";

//   console.log("If scope: ", a, b, c);
// }

// for (var a = 0; a < 10; a++) {
//   console.log(`Loop: ${a}`);
// }

// console.log("Global Scope: ", a, b, c);
