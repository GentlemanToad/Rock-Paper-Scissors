    const r = "rock";
    const p = "paper";
    const s = "scissors";
    const cWin = "Computer Wins!"
    const pWin = "Player Wins!"

    const computerPlay = () => {
    let randNo = Math.floor(Math.random() * 4) + 1; 
    if (randNo == 1) {
        return r;
    } else if (randNo == 2){
        return p;
    }else{
        return s;
    }
    
}
function playRound (comp, userChoice) {
    if(comp == userChoice){
        return 'Draw';
    }else if(comp == r && userChoice == s){
        return cWin;
    }else if(comp == r && userChoice == p){
        return pWin;
    }else if(comp== p && userChoice == r){
        return cWin;
    }else if (comp == p && userChoice == s){
        return pWin;
    }
    else if(comp == s && userChoice == p){
        return cWin;
    }else if(comp == s && userChoice == r){
        return pWin;
    }
}
function game() {
    for(i = 4; i >= 0; i--){
        const comp = computerPlay();
        const userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        console.log(`${comp} vs ${userChoice} ` + playRound(comp, userChoice));
    }
    
}


game();