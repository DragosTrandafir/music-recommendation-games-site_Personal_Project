const songList=[];

createSongList();

function createSongList(){
  let songListHTML='';
  songList.forEach((songObject,index) => {
    const {number,name}= songObject;
    const html=`
    <div class="line">
    <div class="number">${number}</div>
    <div class="name">${name}</div>
    <button class="js-delete-button delete-button">Delete</button>
    <button class="js-move-up move-up">&#8593;</button>
    <button class="js-move-down move-down">&darr;</button>
    </div>
    `;
    songListHTML+=html;
  });

  document.querySelector('.js-song-list')
  .innerHTML=songListHTML;

  document.querySelectorAll('.js-delete-button')
  .forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () =>{
      document.querySelector('.js-song-name')
      .innerHTML+=`<option>${songList[index].name}</option>`;
      songList.splice(index,1);
      for(let i=0;i<songList.length;i++){
        songList[i].number=i+1;
      }
      number--;
      createSongList();//ca sa poti sterge de mai multe ori
    });
  });

  document.querySelectorAll('.js-move-up')
.forEach((upButton,index) => {
  upButton.addEventListener('click',()=>{
    if(index>0){
    let aux1=songList[index-1].name;
    songList[index-1].name=songList[index].name;
    songList[index].name=aux1;}
    createSongList();
  });
});


document.querySelectorAll('.js-move-down')
.forEach((downButton,index) => {
  downButton.addEventListener('click',()=>{
    if(index < songList.length-1){
      let aux1=songList[index+1].name;
      songList[index+1].name=songList[index].name;
      songList[index].name=aux1;}
      createSongList();
  });
});
}

document.querySelector('.js-add-button')
.addEventListener('click', () => {
  addSong();
});


let number=0;
function addSong(){
  const songName = document.querySelector('.js-song-name');
  console.log(songName);
  const name = songName.value;
  console.log(name);
  if (name!=='(select one)' && number<11){
    number++;
  let indexSong= songList.length;
  songList.push({
    number: indexSong+1,
    name
  }); }
  var x = document.getElementById("song-selector");
  x.remove(x.selectedIndex);
  createSongList();
};


let bluredSectionWithout1 = document.getElementById("facts");
let bluredSectionWithout2 = document.getElementById("facts");
let image1Zoom = document.querySelector(".js-bluring-image1");
let image2Zoom = document.querySelector(".js-bluring-image2");

document.querySelector('.js-bluring-image1')
.addEventListener('mouseenter',()=>{
  bluredSectionWithout1.classList.add("mystyle1");
  bluredSectionWithout2.classList.remove("mystyle2");
  setTimeout(()=>{bluredSectionWithout1.classList.remove("mystyle1")},1600);
  image1Zoom.classList.add("bluring-image1");
  image2Zoom.classList.remove("bluring-image2");
  setTimeout(()=>{image1Zoom.classList.remove("bluring-image1")},1600);
})

document.querySelector('.js-bluring-image2')
.addEventListener('mouseenter',()=>{
  bluredSectionWithout2.classList.add("mystyle2");
  bluredSectionWithout1.classList.remove("mystyle1");
  setTimeout(()=>{bluredSectionWithout2.classList.remove("mystyle2")},1600);
  image2Zoom.classList.add("bluring-image2");
  image1Zoom.classList.remove("bluring-image1");
  setTimeout(()=>{image2Zoom.classList.remove("bluring-image2")},1600);
})