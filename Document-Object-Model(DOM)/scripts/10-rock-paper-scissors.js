   const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,  //used default operator
      ties: 0
    };

    updateScoreElement();

    //if (score === null) {}
    /*
    if (!score) {
      score = {
        wins: 0,
        losses: 0,
        ties: 0
      }
    }
    */


    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        }else if (computerMove === 'paper') {
          result = 'You win.';
        }else if (computerMove === 'scissors') {
          result = 'Its a Tie.';
        }

      }else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
          result = 'You win.'
        }else if (computerMove === 'paper') {
          result = 'Its a Tie.';
        }else if (computerMove === 'scissors') {
          result = 'You lose.';
        }


      }else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
          result = 'Its a Tie';
        }else if (computerMove === 'paper') {
          result = 'You lose.';
        }else if (computerMove === 'scissors') {
          result = 'You win.';
        }
      }

      if (result === 'You win.') {
        score.wins += 1;
      }else if (result === 'You lose.') {
        score.loses += 1;
      }else if (result === 'Its a Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      
      updateScoreElement();

      document.querySelector('.js-result')
        .innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove}-emoji.png" alt="rock-emoji" class="move-icon">
      <img src="images/${computerMove}-emoji.png" alt="scissors-emoji" class="move-icon">
    Computer.`;


     /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
    }


    function updateScoreElement() {

      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, 
        Losses: ${score.losses}, Ties: ${score.ties}`;

    }

    function pickComputerMove(){
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      }else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      }else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }