var playerchoice = 0;
var playerScore = 0;
var pcchoice = 0;
var pcScore = 0;
var winner = 0;

document.getElementById("message").innerHTML = ""

function play(choice){
    playerchoice = choice;

    pcchoice = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    //1-Pedra
    //2-Papel
    //3-Tesoura
    if((playerchoice == 1) && (pcchoice == 1)){
        winner = 0;
    }
    else if((playerchoice == 1) && (pcchoice == 2)){
        winner = 2;
    }
    else if((playerchoice == 1) && (pcchoice == 3)){
        winner = 1;
    }
    else if((playerchoice == 2) && (pcchoice == 1)){
        winner = 1;
    }
    else if((playerchoice == 2) && (pcchoice == 2)){
        winner = 0;
    }
    else if((playerchoice == 2) && (pcchoice == 3)){
        winner = 2;
    }
    else if((playerchoice == 3) && (pcchoice == 1)){
        winner = 2;
    }
    else if((playerchoice == 3) && (pcchoice == 2)){
        winner = 1;
    }
    else if((playerchoice == 3) && (pcchoice == 3)){
        winner = 0;
    }

    //remove os selecionados
    document.getElementById("player-choice-1").classList
    .remove('picked');
    document.getElementById("player-choice-2").classList
    .remove('picked');
    document.getElementById("player-choice-3").classList
    .remove('picked');
    document.getElementById("computer-choice-1").classList
    .remove('picked');
    document.getElementById("computer-choice-2").classList
    .remove('picked');
    document.getElementById("computer-choice-3").classList
    .remove('picked');

    //aplica a classe .picked que retorna a opacidade da img
    document.getElementById("player-choice-" + playerchoice).classList
    .add('picked');
    document.getElementById("computer-choice-" + pcchoice).classList
    .add('picked');

    if(winner == 0){
        document.getElementById("message").style.color = "#aab7b8";
        document.getElementById("message").innerHTML = "Draw"
    }
    else if(winner == 1){
        document.getElementById("message").style.color = "#8bade0";
        document.getElementById("message").innerHTML = "You win!";
        playerScore++;
    }
    else if(winner == 2){
        document.getElementById("message").style.color = "#cf97d6";
        document.getElementById("message").innerHTML = "PC win"
        pcScore++;
    }
    
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = pcScore;
}

function restart(){
    //remove os selecionados
    document.getElementById("player-choice-1").classList
    .remove('picked');
    document.getElementById("player-choice-2").classList
    .remove('picked');
    document.getElementById("player-choice-3").classList
    .remove('picked');
    document.getElementById("computer-choice-1").classList
    .remove('picked');
    document.getElementById("computer-choice-2").classList
    .remove('picked');
    document.getElementById("computer-choice-3").classList
    .remove('picked');

    //zera a pontuação
    playerScore = 0;
    pcScore = 0;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = pcScore;
}