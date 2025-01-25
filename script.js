let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3 + 1);
    if (randomChoice === 1) {
        return "rock";
    } else if (randomChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerChoice = getComputerChoice();

function playRound(humanChoice) {
    if (humanChoice !== computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
            displayResult(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++
        } else {
            displayResult(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++
        }
    } else {
        displayResult(`Draw! You both chose ${humanChoice}`);
    }
}


function displayResult(message){
    const result = document.querySelector('.result')
    result.textContent = message
    if(humanScore == 5 || computerScore == 5){
        humanScore === 5 ? result.textContent = "Player Wins" : result.textContent = "Computer Wins"

        rock.style.display = "none"
        paper.style.display = "none"
        scissors.style.display = "none"
    }
    document.querySelector('.human-score span').textContent = humanScore
    document.querySelector('.computer-score span').textContent = computerScore


}

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

function choiceRock(){
   playRound('rock')
}

function choicePaper(){
    playRound('paper')
}

function choiceScissors(){
    playRound('scissors')
}


rock.addEventListener('click', choiceRock)
paper.addEventListener('click', choicePaper)
scissors.addEventListener('click', choiceScissors)