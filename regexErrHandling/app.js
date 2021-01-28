// Error in JavaScript

// Create custom error
/*
const user = { email: "Jdoe@gmail.com" };

if (!user.name) {
  //   throw "User ain't got a name";
  throw new SyntaxError("User ain't got a name");
} else {
  throw "Name exists";
}
*/

// Try catch
/*
try {
  // Produce a reference error
  //   myFunction();
  // PRoduce a type err
  //   null.myFunction();
  // Produce syntax error
  //   eval("Hello World");
  // Produce a URI error
  //   decodeURIComponent("%");
} catch (err) {
  console.log(`${err.name}: Error leleyi o`);
  //   console.log(err.message);
  //   console.log(err.name);
  //   console.log(err instanceof ReferenceError);
} finally {
  console.log("Finally always run no matter what");
}

console.log("Program continues");

// Elegant way of handing error

*/

// REGEX Proper
// Used for pattern matching and pattern searching

// Different functions used to evaluate regex
// let re;
// re = /hello/;
// re = /hello/i; //i indicates case insensitivity
// re = /hello/g; //g indicates global search

// console.log(re);

//The Functions
// eval  -  Return result in an array or null

// const result = re.exec("Kolade hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test function - returns true or false if there's a match

// const result = re.test("hEllo");
// console.log(result);

// Match function - returns result array or null
// const str = "Hello there";
// const result = str.match(re);

// console.log(result);

// search function - returns the index of the first match and -1 if not found

// const str = "Hi Hello there";
// const result = str.search(re);
// console.log(result);

// // replace function - returns a new string with some or matches of a pattern
// const str = "Hello there";
// const newStr = str.replace(re, "How far");

// console.log(newStr);

// METACHARACTER SYMBOLS
// A cleaner way of handling the result

// String to match

/*
let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; //Must start with
re = /D$/i; //Must end with
re = /^hello$/i; //Must start with and end with
re = /h.llo/i; //Matches any one character
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; //Optional character
re = /gre?a?y\?/i; //Escape character

const str = "Gray";

// Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
*/

// CHARACTER SET

/*
let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i; //Must start with
re = /D$/i; //Must end with
re = /^hello$/i; //Must start with and end with
re = /h.llo/i; //Matches any one character
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; //Optional character
re = /gre?a?y\?/i; //Escape character

// Bracket [] - character set

re = /gr[ae]y/i; //Must be a or e
re = /[GF]ray/; //Must be G or F
re = /[^GF]ray/; //Matches anything except G or F
re = /^[GF]ray/; //Has to begin with G or F
re = /[A-Z]ray/; //Matches any uppercase letter
re = /[a-z]ray/; //Matches any lowercase letter
re = /[A-Z a-z]ray/; //Matches [and must start with] any lowercase or uppercase letter
re = /[0-9]ray/; //Matches [and must start with] any number

// Braces {} - Quantifiers
re = /Hel{2}o/i; //There must be two ls right after 'e'
re = /Hel{2,4}o/i; //There must be two to four ls right after 'e'
re = /Hel{2,}o/i; //There must be at least two ls right after 'e'

// Parenthesis () - Grouping
re = /([0-9]x){3}/;

// String to match
const str = "3x3x3x";

// Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
*/

// SHORT HAND CHARACTERS
re = /gr[ae]y/i; //Must be a or e
re = /[GF]ray/; //Must be G or F
re = /[^GF]ray/; //Matches anything except G or F
re = /^[GF]ray/; //Has to begin with G or F
re = /[A-Z]ray/; //Matches any uppercase letter
re = /[a-z]ray/; //Matches any lowercase letter
re = /[A-Z a-z]ray/; //Matches [and must start with] any lowercase or uppercase letter
re = /[0-9]ray/; //Matches [and must start with] any number

// Braces {} - Quantifiers
re = /Hel{2}o/i; //There must be two ls right after 'e'
re = /Hel{2,4}o/i; //There must be two to four ls right after 'e'
re = /Hel{2,}o/i; //There must be at least two ls right after 'e'

// Parenthesis () - Grouping
re = /([0-9]x){3}/;

// Short hand starts
re = /\w/; //Word character - alphanumeric or _
re = /\w+/; //Plus character - one or more
re = /\W/; //Non-word character
re = /\d/; //Matches any digit 0 or more times
re = /\D/; //matches any non digit
re = /\s/; //matches any white space character
re = /\S/; //matches any non-white space character
re = /Hell\b/i; //Word boundary

// Asertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if not followed by y

// String to match
const str = "xtyh";

// Log result
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);
