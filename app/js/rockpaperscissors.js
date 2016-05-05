////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.    
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    /*
        For testing, I drop this into repl.it with the following code at the top:
        
        var winner;
        var playerMove = 'rock';
        var computerMove = 'rock';
        
        I can then change the actual inputs to get test results.
        I also remove the "return" statement and have console.log(winner) instead at the end.
        
    */
    
    switch(playerMove){
            
        case 'rock': 
            switch(computerMove){
                case 'rock':
                    winner = 'tie';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                case 'scissors':
                    winner = 'player';
                    break;
                default:
                    winner = 'null';
                    alert('There is an error!');
            }
            break;
            
        case 'paper': 
            switch(computerMove){
                case 'rock':
                    winner = 'player';
                    break;
                case 'paper':
                    winner = 'tie';
                    break;
                case 'scissors':
                    winner = 'computer';
                    break;
                default:
                    winner = 'null';
                    alert('There is an error!');
            }
            break;        
            
        case 'scissors': 
            switch(computerMove){
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'player';
                    break;
                case 'scissors':
                    winner = 'tie';
                    break;
                default:
                    winner = 'null';
                    alert('There is an error!');
            }
            break;
            
        default: 
            winner = 'null';
            alert('There is an error!');
    }
    
    return winner;
}

function playToFive() {
    
    // Console announcement
    console.log("Let's play Rock, Paper, Scissors");
    
    // Declare and initialize variables used
    var winningScore = 5;
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var roundWinner;
    var finalWinner;
    var firstPlace;
    var secondPlace;
    var victoryString;
    var gameCount = 0;
    var gameLimit = 100;
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    while(playerWins < winningScore && computerWins < winningScore && gameCount < gameLimit){
        
        console.log("Let's Play!");
        
        // Get inputs
        playerMove = getPlayerMove();
        console.log('playerMove is:' + playerMove.toString());
        computerMove =  getComputerMove();
        console.log('computerMove is:' + computerMove.toString());

        // Get winner
        roundWinner = getWinner(playerMove, computerMove);
        console.log(roundWinner + " won round " + gameCount.toString() + "!");

        if(roundWinner === 'computer'){
            computerWins += 1;
        } else if(roundWinner === 'player'){
            playerWins += 1;
        } else if(roundWinner === 'tie'){
            // do nothing      
        } else {
            alert('There is an error!');
        }
        
        // This keeps us out of an infinite loop.
        gameCount += 1;
        
    }
    
    if (gameCount === gameLimit){
        victoryString = 'It is a tie in the end. No one won!';
        return victoryString;
    } else if(playerWins > computerWins){
        finalWinner = 'Player wins';
        firstPlace = playerWins;
        secondPlace = computerWins;
    } else if(computerWins > playerWins){
        finalWinner = 'Computer wins';
        firstPlace = computerWins;
        secondPlace = playerWins; 
    } else{
        alert('There is an error!');
    }
    
	victoryString = finalWinner + ' ' + firstPlace.toString() + '-' + secondPlace.toString() + '!';
    return victoryString;
}


function playTo(X) {
    
    // Console announcement
    console.log("Let's play Rock, Paper, Scissors");
    
    // Declare and initialize variables used
    var winningScore = X;
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var roundWinner;
    var finalWinner;
    var firstPlace;
    var secondPlace;
    var victoryString;
    var gameCount = 0;
    var gameLimit = 100;
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    while(playerWins < winningScore && computerWins < winningScore && gameCount < gameLimit){
        
        console.log("Let's Play!");
        
        // Get inputs
        playerMove = getPlayerMove();
        console.log('playerMove is:' + playerMove.toString());
        computerMove =  getComputerMove();
        console.log('computerMove is:' + computerMove.toString());

        // Get winner
        roundWinner = getWinner(playerMove, computerMove);
        console.log(roundWinner + " won round " + gameCount.toString() + "!");

        if(roundWinner === 'computer'){
            computerWins += 1;
        } else if(roundWinner === 'player'){
            playerWins += 1;
        } else if(roundWinner === 'tie'){
            // do nothing      
        } else {
            alert('There is an error!');
        }
        
        // This keeps us out of an infinite loop.
        gameCount += 1;
        
    }
    
    if (gameCount === gameLimit){
        victoryString = 'It is a tie in the end. No one won!';
        return victoryString;
    } else if(playerWins > computerWins){
        finalWinner = 'Player wins';
        firstPlace = playerWins;
        secondPlace = computerWins;
    } else if(computerWins > playerWins){
        finalWinner = 'Computer wins';
        firstPlace = computerWins;
        secondPlace = playerWins; 
    } else{
        alert('There is an error!');
    }
    
	victoryString = finalWinner + ' ' + firstPlace.toString() + '-' + secondPlace.toString() + '!';
    return victoryString;
}
