function getRandomInteger (min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerChoice() { 
    let computerChoice = getRandomInteger(1, 3);  
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
    let playerChoice = tempPlayerChoice.toUpperCase(); 
     if(playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") { 
        alert("Valid! You can play the game!")
    } else alert("Invalid! Try again") 
    return playerChoice;
    
}
getPlayerChoice();