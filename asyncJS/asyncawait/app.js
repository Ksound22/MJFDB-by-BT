// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   const err = false;

//   if (!err) {
//     const res = await promise; //Waits until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // Awaits the response
  const response = await fetch("http://jsonplaceholder.typicode.com/users");

  // Only proceed once its resolved
  const data = await response.json();

  // Only proceed when second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
