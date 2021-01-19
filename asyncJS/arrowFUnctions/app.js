const sayHello = function () {
  return "Hello";
};
console.log(sayHello());

// Arrow
const sayHi = () => "Hello Again";
console.log(sayHi());

const satDown = (name) => console.log(`Hello${name}`);
satDown(" Kolade");

const satUp = (firstName, lastName) =>
  console.log(`Hello${firstName} ${lastName} ki lo n sele`);
satUp(" Kolade", "Chris");

// Using arrow functions as callback
const users = ["Nath", "Nat", "Na"];

const nameLength = users.map((name) => name.length);

console.log(nameLength);
