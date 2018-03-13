let player1Choice = null
let player2Choice = null

const p1rock = () => {
  console.log("Player 1 has selected rock!");
  player1Choice = "rock"
}


const p1paper = () => {
  console.log("Player 1 has selected paper!");
  player1Choice = "paper"
}


const p1scissors = () => {
  console.log("Player 1 has selected scissors!");
  player1Choice = "scissors"
}

const p2rock = () => {
  console.log("Player 2 has selected rock!");
  player2Choice = "rock"
}


const p2paper = () => {
  console.log("Player 2 has selected paper!");
  player2Choice = "paper"
}

const p2scissors = () => {
  console.log("Player 2 has selected scissors!");
  player2Choice = "scissors"
}

const compare = (player1Choice, player2Choice) => {
  if (player1Choice === player2Choice) {
    alert ("The result is a tie!");
  }
  if (player1Choice === "rock") {
    if (player2Choice === "scissors") {
      alert ("rock wins");
    } else {
      alert ("paper wins");
    }
  }
  if (player1Choice === "paper") {
    if (player2Choice === "rock") {
      alert ("paper wins");
    } else {
      if (player2Choice === "scissors") {
        alert ("scissors wins");
      }
    }
    if (player1Choice === "scissors") {
      if (player2Choice === "rock") {
        alert ("rock wins");
      } else {
        if (player2Choice === "paper") {
          alert ("scissors wins");
        }
      }
    }
  }
}


// let userChoice =
// let computerChoice = Math.random();
// if (computerChoice < 0.34) {
//     computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors";
// }

// var compare = function(player1Choice, computerChoice) {
//     if(choice1 === choice2) {
//     return "The result is a tie!";
// }
// if(choice1 === "rock") {
//     if(choice2 === "scissors") {
//         return "rock wins";
//     } else {
//         return "paper wins";
//     }
// }
// if(choice1 === "paper") {
//     if(choice2 === "rock") {
//         return "paper wins";
//     } else {
//         if(choice2 === "scissors") {
//             return "scissors wins";
//     }
// }
// if(choice1 === "scissors") {
//     if(choice2 === "rock") {
//         return "rock wins";
//     } else {
//         if(choice2 === "paper") {
//             return "scissors wins";
//         }
//     }
// }
// }
// };
// console.log("User Choice: " + userChoice);
// console.log("Computer Choice: " + computerChoice);
// compare(userChoice, computerChoice);
