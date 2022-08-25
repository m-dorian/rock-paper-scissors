let computerChoice; 
let playerChoice; 
let winner; 
let playerScore = 0;
let computerScore = 0; 
const resetButton = document.querySelector('.reset-button'); 
const scoreDisplay = document.querySelector('.score-display'); 
const playButton = document.querySelector('.play-button'); 

scoreDisplay.textContent = `Score: ${playerScore} - ${computerScore}`;

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
    let idName = e.target.id; 
    const playerDisplay = document.querySelector('.player-display'); 
    switch(idName) { 

        case 'paper': 
        playerDisplay.textContent = '🤚️'; 
        playerChoice = 'PAPER'
        break;

        case 'rock': 
        playerDisplay.textContent = '✊️'; 
        playerChoice = 'ROCK'; 
        break; 

        case 'scissors': 
        playerDisplay.textContent = '✌️'; 
        playerChoice = 'SCISSORS'; 
        break;  
    }
}) 

playButton.addEventListener('click', function(){ 
    const winnerDisplay = document.querySelector('.winner-display'); 
    const scoreDisplay = document.querySelector('.score-display'); 

    if(typeof(playerChoice) == 'undefined') { 
        alert('You have to choose a weapon before you can play!'); 
    } 
    getComputerChoice(); 
    getWinner();
    switch(winner){ 
        case 'player': 
        winnerDisplay.textContent = 'Player Won!'; 
        winnerDisplay.style.backgroundColor = 'green';
        break; 

        case 'computer': 
        winnerDisplay.textContent = 'Computer Won!'; 
        winnerDisplay.style.backgroundColor = 'red';
        break; 

        case 'tie': 
        winnerDisplay.textContent = 'Tie!'; 
        winnerDisplay.style.backgroundColor = 'purple';
        break; 
        
        
    } 
    getScore(); 
scoreDisplay.textContent = `Score: ${playerScore} - ${computerScore}`;
      
}) 

resetButton.addEventListener('click', () => { 
    window.location.reload();
})
