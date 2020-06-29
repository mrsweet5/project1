const gameContainer = document.querySelector(".arrow");
const scoreElement = document.querySelector("#score");
const restartGameButton = document.querySelector("#restartGameButton");

const directions = ["up", "right", "down", "left"];
let cpuArray = [];
let playerArray = [];
let direction;
let score = 0;
nextArrow();


document.addEventListener("keydown", arrowKeyDown, false);


function nextArrow() {
    direction = directions[getRandomInt(4)];
    cpuArray.push (direction);
    const newElement = document.createElement("i");
    newElement.classList.add("fas", "fa-arrow-circle-" + direction, "arrow", "animated", "bounceIn");
    newElement.style.color = "#36a2eb";
    gameContainer.appendChild(newElement);
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

// comparing the cpuArray and playerArray
function keyComparer(){
    if (playerArray[0] == cpuArray [0]) {
        console.log("match");
        cpuArray = [];
        playerArray = [];
        gameContainer.textContent = "";
        nextArrow();
    }
}

