import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const buttonElements = document.querySelectorAll('button');

//VYTVOŘIT POLE S ÚDAJI O AKTUÁLNÍM STAVU HRY
const createArray = () => {
  const array = [];
  buttonElements.forEach((button) => {
    if (button.classList.contains('x')) {
      array.push('x');
    } else if (button.classList.contains('o')) {
      array.push('o');
    } else {
      array.push('_');
    }
  });

  return array;
};

let gameBoard = createArray();

// FUNKCE PRO API / HRAJE POČÍTAČ

const computerMove = async () => {
  const board = createArray();
  console.log('odesilam na api', board);

  const response = await fetch(
    'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ board, player: 'x' }),
    },
  );

  const data = await response.json();
  console.log('odpověd z api', data);

  const { x, y } = data.position;
  const index = x + y * 10;
  const button = buttonElements[index];

  button.classList.add('x');
  button.innerHTML = `
    <div class="hra__image-container x">
      <img class="hra__showing" src="podklady/cross-black.svg" alt="černý kříž" />
    </div>`;
  button.disabled = true;

  gameBoard[index] = 'x';
  currentPlayer = 'circle';
  document.querySelector(
    '.hra__player',
  ).innerHTML = `<img src="podklady/circle.svg" alt="bílý kruh"/>`;

  whoWon();
};

//ZJISTIT KDO VYHRÁL

const whoWon = () => {
  const winner = findWinner(createArray());
  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 100);
  } else if (winner === 'tie') {
    alert(`Hra skončila remízou.`);
  }

  console.log(winner);
};

buttonElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (currentPlayer !== 'circle') {
      return; //zabránit hrát když nemá
    }
    const clickedButton = event.currentTarget;
    const index = Array.from(buttonElements).indexOf(button);

    clickedButton.disabled = true;

    if (currentPlayer === 'circle') {
      clickedButton.classList.add('o');
      clickedButton.innerHTML = ` 
        <div class="hra__image-container">
        <img
          class="hra__showing"
          src="podklady/circle-black.svg"
          alt="černý kruh"
        />
        </div>`;

      gameBoard[index] = 'o';
      currentPlayer = 'cross';
      const playerElement = document.querySelector('.hra__player');
      playerElement.innerHTML = `<img src="podklady/cross.svg" alt="bílý kříž" />`;
    }

    whoWon();

    if (currentPlayer === 'cross' && findWinner(createArray()) === null) {
      setTimeout(() => {
        computerMove();
      }, 300);
    }
  });
});

//ZAMEZENÍ RESTARTU HRY
const restartElement = document.querySelector('.hra__restart');
restartElement.addEventListener('click', (event) => {
  if (window.confirm('Jste si jistí, že chcete hru restartovat?')) {
    window.open('hra.html', '_self');
  } else {
    event.preventDefault();
  }
});
