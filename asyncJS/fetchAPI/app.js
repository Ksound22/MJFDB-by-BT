document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJSON);

document.getElementById("button3").addEventListener("click", getExternal);

// Get local text
function getText() {
  fetch("text.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// Get local json file
function getJSON() {
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>
                   <p>${post.body}</p>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Get external API data
function getExternal() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// You have to loop through JSON Kolade!
