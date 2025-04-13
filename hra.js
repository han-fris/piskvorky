let currentPlayer = 'circle';

const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.target.disabled = true;
    if (currentPlayer === 'circle') {
      button.innerHTML = ` 
        <div class="board__field--circle">
        <img
          src="podklady/circle-black.svg"
          alt="černý kruh"
        />
        </div>`;
      currentPlayer = 'cross';
      const playerElement = document.querySelector('.hra__player');
      playerElement.innerHTML = `<img src="podklady/cross.svg" alt="bílý kříž" />`;
    } else {
      button.innerHTML = ` 
        <div class="board__field--cross">
        <img
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

const restartElement = document.querySelector('.hra__restart');
restartElement.addEventListener('click', (event) => {
  if (window.confirm('Jste si jistí, že chcete hru restartovat?')) {
    window.open('hra.html');
  } else {
    event.preventDefault();
  }
});
/*
Pomocí animací přidej symbolům efekt postupného zvětšení. V náhledu je animace zpomalená z času 0,15 s na 0.45 s, aby bylo lépe vidět, jak má vypadat. V tvém kódu po otestování použij čas kratší, aby hra působila svižně. */
