const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserChoice(input){
    const choice = input.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];

    if (validChoices.includes(choice)){
        return choice;
    } else{
        return null;
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
    rl.question('Choose rock, paper, or scissors: ', (userInput) => {
        const userChoice = getUserChoice(userInput);

        if(!userChoice){
            console.log('Invalid choice. Please enter rock, paper, or scissors.');
        } else {
            const computerChoice = getComputerChoice();
            console.log(`You chose: ${userChoice}`);
            console.log(`Computer chose: ${computerChoice}`);

            const result = determineWinner(userChoice, computerChoice);
            console.log(result);
        }

        rl.close();
    });
}

playGame();