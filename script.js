function getRandomInteger (min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
function getComputerChoice() { 
    let computerChoice = getRandomInteger(1, 3);  
    switch(computerChoice) { 
        case 1: 
        computerChoice = "Rock"; 
        break; 
        case 2: 
        computerChoice = "Paper"; 
        break; 
        case 3: 
        computerChoice = "Scissors"; 
        break;
    }
    return computerChoice;
} 
alert(getComputerChoice());