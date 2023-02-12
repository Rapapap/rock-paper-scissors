//Function untuk menjalankan game
const game = () => {
  let pScore = 0;
  let kScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(`.intro button`);
    const introScreen = document.querySelector(`.intro`);
    const matchScreen = document.querySelector(`.match`);

    //saat play button di click, intro akan hilang
    playButton.addEventListener(`click`, () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };
  //play match function
  const playMatch = () => {
    const options = document.querySelectorAll(`.options button`);
    const playerItem = document.querySelector(`.player-item`);
    const komputerItem = document.querySelector(`.komputer-item`);
    const items = document.querySelectorAll(`.items img`);

    items.forEach((item) => {
      item.addEventListener(`animationend`, function () {
        this.style.animation = ``;
      });
    });
    //komputer Options
    const komputerOptions = [`rock`, `paper`, `scissor`];
    //function untuk button
    options.forEach((options) => {
      options.addEventListener(`click`, function () {
        //pilihan komputer
        const komputerNumber = Math.floor(Math.random() * 3); //dikali tiga karena math.random mengeluarkan angka random 0-1
        const komputerChoice = komputerOptions[komputerNumber];
        //console.log(komputerChoice);

        setTimeout(() => {
          //Call compare function
          compare(this.textContent, komputerChoice);
          //update img
          playerItem.src = `./assets/${this.textContent}.png`;
          komputerItem.src = `./assets/${komputerChoice}.png`;
        }, 2000);

        //animation
        playerItem.style.animation = "shakePlayer 2s ease";
        komputerItem.style.animation = "shakekomputer 2s ease";
      });
    });
  };
  //function update score
  const updateScore = () => {
    const playerScore = document.querySelector(`.player-score p`);
    const komputerScore = document.querySelector(`.komputer-score p`);
    playerScore.textContent = pScore;
    komputerScore.textContent = kScore;
  };

  //function untuk membandingkan pilihan
  const compare = (playerChoice, komputerChoice) => {
    const winner = document.querySelector(`.winner`);
    //check if draw
    if (playerChoice === komputerChoice) {
      winner.textContent = "It's a draw";
      return;
    }
    //check untuk rock
    if (playerChoice === `rock`) {
      if (komputerChoice === `scissor`) {
        winner.textContent = `Player Wins`;
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = `Computer Wins`;
        kScore++;
        updateScore();
        return;
      }
    }
    //check untuk paper
    if (playerChoice === `paper`) {
      if (komputerChoice === `scissor`) {
        winner.textContent = `Computer Wins`;
        kScore++;
        updateScore();
        return;
      } else {
        winner.textContent = `Player Wins`;
        pScore++;
        updateScore();
        return;
      }
    }
    //check untuk scissor
    if (playerChoice === `scissor`) {
      if (komputerChoice === `rock`) {
        winner.textContent = `Computer Wins`;
        kScore++;
        updateScore();
        return;
      } else {
        winner.textContent = `Player Wins`;
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Memanggil semua function
  startGame();
  playMatch();
};

//start game function
game();
