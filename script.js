function gameRockPaperScissors(playerInput) {
    
    // function getPlayerChoice(playerInput) {
    //     return playerInput;
    // }

    function getComputerChoice() {

        let choice = random(1,3);
        let computerChoice;
        if (choice == 1) {
            return computerChoice = "Rock";
        } else if (choice === 2) {
            return computerChoice = "Paper";
        } else {
            return computerChoice = "Scissors";
        }
    }
    
        //Function to calculate random number for choice
    function random(min, max) {  
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      function playRound(playerChoice, computerChoice) {
        let roundWinner
        if (computerChoice == playerChoice) {
            return roundWinner = "TIE";
        } else if (((playerChoice == "rock")&&(computerChoice == "scissors")) || ((playerChoice == "paper")&&(computerChoice == "rock")) || ((playerChoice == "scissors")&&(computerChoice == "paper"))) {
            return roundWinner = "Player Wins";
        } else {
            return roundWinner = "Computer Wins";
        }
      }

      let playerWinCount = 0;
      let computerWinCount = 0;
      let roundCount = 0;

      document.querySelector("#rps-choices").addEventListener('click', (event) => {
        let target = event.target;
            switch(target.id) {
                case 'rock':{
                    game(target.id);
                    break;
                }
                case 'papper':{
                    return game(target.id);
                break;
            }
                case 'scissors':{
                    return game(target.id);
                break;
            }
                default:
                    break;
            }
      })

    const para = document.createElement("p");



      //for (let i = 0; i < 5; i++) {
        function game(playerInput) {
                //document.querySelector("#score").removeChild(para);
                para.innerText = "";
                const playerChoice = playerInput;
                const computerChoice = getComputerChoice().toLowerCase();
                para.innerText += "Player draws: " + playerChoice + "\n";
                para.innerText += "Computer draws: " + computerChoice + "\n";
                let roundWinner = playRound(playerChoice, computerChoice);
                if (roundWinner == "Player Wins"){
                    playerWinCount++;
                } else if (roundWinner == "Computer Wins") {
                    computerWinCount++;
                }
                para.innerText += `${roundWinner}\nPlayer has: ${playerWinCount} wins\nComputer has: ${computerWinCount} wins\n`;
                roundCount++;
            //}
                let winner = "TIE";
                if (playerWinCount > computerWinCount){
                    winner = "Player";
                  } else if (playerWinCount < computerWinCount){
                    winner = "Computer";
                  } 
                  if (playerWinCount == 5) {
                    para.innerText += "Player has won the game with 5 points\n";
                    playerWinCount = 0;
                    computerWinCount = 0;
                    roundCount = 0;
                } else if (computerWinCount == 5){
                    para.innerText += "Computer has won the game with 5 point\n";
                    playerWinCount = 0;
                    computerWinCount = 0;
                    roundCount = 0;
                } else {
                    para.innerText += `After ${roundCount} ${roundCount == 1 ? "round" : "rounds"} the winner is ${winner}\n\n`;
                }


            }
            document.querySelector("#score").appendChild(para);
            

    //   console.log(playerChoice);
    //   console.log(computerChoice);
    //   console.log(playRound(playerChoice, computerChoice));
}



gameRockPaperScissors();