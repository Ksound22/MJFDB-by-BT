const pageState = function () {
  let currentState = new homeState(this);
  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home state
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
       <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
       </div>
    `;
};

// About state
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
       <p>This is the about page</p>
    `;
};

// Contact state
const contactState = function (page) {
  document.querySelector("#heading").textContent = "Contact Us";
  document.querySelector("#content").innerHTML = `
       <p>This is the Contact page</p>
    `;
};

// FAQ state
const faqState = function (page) {
  document.querySelector("#heading").textContent = "FAQ Page";
  document.querySelector("#content").innerHTML = `
       <p>This is the FAQ page</p>
    `;
};

// Instantiate page state
const page = new pageState();

// Init the page state
page.init();

// UI Variables
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");
faq = document.getElementById("faq");

// Home
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});

// About
about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

// FAQs
contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});

// Contact
faq.addEventListener("click", (e) => {
  page.change(new faqState());

  e.preventDefault();
});
