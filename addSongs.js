function addToDom(song_info){
  var $songlist = $('#songlist');
  song_info.forEach(function(item){
    var $song_element = $("<div></div>");
    $song_element.html(`<h2 class='song_name'>${item.title}
        <button class='delete glyphicon glyphicon-remove'></button></h2>
        <p class='artist'>${item.artist}</p><span> &nbsp;|&nbsp;</span>
        <p class='album'>${item.album}</p><span> &nbsp;|&nbsp; </span>
        <p class="genre">Genre</p>`);

    $song_element.on("click", function(e){
      if(e.target && e.target.nodeName === "BUTTON"){
        $(this).remove()
      }
    })

    Songs.addSong(item)
    $songlist.append($song_element);
  });
}

function addUserInputSong(){
  var $songlist = $('#songlist');
  var $add_song = $("#add_song").val();
  var $add_album = $("#add_album").val();
  var $add_artist = $("#add_artist").val();
  //VALIDATE SONG INPUT
  if($add_song === "" || $add_album === "" || $add_artist === ""){
    return alert("All 3 field must have a value!");
  }
  else{
    alert("Song added!");
    var userSong = [{
      title: $add_song,
      artist: $add_album,
      album: $add_album
    }]
    addToDom(userSong)
    clearPage();
  }
}

function eventListeners(){
  var $add_song = $("#add");
  $add_song.on("click", addUserInputSong);

//CLEAR INPUT FIELDS ON ADD MUSIC PAGE
  var clear_add_music_fields = $("#clear");
  clear_add_music_fields.on("click", clearPage);

// ADDS SECOND JSON FILE TO DOM ON 'MORE' CLICK
  var $more = $('#add_more');
  $more.on("click", function(){
    showJSON('moreSongs.json')
    $(this).css("display", "none");
  })
}

