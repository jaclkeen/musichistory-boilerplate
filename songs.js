var Songs = (function(){
  var _songs = [];
  function addSongsToArray(item){
    _songs[_songs.length] = item;
    console.log(_songs);
  }

  return {
    addSong: addSongsToArray
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
  var $add_page = $("#add_button");
  var $view_page = $("#view_music");

  $add_page.on("click", function(){
    $("#add_music").removeClass('hidden');
    $("#music").addClass("hidden");
  })
  $view_page.on("click", function(){
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
