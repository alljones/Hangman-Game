
// JS - Hangman  Game

/******************
VARIABLES
******************/

// create list of candies
var candyStore = ["skittles", "twizzlers", "snickers", "starburst", "butterfinger", "lemonheads", "twix","crunch", "nerds", "dots"];  

//random selection from candies array  
var candy = candyStore[Math.floor(Math.random() * candyStore.length)];
var candyShown = document.getElementById('missing');

//Hidden Word  
var blankCandy = [];

//Number of Wins  
var wins = 0;
var winsShown = document.getElementById('wins');

//Start of 15 Chances to Guess  
var chances = 15;
var chancesShown = document.getElementById('chances');

//Letters Already Picked & displayed here  
var lettersShown = document.getElementById('lettersShown');




/******************
FUNCTIONS
******************/
function startGame(){
	for(var i = 0; i < candy.length; i++){
		blankCandy.push('_');
		// console.log(blankCandy)
	}
	candyShown.textContent = blankCandy;

}




/******************
CALL
******************/
// First - Begin the Game by Any keypress
document.onkeyup = startGame;