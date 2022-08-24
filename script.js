let computerChoice; 
let playerChoice; 
let winner; 
let playerScore = 0;
let computerScore = 0; 

function getRandomInteger (min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerChoice() { 
     computerChoice = getRandomInteger(1, 3); 
     const computerDisplay = document.querySelector('.computer-display');
    switch(computerChoice) { 
        case 1: 
        computerChoice = "ROCK"; 
        computerDisplay.textContent = '✊️'; 
        break; 
        case 2: 
        computerChoice = "PAPER"; 
        computerDisplay.textContent = '🤚️';
        break; 
        case 3: 
        computerChoice = "SCISSORS"; 
        computerDisplay.textContent = '✌️';
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
        break;

        case "PAPER": 
        if(computerChoice === "SCISSORS") { 
            winner = "computer";
        } else if(computerChoice === "ROCK") { 
            winner = "player"; 
        } else winner = "tie"; 
        break;

        case "SCISSORS": 
        if(computerChoice === "ROCK") { 
            winner = "computer";
        } else if(computerChoice === "PAPER") { 
            winner = "player"; 
        } else winner = "tie"; 
        break;
    } 
    switch(winner) { 
        case "computer": 
        alert(`You lost! ${computerChoice} beats ${playerChoice}.`); 
        break; 

        case "player": 
        alert(`You won! ${playerChoice} beats ${computerChoice}.`) 
        break; 

        case "tie": 
        alert(`Tie!`) 
        break;

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

window.addEventListener('click', function(e){ 
    let className = e.target.className; 
    let idName = e.target.id; 
    const playerDisplay = document.querySelector('.player-display'); 
    switch(idName) { 

        case 'paper': 
        playerDisplay.textContent = '🤚️'; 
        break;

        case 'rock': 
        playerDisplay.textContent = '✊️'; 
        break; 

        case 'scissors': 
        playerDisplay.textContent = '✌️'; 
        break;  
    }
    getComputerChoice();
}) 


