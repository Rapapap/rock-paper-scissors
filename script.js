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
    //komputer Options
    const komputerOptions = [`rock`, `paper`, `scissor`];
  };

  //Memanggil semua function
  startGame();
};

//start game function
game();
