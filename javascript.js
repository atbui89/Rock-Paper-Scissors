var selections = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    var computerChoice = selections[Math.floor(Math.random() * selections.length)]
    var playerChoice = prompt("Rock, Paper, or Scissors?");

    console.log('The Computer chose ' + computerChoice + '.');
    console.log('You chose ' + playerChoice + '.');


  if (playerChoice.toLowerCase() == 'rock') {
      if (computerChoice == 'Rock') {
          console.log('Draw.');
      } else if (computerChoice == 'Paper') {
          console.log('You lose! Paper beats Rock!');
      } else {
          console.log('You win! Rock beats Scissors!');
      }
    } else if (playerChoice.toLowerCase() == 'paper') {
        if (computerChoice == 'Paper') {
            console.log('Draw.')
        } else if (computerChoice == 'Scissors') {
            console.log('You lose! Scissors beats Paper!')
        } else {
            console.log('You win! Paper beats Rock!')
        }
    } else if (playerChoice.toLowerCase() == 'scissors') {
        if (computerChoice == 'Scissors') {
            console.log('Draw.')
        } else if (computerChoice == 'Rock') {
            console.log('You lose! Rock beats Scissors!')
        } else {
            console.log('You win! Scissors beats Paper!')
        }
    }
}