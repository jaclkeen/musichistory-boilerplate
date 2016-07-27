var songs = [];
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";

// function replaceChars(){
//   for(var i = 0; i < songs.length; i++){
//     if(songs[i].includes('>')){
//       songs[i] = songs[i].replace(">", "-");
//     }
//     if(songs[i].includes('(') || songs[i].includes('@') || songs[i].includes('*')) {
//       songs[i] = songs[i].replace("(", "");
//       songs[i] = songs[i].replace("@", "");
//       songs[i] = songs[i].replace("*", "");
//     }
//   }
//   return songs;
// }

function addSongsToDom() {
  var song_name = document.getElementsByClassName("song_name");
  var modified_songs = [];
  for(var i = 0; i < songs.length; i++){
      var j = songs[i].indexOf("-");
       modified_songs.push(songs[i].slice(0,j));
  }
  return modified_songs;
}

function addArtistToDom(){
  var artist = document.getElementsByClassName("artist");
  var modified_artist = [];
  for (var i = 0; i < songs.length; i++){
      var begin_slice = songs[i].indexOf("by");
      var end_slice = songs[i].indexOf(" on");
      modified_artist.push(songs[i].slice(begin_slice + 2, end_slice));
  }
  return modified_artist;
}

function addAlbumToDom(){
  var album = document.getElementsByClassName("album");
  var modified_album = [];
  for (var i = 0; i < songs.length; i++){
      var begin_slice = songs[i].indexOf("album");
      modified_album.push(songs[i].slice(begin_slice + 6, songs[i].length));
  }
  return modified_album;
}

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

function addFromSongPageUserInput(){
  var add_song = document.getElementById("add_song").value;
  var add_album = document.getElementById("add_album").value;
  var add_artist = document.getElementById("add_artist").value;
  //VALIDATE SONG INPUT
  if(add_song === "" && add_album === "" && add_artist === ""){
    return alert("All 3 field must have a value!");
  }
  else{
    songs.push(`${add_song}- by ${add_artist} on the album ${add_artist}`);
    alert("Song added!");
    //APPENDS SONG TO DIV
    var new_song = document.createElement("div");
    new_song.className = 'title';
    new_song.innerHTML = `<h2 class='song_name'>${add_song}
                  <button class='delete'>X</button></h2>
                  <p class='artist'>${add_artist}</p><span> &nbsp;|&nbsp;</span>
                  <p class='album'>${add_album}</p><span> &nbsp;|&nbsp; </span>
                  <p class="genre">Genre</p>`;
    ////////DELETE BUTTON////////
    new_song.addEventListener("click", function(e){
      if(e.target && e.target.nodeName === "BUTTON"){
        songlist.removeChild(this);
      }
    })
    songlist.appendChild(new_song);
    console.log(songs);
    clearPage();
  }
}

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

function readFromJSON(callback){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'songs.json')
  xhr.addEventListener('load', function(evt){
    songs = JSON.parse(evt.target.responseText);
    callback(songs);
    console.log(songs)
  })
  xhr.send();
}

function addJSONSongs(song_info){
  var songlist = document.getElementById('songlist');
  song_info.forEach(function(item){
    var song_element = document.createElement('div');
    song_element.innerHTML += `<h2 class='song_name'>${item.title}
              <button class='delete'>X</button></h2>
              <p class='artist'>${item.artist}</p><span> &nbsp;|&nbsp;</span>
              <p class='album'>${item.album}</p><span> &nbsp;|&nbsp; </span>
              <p class="genre">Genre</p>`;

    song_element.addEventListener("click", function(e){
      if(e.target && e.target.nodeName === "BUTTON"){
        songlist.removeChild(this);
        console.log(this);
      }
    })

    songlist.appendChild(song_element);
  });
}

//ADD SONG ON ADD MUSIC PAGE EVENT LISTENER
var add_song = document.getElementById("add");
add_song.addEventListener("click", addFromSongPageUserInput);

//CLEAR INPUT FIELDS ON ADD MUSIC PAGE
var clear_add_music_fields = document.getElementById("clear");
clear_add_music_fields.addEventListener("click", clearPage);

// console.log(replaceChars());
// addSongFromArray();
readFromJSON(addJSONSongs);
spa();
