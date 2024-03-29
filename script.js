let scorePlayer = 0;
let scoreBot = 0;
const winner = 5;
const showScoreHuman = document.querySelector('#scoreHuman');
const showScoreBot = document.querySelector('#ScoreRobot');
const whowhin = document.querySelector('#winOrLose');
const btn = document.querySelectorAll('.btnHuman');

const playAgain = document.querySelector('.playAgain');

playAgain.addEventListener('click',refesh);

btn.forEach (btns => btns.addEventListener('click', function (e){
    let player = btns.innerHTML.toLocaleLowerCase();
    let bot = computerPlay();
    playerSelection(player, bot);
    checkWinner();   
}));

function computerPlay(){

    let randomNumber = Math.floor(Math.random() * (4 - 1 + 1)) + 1;;
    let gameResult = (randomNumber == 1) ? 'rock' :
    (randomNumber == 2) ? 'paper' : 'scissors';

    return gameResult;
}

function refesh(){
    window.location.reload();
}

function checkWinner (){
    const btnPlayAgain = document.querySelector('.hideButtons');
    if (scorePlayer == 5){
        btn.forEach(dis => dis.disabled = true);
        btnPlayAgain.classList.remove('hideButtons');
        
    }else if (scoreBot == 5){
        btn.forEach(dis => dis.disabled = true);
        btnPlayAgain.classList.remove('hideButtons');
        
    }
}



function playerSelection( playerSelection , computerSelection){
    console.log(`Selecion de Jugado: ${playerSelection}. Selecion del bot: ${computerSelection}`)
    console.log(scorePlayer);
   
    // Rock Logic
    if(playerSelection == 'rock' && computerSelection == 'rock'){
        
        return whowhin.textContent = "Is a Tie";
        
    }else if(playerSelection == 'rock' && computerSelection == 'paper'){
        scoreBot = scoreBot + 1;
        whowhin.textContent = 'You Lose';
        return showScoreBot.textContent = `${scoreBot}`;
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        scorePlayer = scorePlayer + 1;
        whowhin.textContent = 'You Win';
        return showScoreHuman.textContent = `${scorePlayer}`;
        
    }

    // Paper logic 
    if(playerSelection == 'paper' && computerSelection == 'paper'){
        
        return whowhin.textContent = "Is a Tie";
    }else if(playerSelection == 'paper' && computerSelection == 'rock') {
        scorePlayer = scorePlayer + 1;
        whowhin.textContent = 'You Win';
        return showScoreHuman.textContent = `${scorePlayer}`;
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        scoreBot = scoreBot + 1;
        whowhin.textContent = 'You Lose';
        return showScoreBot.textContent = `${scoreBot}`;
    }

    //scissors Logic
    if(playerSelection == 'scissors' && computerSelection == 'scissors'){

        return whowhin.textContent = "Is a Tie";
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){

        scoreBot = scoreBot + 1;
        whowhin.textContent = 'You Lose';
        return showScoreBot.textContent = `${scoreBot}`;
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){

        scorePlayer = scorePlayer + 1;
        whowhin.textContent = 'You Win';
        return showScoreHuman.textContent = `${scorePlayer}`;
    }
    
}

