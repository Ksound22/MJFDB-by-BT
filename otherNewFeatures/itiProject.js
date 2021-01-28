const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "male",
    location: "Lagos, Nigeria",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jane Doe",
    age: 30,
    gender: "female",
    lookingFor: "male",
    location: "Ado, Nigeria",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Laura Harvey",
    age: 31,
    gender: "female",
    lookingFor: "male",
    location: "New York, NY",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
  },
  {
    name: "Francesco Ciulli",
    age: 31,
    gender: "male",
    lookingFor: "female",
    location: "Rome, Italy",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById("next").addEventListener("click", nextProfile);

// next profile display dunction
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = ` 
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;

    // Image display
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // Reload the page
    window.location.reload();
  }
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
