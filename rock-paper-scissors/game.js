/* 
1. create a function that randomly returns rock,paper or scissors as computer choice: func: getComputerChoice()-> rock,paper or scissor
2.get user choice: give a prompt for a user to input their choice and capture it for later use
3.keep track of user and computer scores: humanScore=0, computerScore=0 initially
4. play round function takes user vrs computer input and output the winner after increasing their score to the console; playround()
5. playGame: This ensure that 5 rounds are played
*/
//INITIAL SCORES
let humanScore = 0;
let computerScore = 0;

const playArea = document.querySelector("#play");
const score_board = document.querySelector("#scores");
// play button:
let play_btn = document.createElement("button");
play_btn.textContent = "PLAY ROUND";
play_btn.style.cssText = "background-color:#ff00ff90; padding:8px;border:none;outline:none; border-radius:5px;font-weight:800;";
playArea.appendChild(play_btn);
// score elements of score area
let sc1 = document.createElement("h1");
let sc2 = document.createElement("h1");
sc1.textContent =`Human Score: ${humanScore}`
sc2.textContent = `Computer Score: ${computerScore}`
//enhance appearance of scores
score_board.style.cssText="background-color:#ff0f0f90; display:flex; gap:64px;"
score_board.appendChild(sc1);
score_board.appendChild(sc2);

const allbtns = document.querySelectorAll("button");
//style buttons
let btn_container=document.querySelector("#btn-container")
btn_container.style.cssText = "display:flex; gap:12px; padding: 18px;justify-content:center;";

//user's choice
let user_choice = '';
function getUserChoice(){
allbtns.forEach(btn => {
    btn.addEventListener("click", e => {
        console.log(e.target.textContent);
        user_choice = e.target.textContent;
    });
});
}


function computerChoice() {
    let c_choice = Math.floor(Math.random() * 3);
    let val = '';
    switch (c_choice) {
        case 0:
            val = 'ROCK';
            break;
        case 1:
            val = 'PAPER';
            break;
        case 2:
            val = 'SCISSORS';
            break;
    }
    return val;
}



play_btn.addEventListener("click", () => {
  getUserChoice();
  let computer_choice = computerChoice();

  if (user_choice === '' || computer_choice === '') {
    alert("Error! Choose one of ROCK, PAPER, SCISSORS");
    return;
  }

  if (user_choice === computer_choice) {
    alert("It's a draw!");
  } else if (
    (user_choice === "ROCK" && computer_choice === "SCISSORS") ||
    (user_choice === "PAPER" && computer_choice === "ROCK") ||
    (user_choice === "SCISSORS" && computer_choice === "PAPER")
  ) {
    humanScore += 5;
    alert(`You won! ${user_choice} beats ${computer_choice}`);
  } else {
    computerScore += 5;
    alert(`You lost! ${computer_choice} beats ${user_choice}`);
  }

  // update scoreboard
  sc1.textContent = `Human Score: ${humanScore}`;
  sc2.textContent = `Computer Score: ${computerScore}`;

  // Optional: reset user choice
  user_choice = '';
});
