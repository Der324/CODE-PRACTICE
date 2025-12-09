   const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,  //used default operator
      ties: 0
    };

    updateScoreElement();

    let isAutoPlaying = false; 
    let intervalId;


    //------AUTO PLAY------
    function autoPlay() {
      if (!isAutoPlaying) {
        intervalId = setInterval(() => { 
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000); 

        isAutoPlaying = true;


        document.querySelector('.js-auto-play-button')
          .innerHTML = 'Stop Playing';

      } else {
        clearInterval(intervalId); 
        isAutoPlaying = false;  


        
        document.querySelector('.js-auto-play-button')
          .innerHTML = 'Auto Play';
          
      }
    }

    //---BUTTON EVENTS---

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

    
    document.querySelector('.js-auto-play-button')
      .addEventListener('click', () => autoPlay());

    document.querySelector('.js-reset-score-button')
      .addEventListener('click', () => showResetConfirmation());

      //----RESET LOGIC---

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;


        localStorage.setItem('score', JSON.stringify(score));
        updateScoreElement();
      }


      function showResetConfirmation() {
        document.querySelector('.js-reset-confirmation')
          .innerHTML = `
          <p>Are you sure you want reset the score?</p>
          <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
          <button class="js-reset-confirm-no reset-confirm-button">No</button>
        `;
        const yesButton = document.querySelector('.js-reset-confirm-yes');
        const noButton = document.querySelector('.js-reset-confirm-no');

        

       if (yesButton) {
        yesButton.addEventListener('click', () =>{
          resetScore();
          hideResetConfirmation();
        });
       }

       if (noButton) {
        noButton.addEventListener('click', () => {
          hideResetConfirmation();
        });
       }
      }

      function hideResetConfirmation() {
        document.querySelector('.js-reset-confirmation')
          .innerHTML = '';
      }

      //----KEYBOARD CONTROLS----

      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
          playGame('rock');
        } else if (event.key === 'p') {
          playGame('paper');
        } else if (event.key === 's') {
          playGame('scissors');
        } else if (event.key === 'a') {
          autoPlay();
        } else if (event.key === 'Backspace') {
          showResetConfirmation();
        }
      });

      //----GAME LOGIC----

      function playGame(playerMove) {
        const pickComputerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') result = 'You lose.';
          else if (computerMove === 'paper') result = 'You win.';
          else result = 'Its a Tie.';
        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') result = 'You win.';
          else if (computerMove === 'paper') result = 'Its a Tie.';
          else result = 'You lose.';
        }else if (playerMove === 'rock') {
          if (computerMove === 'rock') result = 'Its a Tie.';
          else if (computerMove === 'paper') result = 'You lose.';
          else result = 'You win.';
       }

       if (result === 'You win.') score.wins++;
       else if (result === 'You lose.') score.losses++;
       else score.ties++;

       localStorage.setItem('score', JSON.stringify(score));
       updateScoreElement();

       document.querySelector('.js-result').innerHTML = result;

       document.querySelector('.js-moves').innerHTML = `
       You
       <img src="images/${playerMove}-emoji.png" class="move-icon" alt="${playerMove}">
       <img src="images/${computerMove}-emoji.png" class="move-icon" alt="${computerMove}">
       Computer

       `;
      }

      //----UI UPDATE----

      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      //----COMPUTER MOVE----

      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber < 1 / 3) computerMove = 'rock';
        else if (randomNumber < 2 / 3) computerMove = 'paper';
        else computerMove = 'scissors';

        return computerMove;
      }

