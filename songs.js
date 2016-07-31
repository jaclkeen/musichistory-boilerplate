var Songs = (function(){
  var _songs = [];

  function getSongs(callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'songs.json')
    xhr.addEventListener('load', function(evt){
      _songs = JSON.parse(evt.target.responseText);
      callback(_songs);
  })
  xhr.send();
  }

  function addSongsToArray(item){
    _songs[_songs.length] = item;
    console.log(_songs);
  }

  return {
    getSong: getSongs,
    addSong: addSongsToArray
  }
})()

function spa(){
  var add_page = document.getElementById("add_button");
  var view_page = document.getElementById("view_music");

  add_page.addEventListener("click", function(){
    document.getElementById("add_music").className = "";
    document.getElementById("music").className = "hidden";
  })
  view_page.addEventListener("click", function(){
    document.getElementById("music").className = "music";
    document.getElementById("add_music").className = "hidden";
  })
}

function clearPage(){
  document.getElementById("add_song").value = "";
  document.getElementById("add_album").value = "";
  document.getElementById("add_artist").value = "";
}

//ADD SONG ON ADD MUSIC PAGE EVENT LISTENER
Songs.getSong(addToDom);
eventListeners();
spa();

// function addSongFromArray(){
//   for(var i = 0; i < songs.length; i++){
//     var song = document.createElement("div");
//     song.className = 'title';
//     song.innerHTML += `<h2 class='song_name'>${addSongsToDom()[i]}
//               <button class='delete'>X</button></h2>
//               <p class='artist'>${addArtistToDom()[i]}</p><span> &nbsp;|&nbsp;</span>
//               <p class='album'>${addAlbumToDom()[i]}</p><span> &nbsp;|&nbsp; </span>
//               <p class="genre">Genre</p>`;
//     song.addEventListener("click", function(e){
//       if(e.target && e.target.nodeName === "BUTTON"){
//         songlist.removeChild(this);
//       }
//     })
//     songlist.appendChild(song);
//   }
// }
