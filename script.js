const imgCharacter = document.querySelector('.characterCard__Img');
const nameCharacter = document.getElementsByClassName('name-character')
const showcaseWrapper = document.querySelector('.showcase__Inner');

function load() {
  const url = "https://rickandmortyapi.com/api/character";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //pintar las card
      console.log('DATA', data);
      const results = data.results;
      console.log(results);

      const cards = results.map((item) => {
        return `
        <article class="characterCard">
          <div class="characterCard__Img"><img src="${item.image}"></img></div>
          
          <div class="characterCard__Content">

          <div class="section-name">
            <h2 class="name-character">${item.name}</h2>

            <div class="estado">
              <span class="status__icon"></span>
              <p class="status"> Dead - Human </p>
            </div>

          </div>

          <div class="section-place">
            <h4 class="text-gray">Last known location:</h4>
            <p>Earth (Replacement Dimension)</p>
          </div>

          <div class="section-seen">
            <h4 class="text-gray">First seen in:</h4>
            <p>Morty's Mind Blowers</p>
          </div>

          </div>
        </article>`
      });
      showcaseWrapper.innerHTML = cards.join('');
    })
    .catch((error) => {
      console.log('error', error);
    });
}

load();