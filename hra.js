let currentPlayer = 'circle';

const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.disabled = true;
    if (currentPlayer === 'circle') {
      button.innerHTML = ` 
        <div class="board__field--circle hra__image-container ">
        <img
          class="hra__image hra__showing"
          src="podklady/circle-black.svg"
          alt="černý kruh"
        />
        </div>`;
      currentPlayer = 'cross';
      const playerElement = document.querySelector('.hra__player');
      playerElement.innerHTML = `<img src="podklady/cross.svg" alt="bílý kříž" />`;
    } else {
      button.innerHTML = ` 
        <div class="board__field--cross hra__image-container">
        <img
          class="hra__image hra__showing"
          src="podklady/cross-black.svg"
          alt="černý kříž"
        />
        </div>`;
      currentPlayer = 'circle';
      const playerElement = document.querySelector('.hra__player');
      playerElement.innerHTML = `<img src="podklady/circle.svg" alt="bílý kruh" />`;
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
