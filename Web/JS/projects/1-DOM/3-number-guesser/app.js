// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game");
minNum = document.querySelector(".min-num");
maxNum = document.querySelector(".max-num");
guessBtn = document.querySelector("#guess-btn");
guessInput = document.querySelector("#guess-input");
message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});
//Listen for Guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number ${min} and ${max}`, "red");
  } else {
    // Check if won
    if (guess === winningNum) {
      // Game-over Won
      gameOver(true, `${winningNum} is Correct, YOU WIN!`);
    } else {
      // Wrong Number
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        // Game Over - lost
        gameOver(
          false,
          `Game over, you lost. The correct num was ${winningNum}`
        );
      } else {
        //Game continues - answer wrong
        setMessage(
          `${guess} is not correct. ${guessesLeft} guesses left.`,
          "red"
        );

        //Clear Input
        guessInput.value = "";
      }
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Disable input
  guessInput.disabled = true;

  //Change border color
  guessInput.style.borderColor = color;

  // Set Message
  setMessage(msg, color);

  // Play again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;

  message.textContent = msg;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
