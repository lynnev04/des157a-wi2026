(function(){
"use strict";
console.log("reading js");

// dice images
const dice = document.querySelector("#dice");

// score displays
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

// message showing game status
const message = document.querySelector("#turn-text");

// game buttons
const startBtn = document.querySelector(".start-btn");
const rollBtn = document.querySelector("#roll-btn");
const passBtn = document.querySelector("#pass-btn");
const resetBtn = document.querySelector(".startover");

// player flower images
const flower1 = document.querySelector("#player1 img");
const flower2 = document.querySelector("#player2 img");

// sound effects
const diceSound = new Audio("sounds/diceroll.wav");
const winSound = new Audio("sounds/sparkle.mp3");

let scores = [0,0];
let player = 0;  
let gamePlaying = false;

// images for dice or in this case seeds
const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

const playerDivs = [document.querySelector("#player1"), document.querySelector("#player2")];

// player that is currently active
function setActivePlayer(){
    playerDivs.forEach((div, idx) => {
        if(idx === player){
            div.classList.add("active");
        } else {
            div.classList.remove("active");
        }
    });
}

// game start
startBtn.addEventListener("click", function(){
    gamePlaying = true;
    player = 0; 
    message.innerHTML = `<p>Player ${player+1} starts!</p>`;
    dice.style.display = "inline";
    setActivePlayer();

    startBtn.style.display = "none";   
    rollBtn.style.display = "inline";
    passBtn.style.display = "inline";
    resetBtn.style.display = "inline";  
});

// roll dice
rollBtn.addEventListener("click", function(){

    if(!gamePlaying) return;

    let roll = Math.floor(Math.random()*6) + 1;
    diceSound.currentTime = 0;
    diceSound.play();
    dice.style.display = "inline";
    dice.src = diceImages[roll-1];

    if(roll === 1){
        scores[player] = 0;
        message.innerHTML = `<p>Player ${player+1} rolled a 1! All seeds lost</p>`;
    } 
    else{
        scores[player] += roll;
        message.innerHTML = `<p>Player ${player+1} rolled a ${roll}</p>`;
    }

    updateScores();
    checkWinner();

    if(gamePlaying){
        player = player === 0 ? 1 : 0;
        setActivePlayer();
        message.innerHTML += `<br>Player ${player+1}'s turn`;
    }

});

// pass turn
passBtn.addEventListener("click", function(){
    if(!gamePlaying) return;
    switchPlayer();
});

// resets game
resetBtn.addEventListener("click", function(){
    scores = [0,0];
    updateScores();
    player = 0;
    gamePlaying = false;

    flower1.src = "images/flowersprout.png";
    flower2.src = "images/flowersprout.png";

    message.textContent = "Click Start Game";
    startBtn.style.display = "inline";
    rollBtn.style.display = "none";
    passBtn.style.display = "none";
});

// switches player turn
function switchPlayer(){
    player = player === 0 ? 1 : 0;
    setActivePlayer();
    if(gamePlaying) message.innerHTML = `<p>Player ${player+1}'s turn</p>`;
}

// updates and tracks scores
function updateScores(){
    score1.textContent = scores[0] + " seeds";
    score2.textContent = scores[1] + " seeds";
}

// determines winner when they obtain 30 or more seeds
function checkWinner(){
    if(scores[player] >= 30){

        winSound.play();

        message.innerHTML = `<h2>Player ${player+1} wins!</h2>`;
        gamePlaying = false;

        if(player === 0){
            flower1.src = "images/flowergrown.png";
        } else {
            flower2.src = "images/flowergrown.png";
        }
    }
}

})();