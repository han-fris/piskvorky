let currentPlayer = 'circle';

const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.innerHTML !== '') return;
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

/*
Bonus
Může se stát, že uživatel se omylem uklikne a modrým tlačítkem pro restart přijde o rozehranou hru. Proto přidej modrému odkazu posluchač události, který se po kliknutí uživatele zeptá zabudovanou funcí confirm, jestli chce hru opravdu restartovat. Pokud ne, zavolej event.preventDefault(), čímž zabráníš tomu, aby prohlížeč přešel na odkazovanou stránku (tj. načetl stránku s prázdnou hrou). Funkce confirm vrací true nebo false podle toho, zda uživatel souhlasil nebo nesouhlasil s potvrzovací zprávou v dialogu.
ukázka restartu

Pomocí animací přidej symbolům efekt postupného zvětšení. V náhledu je animace zpomalená z času 0,15 s na 0.45 s, aby bylo lépe vidět, jak má vypadat. V tvém kódu po otestování použij čas kratší, aby hra působila svižně. */
