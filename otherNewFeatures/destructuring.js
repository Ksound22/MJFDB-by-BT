// Destrucuturing Assignments

// let a, b;
// [a, b] = [100, 200];

// // Rest pattern
// [a, b, c, d, ...rest] = [100, 200, 300, 400, 500];

// console.log(b);
// console.log(d);
// console.log(rest);

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({ a, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(a, b);
// console.log(rest);

// Array destructuring

// const people = ["John", "Beth", "Mike"];
// const [person1, person2, person3] = people;

// console.log(person2);

// PARSE ARRAY RETRURNED FROM A FUNCTION

// function getPeople() {
//   return ["John", "Beth", "Mike"];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person2, person3, person1);

// OBJECT DESTRUCTURING

/*
const person = {
  name: "John Doe",
  age: 20,
  city: "Miami",
  Gender: "Male",
  sayName: function () {
    console.log("Hello");
  },
};

// Old way
// const name = person.name,
//   age = person.age,
//   city = person.city;

// console.log(age);

// New way
const { name, age, city, sayName } = person;

console.log(name, age, city);

sayName();
*/

/*
// MAPS
// Object that hold key value pairs - We can use any type as a key or value

const map1 = new Map();

// Set keys
const key1 = "some string",
  key2 = {},
  key3 = function () {};

// Set map values by keys
map1.set(key1, "Value of Key 1");
map1.set(key2, "Value of Key 2");
map1.set(key3, "Value of Key 3");

// // Get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Count the value inside a map
// console.log(map1.size);

// Iterating through maps

// looping with for of
// for (let [key, value] of map1) {
//   console.log(`${key}: ${value}`);
// }

// To get the keys only
// for (let key of map1.keys()) {
//   console.log(key);
// }

// To get values only
// for (let value of map1.values()) {
//   console.log(value);
// }

// Using for each to loop through
// map1.forEach(function (value, key) {
//   console.log(`${key}: ${value}`);
// });
//

// Convert to arrays
// Create an array of the key value pairs
// const keyValArr = Array.from(map1);

// console.log(keyValArr);

// Create an array of the values
// const valArr = Array.from(map1.values());

// console.log(valArr);

// Create an array of the keys
// const keyArr = Array.from(map1.keys());

// console.log(keyArr);

*/

// SETS
// Unique values set of any type, primitive or reference
const set1 = new Set();
// Add values to the set

set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);

// console.log(set1);

// const set2 = new Set([1, true, "string"]);
// console.log(set2);

// Get the count
// console.log(set1.size);

// Checkfor values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({ name: "John" }));

// console.log({ name: "John" } === { name: "John" });

// Delete from the set
// set1.delete(100);

// console.log(set1);

// Iterate through set

// for..of

// for (let item of set1) {
//   console.log(item);
// }

// Using for each loop

// set1.forEach((values) => {
//   console.log(values);
// });

// Convert set into array
const setArray = Array.from(set1);
console.log(setArray);

// Sets are not key:value pairs they are just values
