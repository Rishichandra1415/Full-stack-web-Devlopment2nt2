var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomPng = "dice" + randomNumber1 + ".png"; // in this we can select the random png file through png because of using string  
var randomImage = "images/" + randomPng;
var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src", randomImage);

// var image2 = document.querySelectorAll(".img2")[0];
// image2.setAttribute("src", randomImage);

//second images........

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "player 1 wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "Match Draw";
}