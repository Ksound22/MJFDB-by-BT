class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Profile</a> 
                </div>
                <div class="col-sm"> 
                    <span class="badge badge-success">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary">Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Following: ${user.following}</span>
                    <br> <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading">Latest Repositories</h3>
        <div id="repos"></div>
    `;
  }

  //   Show repos
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-sm-6">
                    <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                </div>
                <div class="col-sm-6">
                    <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Following: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  //   Show alert message
  showAlert(message, className) {
    //   Clear any remaining alert
    this.clearAlert();
    // Create DIV
    const div = document.createElement("div");

    // Add classes
    div.className = className;

    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector(".searchContainer");

    // Get search box
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    // Timeout after 3s
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //   Clear alert
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //   Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
