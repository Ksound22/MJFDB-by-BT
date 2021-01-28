//ITERATORS -  advanced loops are iterators
/*
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Create an array of names
const namesArray = ["jack", "Jill", "John"];
// Init the iterator and pass in the names array
const names = nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());
*/

// GENERATORS - Functions that can return multiple values

/*
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();
console.log(name.next().value);
console.log(name.next());
console.log(name.next().value);
console.log(name.next().done);
*/

/*
function* CreateIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = CreateIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); 
*/
