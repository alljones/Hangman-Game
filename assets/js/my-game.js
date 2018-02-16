/* * * * VARIABLES * * * * */

//Create an array of candy choices
var candies = ["skittles", "twizzlers", "snickers", "starburst", "butterfinger", "lemonheads", "twix","crunch", "nerds", "dots"];

//Random Candy selected out of the candies array
var randomCandy = candies[Math.floor(Math.random() * candies.length)];

//Creating Hidden Word Array
var hiddenWord = [];
for(var i = 0; i < randomCandy.length; i++) {
    hiddenWord[i] = "_";
}
//Display Guess Progress to User on screen
document.getElementById('missing').textContent = hiddenWord.join(" ");

var remainingLetters = randomCandy.length;
var wrongLetter = [];
var wins = 0;
var guessLeft = 15;


//Users Input
document.onkeyup = function(event) {
    userGuesses = event.key;
    //Test ~ console.log(userGuesses);
    // Checking if the letter exist inside of the word
    if(randomCandy.indexOf(userGuesses) > -1) {
        for(var i = 0; i < randomCandy.length; i++) {
            if(randomCandy[i] === userGuesses) {
                hiddenWord[i] = userGuesses;
                wins++;
            }
        }
    }
    else {
        wrongLetter.push(userGuesses);
        guessLeft--;
    }
    
    }
// while(remainingLetters > 0){
//     //Display Guess Progress to User on screen
//     document.getElementById('reveal').textContent = hiddenWord.join(" ");
// }


document.getElementById('guessLeft').textContent = guessLeft;