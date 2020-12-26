let min = 1;
let max = 10;
let winningNum = getRandomNum(min, max);
let guessLeft = 3;

const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-value");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (guess === NaN || guess < min || guess > max) {
    setMessage(`please enter a number between ${min} and ${max}`, "red");
  }

  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct YOU WIN!`);
  } else {
    guessLeft -= 1;

    if (guessLeft === 0) {
      gameOver(
        false,
        `GAME OVER, YOU LOST! The correct number was ${winningNum}`
      );
    } else {
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guess} is not correct!, ${guessLeft} guesses left`, "red");
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  setMessage(msg);

  guessBtn.value = "play again";
  guessBtn.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
