'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1;

const displaymessage = function(message){
    document.querySelector(".message").textContent = message;
}


let score = 20
let highScore = 0;

document.querySelector(".check").addEventListener(
    'click', function(){
      const guess = Number(document.querySelector(".guess").value)
      
      if (!guess){
        displaymessage("Sorry, not a number");
      } else if (guess === secretNumber){
        displaymessage("Congratulations!");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width= "30rem";

        const highest= function(){
            if(highScore > score){
                return highScore
            } else{
               return highScore = score
            }
        }
    
        document.querySelector('.highscore').textContent = highest();
      } else if (guess !== secretNumber){

        if(score > 1){
            displaymessage(guess > secretNumber? "Higher than secret number": "Lower than secret number");
        score -=1;
        document.querySelector(".score").textContent = score;
    } else {
            document.querySelector(".message").textContent = "You lost the game";
            document.querySelector(".score").textContent = 0;
        }
      }
    }
)

document.querySelector(".again").addEventListener(
    "click", function(){
        score = 20;
        displaymessage("Start guessing...");
       document.querySelector(".guess").value = "";
       document.querySelector(".number").textContent = "?";
       document.querySelector("body").style.backgroundColor = "#222";
       document.querySelector(".number").style.width = "15rem";
       document.querySelector('.score').textContent = score;
    }
)