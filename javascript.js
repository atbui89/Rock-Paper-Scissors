var selections = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;

function playRound(computerChoice, playerChoice) {
    var computerChoice = selections[Math.floor(Math.random() * selections.length)]
    var playerChoice = prompt("Rock, Paper, or Scissors?");
    console.log('The Computer chose ' + computerChoice + '.');
    console.log('You chose ' + playerChoice + '.');

    if (playerChoice.toLowerCase() == 'rock') {
        if (computerChoice == 'Rock') {
            console.log('Draw.');
            return ('Draw');
        } else if (computerChoice == 'Paper') {
            console.log('You lose! Paper beats Rock!');
            computerScore++;
            return ('You lose! Paper beats Rock!');
        } else {
            console.log('You win! Rock beats Scissors!');
            userScore++;
            return ('You win! Rock beats Scissors!');
        }
        } else if (playerChoice.toLowerCase() == 'paper') {
            if (computerChoice == 'Paper') {
                console.log('Draw.')
                return ('Draw');
            } else if (computerChoice == 'Scissors') {
                console.log('You lose! Scissors beats Paper!')
                computerScore++;
                return ('You lose! Scissors beats Paper!');
            } else {
                console.log('You win! Paper beats Rock!')
                userScore++;
                return ('You win! Paper beats Rock!');
            }
        } else if (playerChoice.toLowerCase() == 'scissors') {
            if (computerChoice == 'Scissors') {
                console.log('Draw.')
                return ('Draw');
            } else if (computerChoice == 'Rock') {
                console.log('You lose! Rock beats Scissors!')
                computerScore++;
                return ('You lose! Rock beats SCissors!');
            } else {
                console.log('You win! Scissors beats Paper!')
                userScore++;
                return ('You win! Scissors beats Paper!');
            }
        }
}

function game() {
    for (let i=1; i < 6; i++) {
        console.log('Game #' + i + '.');
        playRound();
        console.log('User Score: ' + userScore)
        console.log('Computer Score: ' + computerScore)
    }
    if (userScore == computerScore) {
        console.log('Draw! Try again!')
    } else if (userScore > computerScore) {
        console.log('You won the game!')
    } else {
        console.log('You lost the game!')
    }
}

