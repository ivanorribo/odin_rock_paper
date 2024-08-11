function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1; //get a random number between 1 and 3
    if (num == 1) {
        return ('rock');
    } else if (num == 2) {
        return ('paper');
    } else {
        return ('scissors')
    }
}

function getHumanChoice() {
    let user = prompt('Choose rock, paper or scissors');
    let answer = user.toLocaleLowerCase();
    return answer;
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let i = 0
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 'scissors' && computerChoice == 'paper'){
            humanScore += 1;
            console.log('You won. Scissors beats Paper');
        } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            humanScore += 1;
            console.log('You won. Rock beats Scissors');
        } else if(humanChoice == 'paper' && computerChoice == 'rock') {
            humanScore += 1;
            console.log('You won. Paper beats Rock');
        } else if(computerChoice == 'scissors' && humanChoice == 'paper'){
            computerScore += 1;
            console.log('You lost. Scissors beats Paper');
        } else if (computerChoice == 'rock' && humanChoice == 'scissors') {
            computerScore += 1;
            console.log('You lost. Rock beats Scissors');
        } else if(computerChoice == 'paper' && humanChoice == 'rock') {
            computerScore += 1;
            console.log('You lost. Paper beats Rock');
        } else {
            console.log('Draw. You choose the same as the computer. try again. This round doesn\'t count for the best of five');
            i--;
        }
    }
    for (i; i <  5; i++) {
        let comchoice = getComputerChoice();
        let userchoice = getHumanChoice();
        playRound(userchoice, comchoice);
    }

    if (humanScore > computerScore) {
        console.log('Congratulations you won the game.');
    } else if (humanScore < computerScore) {
        console.log('I\'m sorry. You lost the game.')
    } else {
        console.log('The game is a draw');
    }

}

playGame();
