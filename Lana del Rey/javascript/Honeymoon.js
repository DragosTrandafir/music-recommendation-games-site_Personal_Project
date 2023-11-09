
function randomiseMove(){
  let elem = document.querySelector('.js-wheel');
  let move=Math.random();
  move = Math.floor(Math.random()*13);
  elem.style.animation=`wheel-animation${move+1} 10s cubic-bezier(0.19, 1, 0.22, 1) 1`;
  const randomisedText = document.querySelector(`.song${move+1}`).innerText;
  setTimeout(()=>{
    alert(`Go listen to ${randomisedText}!`);
    listenNow(randomisedText);}
    ,10000);
}

document.querySelector('.js-spin-button')
.addEventListener('click', ()=>{
  let wheelSelector = document.querySelector('.wheel');
  wheelSelector.classList.add("js-wheel");
  randomiseMove();
  let elem = document.querySelector('.js-spin-button');
  elem.style.backgroundColor='red';
})

function listenNow(randomisedText){
   document.querySelector('.js-go-listen')
   .innerHTML=`
    <p><a href="https://open.spotify.com/album/2DpEBrjCur1ythIZ10gJWw" target="_blank" class="listen-now-animation">Listen to ${randomisedText} here!</p>
   `;
}

