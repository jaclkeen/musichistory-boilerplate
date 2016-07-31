function addToDom(song_info){
  var songlist = document.getElementById('songlist');
  song_info.forEach(function(item){
    var song_element = document.createElement('div');
    song_element.innerHTML += `<h2 class='song_name'>${item.title}
              <button class='delete glyphicon glyphicon-remove'></button></h2>
              <p class='artist'>${item.artist}</p><span> &nbsp;|&nbsp;</span>
              <p class='album'>${item.album}</p><span> &nbsp;|&nbsp; </span>
              <p class="genre">Genre</p>`;
    Songs.addSong(song_element);
    song_element.addEventListener("click", function(e){
      if(e.target && e.target.nodeName === "BUTTON"){
        songlist.removeChild(this);
      }
    })
    songlist.appendChild(song_element);
  });
}

function addUserInputSong(){
  var add_song = document.getElementById("add_song").value;
  var add_album = document.getElementById("add_album").value;
  var add_artist = document.getElementById("add_artist").value;
  //VALIDATE SONG INPUT
  if(add_song === "" && add_album === "" && add_artist === ""){
    return alert("All 3 field must have a value!");
  }
  else{
    //songs.push(`${add_song}- by ${add_artist} on the album ${add_artist}`);
    alert("Song added!");
    //APPENDS SONG TO DIV
    var new_song = document.createElement("div");
    new_song.className = 'title';
    new_song.innerHTML = `<h2 class='song_name'>${add_song}
                  <button class='delete glyphicon glyphicon-remove'></button></h2>
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
    clearPage();
  }
}

function eventListeners(){
  var add_song = document.getElementById("add");
  add_song.addEventListener("click", addUserInputSong);

//CLEAR INPUT FIELDS ON ADD MUSIC PAGE
  var clear_add_music_fields = document.getElementById("clear");
  clear_add_music_fields.addEventListener("click", clearPage);

  var more = document.getElementById('add_more');
  more.addEventListener("click", showSecondJSONFile);
}
