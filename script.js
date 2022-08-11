let computerChoice; 
let playerChoice; 
let winner; 
let playerScore = 0;
let computerScore = 0; 

let numberOfRounds = Number(prompt("How many rounds do you want to play?"));

function getRandomInteger (min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerChoice() { 
     computerChoice = getRandomInteger(1, 3);  
    switch(computerChoice) { 
        case 1: 
        computerChoice = "ROCK"; 
        break; 
        case 2: 
        computerChoice = "PAPER"; 
        break; 
        case 3: 
        computerChoice = "SCISSORS"; 
        break;
    }
    return computerChoice;
} 
function getPlayerChoice() { 
    let tempPlayerChoice = prompt("What weapon do you select? Rock, paper or scissors?!");
    // Make user input case insensitive //
    playerChoice = tempPlayerChoice.toUpperCase(); 
     if(playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") { 
        alert("Valid! You can play the game!")
    } else alert("Invalid! Try again") 
    return playerChoice;
    
}
function getWinner() { 
     
    switch(playerChoice) { 
        case "ROCK": 
        if(computerChoice === "PAPER") { 
            winner = "computer";
        } else if(computerChoice === "SCISSORS") { 
            winner = "player"; 
        } else winner = "tie";

        case "PAPER": 
        if(computerChoice === "SCISSORS") { 
            winner = "computer";
        } else if(computerChoice === "ROCK") { 
            winner = "player"; 
        } else winner = "tie";

        case "SCISSORS": 
        if(computerChoice === "ROCK") { 
            winner = "computer";
        } else if(computerChoice === "PAPER") { 
            winner = "player"; 
        } else winner = "tie";
    } 
    return winner;
} 
function getScore() { 
    if(winner === "computer") { 
        computerScore++;
    } else if (winner === "player") { 
        playerScore++;
    }
}
