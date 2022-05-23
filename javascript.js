var selections = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;

document.getElementById("rock").onclick = playRound;
document.getElementById("paper").onclick = playRound;
document.getElementById("scissors").onclick = playRound;

function checkWinner() {
    if (userScore == 5) {
        results.innerHTML += 'Game Over. You were the first to reach 5 points' + "<br />";
    } else if (computerScore == 5) {
        results.innerHTML += 'Game Over. The Computer was the first to reach 5 points' + "<br />";
    }
}

function playRound(computerChoice, playerChoice) {
    var computerChoice = selections[Math.floor(Math.random() * selections.length)];
    var playerChoice = this.id;

    results.innerHTML += 'The Computer chose ' + computerChoice + '.' + "<br />";
    results.innerHTML += 'You chose ' + playerChoice + '.' + "<br />";

    if (playerChoice.toLowerCase() == 'rock') {
        if (computerChoice == 'Rock') {
            results.innerHTML += 'Draw.' + "<br />";
            runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
        } else if (computerChoice == 'Paper') {
            computerScore++;
            results.innerHTML += 'You lose! Paper beats Rock!' + "<br />";
            runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
        } else {
            userScore++;
            results.innerHTML += 'You win! Rock beats Scissors!' + "<br />";
            runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
            }
        } else if (playerChoice.toLowerCase() == 'paper') {
            if (computerChoice == 'Paper') {
                results.innerHTML += 'Draw.' + "<br />";
                runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
            } else if (computerChoice == 'Scissors') {
                computerScore++;
                results.innerHTML += 'You lose! Scissors beats Paper!' + "<br />";
                runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
            } else {
                userScore++;
                results.innerHTML += 'You win! Paper beats Rock!' + "<br />";
                runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
            }
        } else if (playerChoice.toLowerCase() == 'scissors') {
            if (computerChoice == 'Scissors') {
                results.innerHTML += 'Draw.' + "<br />";
                runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
            } else if (computerChoice == 'Rock') {
                computerScore++;
                results.innerHTML += 'You lose! Rock beats Scissors!' + "<br />";
                runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
            } else {
                userScore++;
                results.innerHTML += 'You win! Scissors beats Paper!' + "<br />";
                runningScore.innerHTML = "User Score : " + userScore + " Computer Score : " + computerScore;
            }
        }
        checkWinner();
    }



function game() {
    for (let i=1; i < 1000; i++) {
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

function gameOld() {
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

