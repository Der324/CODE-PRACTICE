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

    let isAutoPlaying = false; 
    let intervalId;//to store the interval ID so we can clear it later
    
    //const autoPlay = () => {

    //}; 

    //It's better to use regular function than using arrow function above here,
    // because it's easier to read and understand for this case.
    // the regular function enable the use of Hoisting which means we can call the function before its declaration and no need to worry about the order of the code.
    
    function autoPlay() {
      if (!isAutoPlaying) {
        intervalId = setInterval(() => { //we use arrow function => here for cleaner syntax and easy to ready.
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000); 
        isAutoPlaying = true;

      } else {
        clearInterval(intervalId); // Stop the auto-play
        isAutoPlaying = false;  
      }
    }

    document.querySelector('.js-rock-button')
      .addEventListener('click', () => {
        playGame('rock');
      });

    document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGame('paper');
      });

    document.querySelector('.js-scissors-button')
      .addEventListener('click', () => {
        playGame('scissors');
      });

      //soln to 12s-exercise
    document.querySelector('.js-auto-play-button')
      .addEventListener('click', () => {
        autoPlay();
      });

      //Created a new resetScore function so
      // we can reuse this code.
      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
      }

      //Add an event listener for the reset score
      //button using .addEventListener
      document.querySelector('.js-reset-score-button')
        .addEventListener('click', () => {
          resetScore();
        });


        //using .addEventListener with a different type of event keydown.
        //keydown allows you to use a keyboard to play the game.
    document.body.addEventListener('keydown', (event) => {
      if (event.key === 'r') {
        playGame('rock');
      }else if (event.key === 'p') {
        playGame('paper');
      }else if (event.key === 's') {
        playGame('scissors')
      }
    });

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
        score.losses += 1;
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