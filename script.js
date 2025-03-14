function gameRockPaperScissors() {
    
    function getPlayerChoice(playerChoice) {
        return playerChoice;
    }

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

      //event listener for buttons inputs
      const rpsChoice = document.querySelector("#rps-choices");

      rpsChoice.addEventListener('click', (event) => {
        let target = event.target;
            switch(target.id) {
                case 'rock':{
                        return getPlayerChoice(target.id);
                    break;
                }
                case 'papper':{
                    return getPlayerChoice(target.id);
                break;
            }
                case 'scissors':{
                    return getPlayerChoice(target.id);
                break;
            }
                default:
                    break;
            }
      })





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

      //for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice().toLowerCase();
        const computerChoice = getComputerChoice().toLowerCase();
        console.log("Player draws: " + playerChoice);
        console.log("Computer draws: " + computerChoice);
        let roundWinner = playRound(playerChoice, computerChoice);
        if (roundWinner == "Player Wins"){
            playerWinCount = ++playerWinCount;
        } else if (roundWinner == "Computer Wins") {
            computerWinCount = ++computerWinCount;
        }
        console.log(`${roundWinner}\nPlayer has: ${playerWinCount} wins\nComputer has: ${computerWinCount} wins`);
      //}
      let winner = "TIE";

      if (playerWinCount > computerWinCount){
        winner = "Player";
      } else if (playerWinCount < computerWinCount){
        winner = "Computer";
      } 

      console.log("The game has ended.\nAfter 5 rounds the winner is:" + winner);

    //   console.log(playerChoice);
    //   console.log(computerChoice);
    //   console.log(playRound(playerChoice, computerChoice));
}

//gameRockPaperScissors();