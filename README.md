# The Odin Project \Rock-Paper-Scissors\

```javascript
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
  const randomChoice = Math.floor(Math.random() * 3 + 1)
  if(randomChoice === 1){
    return "Rock".toLowerCase()
  }else if(randomChoice === 2){
    return "Paper".toLowerCase()
  }else{
    return "Scissors".toLowerCase()
  }
}

function getHumanChoice(){
  const choice = prompt(`Enter any of the following choice: "Rock", "Paper", "Scissors"`).toLowerCase()
  if(choice != ""){
    return choice;
  }
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice !== computerChoice){
    if(humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock"){
      computerScore++
      console.log(computerScore)
      return `You lose! ${computerChoice} beats ${humanChoice}`
    }else{
      humanScore++
      console.log(humanScore)
      return `You Win! ${humanChoice} beats ${computerChoice}`
    }
  }else{
    return 'Draw'
  }
}

function playGame(){
  
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();  
    console.log(humanSelection)
    console.log(computerSelection)
  
    console.log(playRound(humanSelection, computerSelection))
  }
}
```
