// const person = {
//   name: "Kolade",
//   age: 27,
//   getBirthYear: function () {
//     return 2020 - this.age;
//   },
// };

// console.log(person);
// console.log(person.age);
// console.log(person.getBirthYear());

/* 1. CONTRUCTOR FUNCTION */
/*
function Person(name, dob) {
  this.name = name;
  //   this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
  };
}

const ksound = new Person("Kolade", "3-22-1993");

console.log(ksound.calculateAge());
*/

// NOTE
// this keyword refers to the current instance of the object
// A method is a function inside an object

/* 2. BUILT IN CONSTRUCTOR*/
// String

/*
const name1 = "Kolade";
const name2 = new String("Kolade");
// name2.nick = "Ksound";

// console.log(name1);
// console.log(name2);
// console.log(typeof name1);
console.log(typeof name2);

if (name2 === "Kolade") {
  console.log("YES");
} else {
  console.log("NO");
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);
console.log(typeof num2);

// boolean
const boo1 = true;
const boo2 = new Boolean(true);

console.log(typeof boo2);

// Function
const getSum1 = function (x, y) {
  return x + y;
};
console.log(getSum1(1, 1));

const getSum2 = Function("x", "y", "return 1 + 1");
console.log(getSum1(1, 1));

// Object
const john1 = { name: "John" };
console.log(john1);
const john2 = new Object({ name: "John" });
console.log(john2);

// Array
const arr1 = [1, 2, 3, 4];
console.log(arr1);
const arr2 = new Array(1, 2, 3, 4);
console.log(arr2);

// RegXP
const re1 = /\w+/;
console.log(re1);
const re2 = new RegExp("\\w+");
console.log(re2);
*/

/* 3 - PROTOTYPES*/
// Each object has a prototype. The prototype is an object itself. All methods inherit their properties and methods from their prototype

/*
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  //   this.calculateAge = function () {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return ageDate.getUTCFullYear() - 1970;
  //   };
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return ageDate.getUTCFullYear() - 1970;
};

// Get Fullname
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const ksound = new Person("Kolade", "Chris", "3-22-1993");
const chris = new Person("Chris", "Kay", "3-22-1993");

console.log(ksound);
console.log(chris);

console.log(ksound.calculateAge());
console.log(ksound.getFullName());
console.log(chris.getFullName());

chris.getsMarried("Smith");
console.log(chris.getFullName());

console.log(chris.hasOwnProperty("firstName"));
console.log(chris.hasOwnProperty("getFullName"));
*/

/* 5 - PROTOTYPAL INHERITANCE*/
// Person constructor

/*
function Person(firstName, lastName, nickName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.nickName = nickName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Good morning ${this.firstName} ${this.lastName} ${this.nickName}. How u dey naa.`;
};

const person1 = new Person("Kolade", "Chris", "Ksound");

console.log(person1.greeting());
// Customer Constructor
function Customer(firstName, lastName, nickName, phone, membership) {
  Person.call(this, firstName, lastName, nickName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return cutomer
Customer.prototype.constructor = Customer;

// Create customer

const customer1 = new Customer(
  "Nick",
  "Wealth",
  "Wean",
  "08163388510",
  "Standard"
);

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Good morning ${this.firstName} ${this.lastName} ${this.nickName}. How u dey naa? Welcome to our company o.`;
};

console.log(customer1.greeting());

// Call is a function that allows us to call another function in the current context

*/

/* 6 - USING OBJECT.CREATE*/

/*
const personPrototypes = {
  greeting: function () {
    return `How u dey ${this.firstName} ${this.lastName}`;
  },

  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const kolade = Object.create(personPrototypes);
kolade.firstName = "Kolade";
kolade.lastName = "Chris";
kolade.nick = "Ksound";

kolade.getsMarried("Kay");

console.log(kolade.greeting());

// Another syntax

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 },
});

console.log(brad);
console.log(brad.greeting());
*/

/*ES6 OOP - Syntactic sugar with class*/

/*
class Person {
  constructor(firstName, lastName, nickName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `How far ${this.firstName} ${this.lastName} ${this.nickName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  //   Static method
  static addNumbers(x, y) {
    return x + y;
  }
}

const kolade = new Person("Kolade", "Chris", "Ksound", "3-22-1993");

kolade.getsMarried("Kay");

console.log(kolade);
console.log(kolade.greeting());
console.log(kolade.calculateAge());

// TO use the static method
console.log(Person.addNumbers(1, 2));

// Static methods
// This can be used without instantiating new object

*/

/*INHERITANCE and EXTENDING CLASSES - sub class*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMemebershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "08163388510", "Standard");

console.log(john);
console.log(john.greeting());
console.log(Customer.getMemebershipCost());

class Footballer {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  goals() {
    return `${this.firstName} ${this.lastName} has 20 goals this season`;
  }

  yob() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
  }
}

class Baller extends Footballer {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
    this.age = age;
  }
}

const kante = new Baller("Ngolo", "Kante", 30);
console.log(kante.goals());
console.log(kante);
console.log(kante.yob());
