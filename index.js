const hands = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0, tieScore = 0;

function getComputerChoice() {
  return hands[(Math.floor(Math.random() * hands.length))];
}

function customMessages(string, condition) {
  upperString = string.toUpperCase();

  switch (condition) {
    case 'W':
      console.log(`The A.I chooses the measly ${upperString}!`);
      console.log("[W] Player has defeated the evil, totally intelligent A.I !!!");
      break;

    case 'L':
      console.log(`The A.I chooses the heaven-rendering ${upperString}!`);
      console.log("[L] The A.I has defeated the PLAYER! May our hero be remembered...");
      break;

    case 'T':
      console.log(`The A.I chooses the tiemaker, ${upperString}!`);
      console.log("[T] You Player will continue to live the next battle");
      break;
  
    default:
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    console.log("Player has played the all-mighty ROCK!");

    if (computerSelection === "scissors") {
      customMessages("scissors", 'W');
      playerScore++;
    } else if (computerSelection === "paper") {
      customMessages("paper", 'L');
      computerScore++;
    } else {
      customMessages("rock", 'T')
      tieScore++;
    }
  } else if (playerSelection === "paper") {
    console.log("Player has played the tempest-summoning PAPER!");
    
    if (computerSelection === "rock") {
      customMessages("rock", 'W');
      playerScore++;
    } else if (computerSelection === "scissors") {
      customMessages("scissors", 'L');
      computerScore++;
    } else {
      customMessages("paper", 'T');
      tieScore++;
    }
  } else if (playerSelection === "scissors") {
    console.log("Player has played the reality-breaking SCISSORS!");
    
    if (computerSelection === "paper") {
      customMessages("paper", 'W');
      playerScore++;
    } else if (computerSelection === "rock") {
      customMessages("rock", 'L');
      computerScore++;
    } else {
      customMessages("scissors", 'T');
      tieScore++;
    }
  } else {
    console.log("Unknown weapon, the machine gods have been sent to delete it entirely");
  }
}

function game() {
  let playerSelection = prompt("Pick you weapon, human");
  let computerSelection = getComputerChoice();

  playerSelection = playerSelection.toLowerCase();
  playRound(playerSelection, computerSelection);
  
  console.log(`Player Score: ${playerScore}\nA.I Score: ${computerScore}\nTies: ${tieScore}`);
}
