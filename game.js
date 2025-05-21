function getUserChoice(userChoice){
    const choices = ['rock', 'paper', 'scissors'];
    if (choices.includes(userChoice)){
        return userChoice;
    } else{
        return 'Invalid choice';
    }
}

function getComputerChoice(){
    const computerChoices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomChoice];
}

function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return 'It is a tie';
    }
    
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        return 'You won';
    } else{
        return 'Computer won';
    }
}

function playGame(){
    const userChoice = getUserChoice('rock');
    if (userChoice === 'Invalid choice'){
        console.log('Please enter a valid choice: rock, paper, or scissors');
        return;
    }
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
}

playGame();