'use strict';

const secretNumber = Math.trunc(Math.random()*20) + 1;

document.querySelector(".number").textContent = secretNumber;

let score = 20

document.querySelector(".check").addEventListener(
    'click', function(){
      const guess = Number(document.querySelector(".guess").value)
      
      if (!guess){
      document.querySelector(".message").textContent = "Sorry, not a number"
      } else if (guess === secretNumber){
        document.querySelector(".message").textContent = "Congradulations!";
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width= "30rem";
      } else if (guess > secretNumber){

        if(score > 1){
        document.querySelector(".message").textContent = "Higher than secret number";
        score -=1;
        document.querySelector(".score").textContent = score;
    } else {
            document.querySelector(".message").textContent = "You lost the game";
            document.querySelector(".score").textContent = 0;
        }
      }else if (guess < secretNumber){
        if (score > 1){
        document.querySelector(".message").textContent = "Lower than secret number";
        score --;
        document.querySelector(".score").textContent = score;}
        else {
            document.querySelector(".message").textContent = "You lost the game";
            document.querySelector(".score").textContent = 0;  
        }
      }
    }
)