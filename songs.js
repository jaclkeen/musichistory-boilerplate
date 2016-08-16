var Songs = (function(){
  var _songs = [];

  function addSongsToArray(item){
    _songs[_songs.length] = item;
  }

  function showJSON(file){
    $.ajax({
      url: file
    }).done(function(content){
      addToDom(content);
    })
  }
  function spa(){
    $('#add_button').on("click", function(){
      $("#add_music").removeClass('hidden');
      $("#music").addClass("hidden");
    })
    $("#view_music").on("click", function(){
      $("#music").removeClass('hidden');
      $("#add_music").addClass('hidden');
    })
  }


  return {
    addSong: addSongsToArray,
    getSongs: _songs,
    loadFiles: showJSON,
    SPA: spa,
  }
})()

function clearPage(){
  $("#add_song").val("");
  $("#add_album").val("");
  $("#add_artist").val("");
  $("#add_genre").val("");
  $("#add_length").val("");
}

function addArtistsFilter(arr){
  var artist_select = document.getElementById('artist')
  var new_artist = []
  var i = 0
    for(var j = 0; j < arr.length; j++){
      if(new_artist[i] !== arr[j].artist){
        new_artist.push(arr[j].artist)
        artist_select.innerHTML += `<option>${new_artist}</option`
      }
    }
  console.log(new_artist)
}

Songs.loadFiles('songs.json');
eventListeners()
Songs.SPA();
