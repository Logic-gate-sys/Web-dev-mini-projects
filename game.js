/* 
1. create a function that randomly returns rock,paper or scissors as computer choice: func: getComputerChoice()-> rock,paper or scissor
2.get user choice: give a prompt for a user to input their choice and capture it for later use
3.keep track of user and computer scores: humanScore=0, computerScore=0 initially
4. play round function takes user vrs computer input and output the winner after increasing their score to the console; playround()
5. playGame: This ensure that 5 rounds are played
*/

let humamScore = 0;
let computerScore = 0;

function computerChoice() {
    let c_choice =Math.floor( Math.random()*3) ;
    console.log(c_choice);
    switch (c_choice) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS'
    }
}

function humanChoice() {
    let ans = prompt("Enter choice of one of these values \n ROCK, PAPER OR SCISSORS");
    ans = ans.toUpperCase();
    return ans;
}

function playRound(userInput, computerInput) {
    if (userInput === computerInput) {
        humamScore += 1;
        console.log(`You won!, the computer chose ${computerInput} AND you also chose ${userInput}`);
    } else {
        computerScore += 1;
        console.log(`You lose! The computer chose ${computerInput} BUT you chose ${userInput} `)
    }
    console.log(`Your score is:  ${humamScore} \n Computer's score is ${computerScore} `);
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        let c_input = computerChoice();
        let h_input = humanChoice();
        playRound(h_input, c_input);
    }
    console.log(` =============================== GAME OVER! ================================`);
    console.log(`YOUR OVERALL SCORE: ${humamScore}  \n COMPUTER'S SCORE: ${computerScore}`)
    console.log(`${ humamScore > computerScore ? "YOU WIN!" : "YOU LOSE!" } `);
}


playGame();