
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let lettersUsed = [];

let guessed = document.getElementById("guessed");
let win = document.getElementById("wins");
let lose = document.getElementById("losses");
let remainingGuesses = document.getElementById("guessesLeft");


let psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(psychicLetter);

function reset() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(psychicLetter);
    remainingGuesses.textContent = 9;
    guessed.textContent = "";
}

document.onkeyup = function(event) {
    let myGuess = event.key;

    lettersUsed.push(myGuess);
    guessed.textContent = lettersUsed; 
    console.log(lettersUsed); 

    if (myGuess === psychicLetter) {
        wins++;
        win.textContent = wins++;
        reset();
    } else {
        remainingGuesses.textContent = guessesLeft--;
        } 
        
    if (guessesLeft === 0) {
        losses++;
        lose.textContent = losses++;
        guessesLeft = 9;
        lettersGuessed = [];
        reset();          
        } 