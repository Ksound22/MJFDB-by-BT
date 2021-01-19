const http = new EasyHTTP();

// Get Users
// http
//   .get("http://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// User data
const data = {
  name: "Kay",
  username: "Ksound",
  email: "Kay@gmail.com",
};

// Create post request to create new User
// http
//   .post("http://jsonplaceholder.typicode.com/users", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// PUT Request
// http
//   .put("http://jsonplaceholder.typicode.com/users/2", data)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Delete
http
  .delete("http://jsonplaceholder.typicode.com/users/2")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
