import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.disabled = true;
    if (currentPlayer === 'circle') {
      button.classList.add('o');
      button.innerHTML = ` 
        <div class="hra__image-container">
        <img
          class="hra__showing"
          src="podklady/circle-black.svg"
          alt="černý kruh"
        />
        </div>`;
      console.log(createArray());
      currentPlayer = 'cross';
      const playerElement = document.querySelector('.hra__player');
      playerElement.innerHTML = `<img src="podklady/cross.svg" alt="bílý kříž" />`;
    } else {
      button.classList.add('x');
      button.innerHTML = ` 
        <div class="hra__image-container x">
        <img
          class="hra__showing"
          src="podklady/cross-black.svg"
          alt="černý kříž"
        />
        </div>`;
      console.log(createArray());
      currentPlayer = 'circle';
      const playerElement = document.querySelector('.hra__player');
      playerElement.innerHTML = `<img src="podklady/circle.svg" alt="bílý kruh"/>`;
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

//VYTVOŘIT POLE S ÚDAJI O AKTUÁLNÍM STAVU HRY
function createArray() {
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
}
