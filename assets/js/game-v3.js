
// JS - Hangman  Game

/******************
VARIABLES
******************/

// create list of candies
var candyStore = ["skittles", "twizzlers", "snickers", "starburst", "butterfinger", "lemonheads", "twix","crunch", "nerds", "dots"];  

//random selection from candies array  
var candy = candyStore[Math.floor(Math.random() * candyStore.length)];
var candyShown = document.getElementById('missing');

//Hidden Word - Blanks  
var blankCandy = [];

//User Key Input  
var userPick = [];

//Number of Wins  
var wins = 0;
var winsShown = document.getElementById('wins');

//Start of 15 Chances to Guess  
var chances = 15;
var chancesShown = document.getElementById('chances');


//Letters Already Picked & displayed here
var wrongLetter = [];  
var lettersShown = document.getElementById('lettersShown');




/******************
FUNCTIONS
******************/
function startGame(){
	for(var i = 0; i < candy.length; i++){
		blankCandy.push('_');
		// console.log(blankCandy)
	}
	//Shows the Missing Blanks on Screen/Join Removes ',' and places a space in between '_'
	candyShown.textContent = blankCandy.join(" ");

	//RESET & Display on Screen
	wrongLetter = [];
	chances = 15;
	chancesShown.textContent = chances;
}
//User Guesses
document.onkeyup = function(event) {
userPick = event.key;
//console.log(userPick);

//Checking to see if the letter is inside the word
if(candy.indexOf(userPick) > -1){
	for(var j = 0; i < candy.length; j++){
		bla
	}
}
else {
	wrongLetter.push(userPick); //Store the Letter Choices
	chances--; // Subtract Chances Tally
		
}

}



/******************
CALL
******************/
// First - Begin the Game by Any keypress
//startGame();