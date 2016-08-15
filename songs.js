var Songs = (function(){
  var _songs = [];

  function addSongsToArray(item){
    _songs[_songs.length] = item;
  }

  return {
    addSong: addSongsToArray,
    getSongs: _songs
  }
})()

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

function clearPage(){
  $("#add_song").val("");
  $("#add_album").val("");
  $("#add_artist").val("");
}

showJSON('songs.json');
eventListeners();
spa();
