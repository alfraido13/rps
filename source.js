function playRound(ps, cs){
    if (ps===rock && cs ===paper){
        console.log( "You Lose, paper beats rock");
    } else     if (ps===rock && cs ===scissors){
        console.log( "You win, rock beats scissors");
    }  else     if (ps===scissors && cs ===paper){
        console.log( "You win, scissors beats paper");
    }  else     if (ps===scissors && cs ===rock){
        console.log( "You Lose, rock beats scissors");
    }  else     if (ps===paper && cs ===rock){
        console.log( "You win, paper beats rock");
    }  else     if (ps===paper && cs ===scissors){
        console.log( "You Lose, scissors beats paper");
    }  else     if (ps === cs){
        console.log( "It's a draw");
    } else console.log ("Enter: Rock, paper or scissors")
}