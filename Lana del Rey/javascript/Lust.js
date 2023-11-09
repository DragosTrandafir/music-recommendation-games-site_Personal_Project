const colors=['red','blue','yellow','orange','purple','pink','brown','green'];

let interv;

function randomiseColor(colors){
  let color = Math.random();
  color = Math.floor(Math.random()*8);
  return colors[color];
}



function randomiseStartPosition(n){
   //we randomise 1 out of 89 positions for a square
  
  /*const element = document.querySelector('.square-container'); //3 steps for accessing a property value in css
  const computedStyle = window.getComputedStyle(element);
  const widthValue = computedStyle.getPropertyValue('width');*/
  
  
 /* let elem1= parseFloat(widthValue);
  elem1=(2/3)*elem1;
  let elem2=parseInt(elem1);
  console.log(elem2)*/

 
  let startPosition = Math.random();  
  startPosition = Math.floor(Math.random()*88);
  

  let squareRandom = document.querySelector(`.square${n}`);
  console.log(squareRandom);
  squareRandom.style.left=`${startPosition}vw`;
  squareRandom.style.backgroundColor=`${randomiseColor(colors)}`;
};

let innerContainer = document.querySelector('.square-container');//we must create this element before the delay

function actionAnimation(){

  document.querySelector(".js-add")
  .addEventListener('click',()=>{
        
       
    
        stopAfter10Sec();
        

        if((document.querySelector(".input-value").value == parseInt(document.querySelector(".input-value").value)) 
        && parseInt(document.querySelector(".input-value").value) < 100){

          let n = parseInt(document.querySelector(".input-value").value);

          for(let i=1;i<=n;i++){
            innerContainer.innerHTML+=`<div class="square square${i}"></div>`;
            randomiseStartPosition(i);
          }
          n++;

          interv = setInterval(()=>{
              innerContainer.innerHTML+=`<div class="square square${n}"></div>`;
              randomiseStartPosition(n);
              n++;
            },5000);


          } else if (document.querySelector(".input-value").value != parseInt(document.querySelector(".input-value").value)){
              alert("Choose a number!");
          } else if(parseInt(document.querySelector(".input-value").value) >= 100){
            alert("The number chosen is to big! Choose a value < 100.");
          } else alert("Error");
        },{once:true});

      
    }
  

actionAnimation();

function addAlbumLayer(){

    document.getElementById("watch-section").
    innerHTML=`
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
    document.querySelector(".watch-section > *").style.filter="blur(10px)";
    document.querySelector(".open-menu").addEventListener('mouseenter',()=>{
      let headerElement = document.querySelector(".header");
      headerElement.style.zIndex="21";
      document.querySelector(".js-refresh").addEventListener('click', ()=>{
        console.log("caca")
        window.location.reload();
      });
    });
}


function stopAfter10Sec(){
  setTimeout(()=>{
     document.querySelector(".input")
     .innerHTML+=`<button class="stop js-stop">Stop</button>`;
     document.querySelector(".js-stop").addEventListener('click',()=>{
      innerContainer.innerHTML=``;
      clearInterval(interv);
      addAlbumLayer();
     })
  },1000);
};

  

  