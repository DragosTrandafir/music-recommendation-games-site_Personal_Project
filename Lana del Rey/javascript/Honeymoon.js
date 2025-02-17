
function randomiseMove() {
  let wheel = document.querySelector('.js-wheel'); //select the wheel element
  let move = Math.floor(Math.random() * 13);
  wheel.style.animation = `wheel-animation${move + 1} 10s cubic-bezier(0.19, 1, 0.22, 1) 1`;
  const randomisedText = document.querySelector(`.song${move + 1}`).innerText; //randomise an animation and a song, both corresponding to the same index
  setTimeout(() => {
    alert(`Go listen to ${randomisedText}!`);
    listenNow(randomisedText);
  }
    , 10000);
}

// call randomise only when we click the spin-button
document.querySelector('.js-spin-button')
  .addEventListener('click', () => {
    let wheelSelector = document.querySelector('.wheel');
    wheelSelector.classList.add("js-wheel");
    randomiseMove();
    let wheel = document.querySelector('.js-spin-button');
    wheel.style.backgroundColor = 'red';
  })

// open a spotify link by including some inner html 
function listenNow(randomisedText) {
  document.querySelector('.js-go-listen')
    .innerHTML = `
    <p><a href="https://open.spotify.com/album/2DpEBrjCur1ythIZ10gJWw" target="_blank" class="listen-now-animation">Listen to ${randomisedText} here!</p>
   `;
}

