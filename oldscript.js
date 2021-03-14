function computerPlay(){

    let randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
    
    let gameResult = (randomNumber == 1) ? 'rock' :
    (randomNumber == 2) ? 'paper' :
    'scissors';
    return gameResult;
}
// This function adds user seleccion between rock,paper or scissor
function playerPlay(){
    let userSelection = prompt('Choose rock , paper or scissor','scissors');
    
    
    return userSelection.toLowerCase();
}

//in this fuction is the logic of the game
function playerSelection( playerSelection , computerSelection){

    computerSelection = computerPlay();
    
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        
        return 'Tie';
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){

        return 'You lose!paper covers rock';
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){

        return 'You win! rock crushes paper';
    }

    if(playerSelection == 'paper' && computerSelection == 'paper'){
        
        return 'Tie';
    }else if(playerSelection == 'paper' && computerSelection == 'rock') {

        return 'You win! Paper covers rock';
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){

        return 'You lose Scissors cuts paper';
    }

    if(playerSelection == 'scissors' && computerSelection == 'scissors'){

        return 'Tie';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){

        return 'You lose Rock crushes scissors';
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){

        return 'You win Scissors cuts paper';
    }else{
        return 'something went wrong'
    }   

    
}

function game(){

    let playerPoints = 0;
    let botPoints = 0;
    let whoWin;
    let tie;
    let searchWinner;

    for(let i = 0 ; i < 5; i++ ){
    whoWin = playerSelection(playerPlay(),"ChangueVariable")
    tie = whoWin.search('Tie');
    searchWinner  = whoWin.search('win');
    
    if(tie == 0){
        console.log('Nadie gana Puntos');
    }else if (searchWinner == 4){
        playerPoints = playerPoints + 1;
    }else{
        botPoints = botPoints + 1; 
    }
    console.log( `La puntuacion del Jugador es ${playerPoints} y del bot es ${botPoints}` );
    }

    return ((playerPoints == botPoints) ? 'Empate' :
    (playerPoints > botPoints) ? 'Ganaste' : 'Perdiste');
}
//
//a


// console.log(game());