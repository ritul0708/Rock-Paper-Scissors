const choices = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
}

// const computerChoice = getComputerChoice();
// console.log(computerChoice);

const playRound = (playerSelection, computerSelection) => {
  let outString = '';
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      log = 'You Lose! Paper Beats Rock.';
    } else if (computerSelection === 'scissors') {
      log = 'You Win! Rock Beats Scissors.';
    } else {
      log = 'Tie Breaker! Play Again.';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      log = 'You Lose! Scissors Beats Paper.';
    } else if (computerSelection === 'rock') {
    log = 'You Win! Paper Beats Rock.';
    } else {
      log = 'Tie Breaker! Play Again.';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      log = 'You Lose! Rock Beats Scissors.';
    } else if (computerSelection === 'paper') {
      log = 'You Win! Scissors Beats Paper.'
    } else {
      log = 'Tie Breaker! Play Again.';
    }
  } else {
    log = 'Invalid Selection! Please Make Valid Selection by choosing among "Rock", "Paper", "Scissors". '
  }
  return log;
}


const game = () => {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose Rock, Paper, Scissors", 'rock');
    const computerSelection = getComputerChoice();
    console.log('playerSelection: ' + playerSelection);
    console.log('computerSelection: ' + computerSelection);
    let result = playRound(playerSelection, computerSelection)
    if (result.toLowerCase().search('win') > -1) {
      playerScore++
      console.log(result);
      console.log('playerScore: ' + playerScore, 'computerScore: ' + computerScore);
    } else if (result.toLowerCase().search('lose') > -1) {
      computerScore++
      console.log(result);
      console.log('playerScore: ' + playerScore, 'computerScore: ' + computerScore);
    } else {
      console.log(result);
      console.log('playerScore: ' + playerScore, 'computerScore: ' + computerScore);
    }
  }
  if (playerScore > computerScore) {
    return "You Win! Well Played, Want to Play Again."
  } else {
    return "Well Tried! Want to give this another shot."
  }
}

console.log(game());