/*●	Parameters: What you’re being given at the start of the coding challenge
●	Results: What you are being asked to output at the end of your solution
●	Examples: Testable cases for the output.
●	Pseudocode: Your theoretical code in plain language*/

//We are given the method to use to build the game.  The method is a  while loop.  Also, we are told to use prompt to get user's imput and to use parseInt() to convert the user input from a string to a number.
//We have a prompt for user's to enter a number they guess from a given range and the user will have to keep guessing until they guess the correct number.
//If the range is 1-10, a prompt will ask the user to input their guess.  Then if the guess is wrong there will be an alert with a message 'WRONG ANSWSER! Try again.' will pop up. The user will have to guess again.  When the user guess the correct number an alert with a message 'You are a mind reader!' will pop up.
//Pseudocode
function numberGame(){
  
let randomNumber = Math.floor(Math.random()*10); //Math.random() will return a number 0-1.  In order for a number to return between 1-10 I will multiply the return number by 10.  Math.floor() makes the numbers whole numbers. The statement will continue creating random number between 1-10. 
  
  
while(randomNumber >= 11){
  console.log(randomNumber);
  randomNumber++;
} //The while loop will continue as long as randomNumber is greater than or equal to 10.  
console.log(randomNumber); //the console will print the randomNumber

let userGuess = '';


  
/*if (userGuess === randomNumber){
  alert('You are a mind reader!');
} else {
  alert('WRONG ANSWSER! Try again');
}*/

userGuess === randomNumber ? parseInt(prompt('You are a mind reader')) : parseInt(prompt('Try Again'));
} //my intension with this code is to write a ternary statemnt that reads if userGuess equals randomNumber prompt "You are a mind reader"  If userGuess do not equal randomNumber prompt "WRONG ANSWSER! Try again"

numberGame();

