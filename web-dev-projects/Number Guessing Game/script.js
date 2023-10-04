let randomNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById("message").innerHTML = `Congratulations! You guessed correctly in ${attempts} attempts.`;
        document.getElementById("userGuess").setAttribute("disabled", "disabled");
    } else if (userGuess < randomNumber) {
        document.getElementById("message").innerHTML = "Your guess is too low. Try again.";
    } else {
        document.getElementById("message").innerHTML = "Your guess is too high. Try again.";
    }
}

function resetGame() {
    // Show shimmer effect
    document.getElementById("shimmer").style.display = "block";

    setTimeout(() => {
        // After a brief delay, reset the game
        randomNumber = generateRandomNumber();
        attempts = 0;
        document.getElementById("userGuess").removeAttribute("disabled");
        document.getElementById("userGuess").value = "";
        document.getElementById("message").innerHTML = "";
        document.getElementById("shimmer").style.display = "none";
    }, 1000); // 1-second delay before reset
}
