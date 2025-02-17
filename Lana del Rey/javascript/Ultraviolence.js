const songList = [];

createSongList();

function createSongList() {
  let songListHTML = '';
  songList.forEach((songObject, index) => {
    const { songNumber, songName } = songObject;
    const html = `
    <div class="line">
    <div class="number">${songNumber}</div>
    <div class="name">${songName}</div>
    <button class="js-delete-button delete-button">Delete</button>
    <button class="js-move-up move-up">&#8593;</button>
    <button class="js-move-down move-down">&darr;</button>
    </div>
    `;
    songListHTML += html; // creating the html behing the song list
  });

  document.querySelector('.js-song-list')
    .innerHTML = songListHTML;

  document.querySelectorAll('.js-delete-button') //delete button 
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        document.querySelector('.js-song-name')
          .innerHTML += `<option>${songList[index].name}</option>`;
        songList.splice(index, 1);
        for (let i = 0; i < songList.length; i++) {
          songList[i].songNumber = i + 1;
        }
        songNumber--;
        createSongList();//to be able to do these operations multiple times, we need to call the function at the end everytime
      });
    });

  document.querySelectorAll('.js-move-up') // move-up - switch the 2 consecutive values
    .forEach((upButton, index) => {
      upButton.addEventListener('click', () => {
        if (index > 0) {
          let aux1 = songList[index - 1].name;
          songList[index - 1].name = songList[index].name;
          songList[index].name = aux1;
        }
        createSongList();
      });
    });


  document.querySelectorAll('.js-move-down') // similar to move-up
    .forEach((downButton, index) => {
      downButton.addEventListener('click', () => {
        if (index < songList.length - 1) {
          let aux1 = songList[index + 1].name;
          songList[index + 1].name = songList[index].name;
          songList[index].name = aux1;
        }
        createSongList();
      });
    });
}




document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    addSong();
  });


let songNumber = 0;
function addSong() {
  const songName = document.querySelector('.js-song-name');

  const name = songName.value;

  if (name !== '(select one)' && songNumber < 11) {
    songNumber++;
    let indexSong = songList.length;
    songList.push({
      songNumber: indexSong + 1,
      name
    });
  }
  var song_selector = document.getElementById("song-selector");
  song_selector.remove(song_selector.selectedIndex);
  createSongList();
};


let bluredSectionWithout1 = document.getElementById("facts");
let bluredSectionWithout2 = document.getElementById("facts");
let image1Zoom = document.querySelector(".js-bluring-image1");
let image2Zoom = document.querySelector(".js-bluring-image2");

document.querySelector('.js-bluring-image1') //add some animations for the images
  .addEventListener('mouseenter', () => {
    bluredSectionWithout1.classList.add("mystyle1");
    bluredSectionWithout2.classList.remove("mystyle2");
    setTimeout(() => { bluredSectionWithout1.classList.remove("mystyle1") }, 1600); //stop the animation after 1.6 sec
    image1Zoom.classList.add("bluring-image1");
    image2Zoom.classList.remove("bluring-image2");
    setTimeout(() => { image1Zoom.classList.remove("bluring-image1") }, 1600);
  })

document.querySelector('.js-bluring-image2')
  .addEventListener('mouseenter', () => {
    bluredSectionWithout2.classList.add("mystyle2");
    bluredSectionWithout1.classList.remove("mystyle1");
    setTimeout(() => { bluredSectionWithout2.classList.remove("mystyle2") }, 1600);
    image2Zoom.classList.add("bluring-image2");
    image1Zoom.classList.remove("bluring-image1");
    setTimeout(() => { image2Zoom.classList.remove("bluring-image2") }, 1600);
  })