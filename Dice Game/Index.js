//we have created a random number between 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// this is a string that can be inserted (concatenation) in to the source of the image
//to manipulate the dice image- randomised with the number above
var randomImageForLeftDice = "images/dice" + randomNumber1 + ".png";

//same again for the right hand dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageForRightDice = "images/dice" + randomNumber2 + ".png";

// this is adding the modified image source attribute on the web page
document.querySelector(".img2").setAttribute("src", randomImageForRightDice);
document.querySelector(".img1").setAttribute("src", randomImageForLeftDice);

// this is a simple if loop to didcate the text depending on the result
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW!!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 WINS";
} else {
    document.querySelector("h1").innerHTML = "Player 1 WINS";
}