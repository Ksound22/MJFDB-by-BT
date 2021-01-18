/*
GAME RULES
- Player guess a number between a min and max number
- Player gets a certain amount of gussess
- Notify player of gusses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  gussesLeft = 3;

//   UI elements
const gameWrapper = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and num
minNum.textContent = min;
maxNum.textContent = max;

// Play again event
gameWrapper.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //   Validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Number must be between ${min} and ${max}`, "orangered");
  }

  //   Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct. You win!`);
  } else {
    //   Wrong choice
    gussesLeft -= 1;

    if (gussesLeft === 0) {
      // Losing condition
      gameOver(
        false,
        `Game Over. You lost! The correct number was ${winningNum}`
      );
    } else {
      // Change border color
      guessInput.style.borderColor = "orangered";

      //   Clear the input
      guessInput.value = "";

      // Tell player its the wrong number
      setMessage(
        `${guess} is not correct, ${gussesLeft} guesses left`,
        "orangered"
      );
    }
  }
});

// Game over function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "#2ecc71") : (color = "orangered");

  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;

  //   Change text color
  message.style.color = color;

  // LEt the user know they won
  setMessage(msg);

  //   Play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get winning number function
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
