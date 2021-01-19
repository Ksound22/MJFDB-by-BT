document.getElementById("button").addEventListener("click", loadData);

function loadData(e) {
  // Create XHR object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "data.txt", true);

  //   OPtional - used to load spinners
  xhr.onprogress = function () {
    // console.log("READY STATE1:", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READY STATE:", xhr.readyState);
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };
  //   xhr.onreadystatechange = function () {
  //     console.log("READY STATE", xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };
  xhr.onerror = function () {
    console.log("Request error");
  };
  xhr.send();
}

// REady state values
// 0: request not initialised
// 1: server connection established
// 2: Request received
// 3: processing request
// 4: request finished and response is ready
