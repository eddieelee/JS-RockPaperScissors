// create function getUserChoice with a parameter of `userInput`
function getUserChoice(userInput) {
    // turn future `userInput` to lower case
    userInput = userInput.toLowerCase();
    // if there is a match return `userInput`
    if (userInput === 'paper' || userInput === 'rock' || userInput === 'scissors') {
        return userInput;
      // if no match prompt user for valid entry
    } else {
        return 'Please enter valid option';
    }
}

// create a function that will provide a random computer choice for each round
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'paper';
    } else if (randomNumber === 1) {
        return 'rock';
    } else {
        return 'scissors';
    }
}

// create a function `determineWinner` and pass in parameters
// `userChoice` and `computerChoice`
function determineWinner(userChoice, computerChoice) {
    // if there is a tie
    if (userChoice === computerChoice) {
        return 'It is a tie!';
    }
    // if user selects `'paper'`
    if (userChoice === 'paper') {
        // if computer selects `'scissors'`
        if (computerChoice === 'scissors') {
            return 'You have been cut by scissors.';
        } else {
            return 'You have covered rock.';
        }
    }
    // if user selects `'rock'`
    if (userChoice === 'rock') {
        // if computer selects `'paper'`
        if (computerChoice === 'paper') {
            return 'You have been covered by paper.';
        } else {
            return 'You have crushed scissors.';
        }
    }
    // if user selects `'scissors'`
    if (userChoice === 'scissors') {
        // if computer selectsion `'rock'`
        if (computerChoice === 'rock') {
            return 'You have been crushed by rock.';
        } else {
            return 'You have cut paper.';
        }
    }
}

function playGame() {
    // prompt user to make choice
    var promptUsesChoice = prompt('Please choose rock, paper or scissors.');
    // format user choice to lower case and check for valid word
    var userChoice = getUserChoice(promptUsesChoice);
    // call `getComputerChoice()` and assign to variable `computerChoice` 
    var computerChoice = getComputerChoice();
    // pass `userChoice` and `computerChoice` to the function `determineWinner`
    // and log to the console
    console.log('User = ' + userChoice);
    console.log('Computer = ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

// call `playGame` function
playGame();

/*
User = rock
Computer = rock
It is a tie!

User = paper
Computer = rock
You have covered rock.

User = scissors
Computer = rock
You have been crushed by rock.
*/