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

// function addArtists(arr){
//   var artist_select = $('#artist')
//   var i = 0
//   arr.forEach(function(item){
//     if(artist_select.children(i) !== item.artist){
//       artist_select.children(i).html(item.artist)
//     }
//   })
// }

Songs.loadFiles('songs.json');
eventListeners()
Songs.SPA();
// addArtists(Songs.getSongs)
