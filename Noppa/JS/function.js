// function.js

function rollDice() {
    // Hae tarvittavat elementit
    const diceImg = document.getElementById("dice");

    // Arvo satunnaisluku välillä 1-6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Aseta uusi kuva nopalle
    diceImg.src = `img/${randomNumber}.png`;
    diceImg.alt = `Noppa ${randomNumber}`;
}

