const hands = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0, tieScore = 0;

function getComputerChoice() {
  return hands[(Math.floor(Math.random() * hands.length))];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock") {
    console.log("Player has played the all-mighty ROCK!");

    if (computerSelection === "scissors") {
      console.log("The A.I chooses the measly SCISSORS!");
      console.log("[W] Player has defeated the evil, totally intelligent A.I !!!");
      playerScore++;
    } else if (computerSelection === "paper") {
      console.log("The A.I chooses the heaven-rendering PAPER!");
      console.log("[L] The A.I has defeated the PLAYER! May our hero be remembered...");
      computerScore++;
    } else {
      console.log("The A.I chooses the tiemaker, ROCK!");
      console.log("[T] You Player will continue to live the next battle");
      tieScore++;
    }
  } else if (playerSelection === "paper") {
    console.log("Player has played the tempest-summoning PAPER!");
    
    if (computerSelection === "rock") {
      console.log("The A.I chooses the measly ROCK!");
      console.log("[W] Player has defeated the evil, totally intelligent A.I !!!");
      playerScore++;
    } else if (computerSelection === "scissors") {
      console.log("The A.I chooses the heaven-rendering SCISSORS!");
      console.log("[L] The A.I has defeated the PLAYER! May our hero be remembered...");
      computerScore++;
    } else {
      console.log("The A.I chooses the tiemaker, PAPER!");
      console.log("[T] You Player will continue to live the next battle");
      tieScore++;
    }
  } else if (playerSelection === "scissors") {
    console.log("Player has played the reality-breaking SCISSORS!");
    
    if (computerSelection === "paper") {
      console.log("The A.I chooses the measly PAPER!");
      console.log("[W] Player has defeated the evil, totally intelligent A.I !!!");
      playerScore++;
    } else if (computerSelection === "rock") {
      console.log("The A.I chooses the heaven-rendering ROCK!");
      console.log("[L] The A.I has defeated the PLAYER! May our hero be remembered...");
      computerScore++;
    } else {
      console.log("The A.I chooses the tiemaker, SCISSORS!");
      console.log("[T] You Player will continue to live the next battle");
      tieScore++;
    }
  } else {
    console.log("Unknown weapon, the machine gods have been sent to delete it entirely");
  }
}

