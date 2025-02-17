const colors = ['red', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'green']; //colors for the squares array

let interv;

function randomiseColor(colors) {
  let color = Math.floor(Math.random() * 8); //pick one of the 8 colors randomly
  return colors[color];
}



function randomiseStartPosition(n) {
  //we randomise 1 out of 89 positions for a square and call the randomiseColor from before

  let startPosition = Math.floor(Math.random() * 88);

  let squareRandom = document.querySelector(`.square${n}`);
  squareRandom.style.left = `${startPosition}vw`;
  squareRandom.style.backgroundColor = `${randomiseColor(colors)}`;
};

let innerContainer = document.querySelector('.square-container');//we must create this element before the delay

function actionAnimation() {
  document.querySelector(".js-add")
    .addEventListener('click', () => {

      stopAfter1Sec();


      if ((document.querySelector(".input-value").value == parseInt(document.querySelector(".input-value").value))
        && parseInt(document.querySelector(".input-value").value) < 100) { // if we have an integer < 100 as input

        let nrSquares = parseInt(document.querySelector(".input-value").value);

        for (let squareIndex = 1; squareIndex <= nrSquares; squareIndex++) {
          innerContainer.innerHTML += `<div class="square square${squareIndex}"></div>`; //html part
          randomiseStartPosition(squareIndex); //js part -> every square should have a random position
        }
        nrSquares++;

        interv = setInterval(() => {
          innerContainer.innerHTML += `<div class="square square${nrSquares}"></div>`;
          randomiseStartPosition(nrSquares);  // one at every 5 seconds, a new square will be added
          nrSquares++;
        }, 5000);


      } else if (document.querySelector(".input-value").value != parseInt(document.querySelector(".input-value").value)) {
        alert("Choose a number!");
      } else if (parseInt(document.querySelector(".input-value").value) >= 100) {    //exceptions in case input is wrong
        alert("The number chosen is to big! Choose a value < 100.");
      } else alert("Error");
    }, { once: true });


}


actionAnimation(); //this should be started right when we load the page -> called globally

function addAlbumLayer() {

  //this layer will be above our animation

  document.getElementById("watch-section").
    innerHTML = `
    <div class="input">
      Set number of input squares:
      <input type="text" class="input-value" placeholder="5...">
      <button class="add js-add">Add</button>
    </div>
    <div class="new-container">
     <div class="images-animation">
       <img src="images/lfl1.jpg">
       <img src="images/lfl3.jpg">
       <img src="images/lfl4.jpg">
       <img src="images/lfl5.jpg">
       <img src="images/lfl2.jpg">
       <img src="images/lfl6.jpg" class="end-image">
       <p>
       "Lust for Life" is an album by Lana Del Rey that incorporates various music styles. It has been described as Lana Del Rey's take on an A-list pop album with a substantial budget and contributions from notable artists. The album's sound is characterized as a mix of "new-age folk" and "trap pop." It features recurring trap rhythms, classic rock references, orchestral backings with a vintage feel, and Lana Del Rey singing with a hip-hop influence. The album introduces elements of light and drama into her moody past works, with a combination of Phil Spector-style sixties back beats and digital trap beats, all enveloped in Shangri Las-style girl group harmonies. The sound is sleek and contemporary, occasionally reminiscent of Frank Ocean's "Blonde." Overall, the album is praised for its modern simplicity and its portrayal of Lana Del Rey as a potentially happy artist in the world of alternative pop.
       </p>
     </div>
     <button class="open-menu">Open menu</button>
     </div>
    `;
  document.querySelector(".watch-section > *").style.filter = "blur(10px)"; //blur the background
  document.querySelector(".open-menu").addEventListener('mouseenter', () => { //when we hover over the open-menu button, we will be able to restart the animation with a refresh button
    let headerElement = document.querySelector(".header");
    headerElement.style.zIndex = "21";
    document.querySelector(".js-refresh").addEventListener('click', () => {
      window.location.reload();
    });
  });
}


function stopAfter1Sec() {
  // after 1 second, we add a new button with the ability of being clicked and adding the layer containing information about the album
  setTimeout(() => {
    document.querySelector(".input")
      .innerHTML += `<button class="stop js-stop">Stop</button>`;
    document.querySelector(".js-stop").addEventListener('click', () => {
      innerContainer.innerHTML = ``;
      clearInterval(interv);
      addAlbumLayer();
    })
  }, 1000);
};



