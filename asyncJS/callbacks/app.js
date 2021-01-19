// A callback is a function passed in to another function as a parameter. It runs inside the function body. Callback is not asynchronous

const posts = [
  { title: "Post one", body: "This is the post one" },
  { title: "Post two", body: "This is the post two" },
];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "post Three", body: "This is post three" });
// getPosts();

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "post Three", body: "This is post three" }, getPosts);
