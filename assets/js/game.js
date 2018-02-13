// GLOBAL VARIABLES
var wordBank =['red', 'blue'];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord;

// Function
function startGame() {
    //Picks random word from the array
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Test ~ console.log(randWord);

    for(var i = 0; i < randWord.length; i++) {
        //Test ~ console.log(i)
        underScores.push('_');
    }
    //Underscore blanks representing the number of letters
    document.getElementById('word-blanks').textContent = underScores.join(" ");

    //reset
    wrongLetter = [];
    guessesLeft = 10;

    //HTML
    document.getElementById('guesses-left').textContent =  guessesLeft;
}

//Users Input
document.onkeyup = function(event) {
userGuesses = event.key;
//Test ~ console.log(UserGuesses);
// Checking if the letter exist inside of the word
if(randWord.indexOf(userGuesses) > -1) {

}
else {
    wrongLetter.push(userGuesses);
}

}



// OBJECTS





//CALLS
startGame();