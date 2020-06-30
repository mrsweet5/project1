const gameContainer = document.querySelector(".arrow");
const scoreElement = document.querySelector("#score");
const restartGameButton = document.querySelector("#restartGameButton");

const directions = ["up", "right", "down", "left"];
let cpuArray = [];
let newElement;
let playerArray = [];
let direction;
let score = 0;
nextArrow();

document.addEventListener("keydown", arrowKeyDown, false);

// Progress Bar Countdown Timer
const progressBarElement = document.querySelector("#progress-bar");
const gameDuration = 10; // Game Duration in seconds
let progressBarWidthNumerator = gameDuration*1000;
const progressBarWidthDenominator = gameDuration*1000;
let progressBarInterval = setInterval(progressBarFrame, 10);

function progressBarFrame() {
    if (progressBarWidthNumerator <= 0) {
      clearInterval(progressBarInterval);   
      progressBarElement.setAttribute("style", "width: 0%; background-color: #00cc99;");
    }
    else {
      progressBarWidthNumerator-=10;
      const currentProgressBarWidth = progressBarWidthNumerator/progressBarWidthDenominator;
  
      if(currentProgressBarWidth<=0.10) {
        progressBarElement.setAttribute("style", `width: ${100*currentProgressBarWidth}%; background-color: #ff3300;`);
      }
      else if(currentProgressBarWidth<=0.25) {
        progressBarElement.setAttribute("style", `width: ${100*currentProgressBarWidth}%; background-color: #ff9f40;`);
      }
      else {
        progressBarElement.setAttribute("style", `width: ${100*currentProgressBarWidth}%;`);
      }
    }
  }

function nextArrow() {
    directionArrows =[directions[getRandomInt(4)], directions[getRandomInt(4)],directions[getRandomInt(4)],directions[getRandomInt(4)],directions[getRandomInt(4)],directions[getRandomInt(4)]];
    newElement = [];
    for (let index = 0; index < 6; index++) {
        newElement.push (document.createElement("i"));
        newElement[index].classList.add("fas", "fa-arrow-circle-" + directionArrows[index], "normal", "arrow", "animated", "bounceIn");
        gameContainer.appendChild(newElement[index]);

    }
    cpuArray = directionArrows;
}


function getRandomInt(max) { // Returns a random Integer in the range 0,...,max-1
    return Math.floor(Math.random()*max);
  }


  //push into playerArray
function arrowKeyDown(event) {
    if (event.key== "ArrowRight"){
        playerArray.push ("right");
        keyComparer();
    }
    else if (event.key== "ArrowLeft"){
        playerArray.push ("left");
        keyComparer();
    }
    else if (event.key== "ArrowUp"){
        playerArray.push ("up");
        keyComparer();
    }
    else if (event.key== "ArrowDown"){
        playerArray.push ("down");
        keyComparer();
    }
}

function colorChanger(i) {
     newElement[i].classList.remove ("normal");
     newElement[i].classList.add ("exciting");
}

// comparing the cpuArray and playerArray
function keyComparer(){
    let index = playerArray.length -1;
    if (playerArray[index] == cpuArray[index]) {
        colorChanger(index);
        if (playerArray.length == cpuArray.length) {
            cpuArray = [];
            playerArray = [];
            // score += 10;
            // scoreElement.textContent = score;
            gameContainer.textContent = "";
            nextArrow();
        }
        }
    else {
        gameContainer.textContent = "";
        console.log ("you lose") }
}



