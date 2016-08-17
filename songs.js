var Songs = (function(){
  var _songs = [];

  function addSongsToArray(item){
    _songs[_songs.length] = item;
  }

  function showJSON(file){
    $.ajax({
      url: file
    }).done(function(content){
      addToDom(content)
      eventListeners()
      spa()
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
    loadFiles: showJSON
  }
})()

function clearPage(){
  $("#add_song").val("");
  $("#add_album").val("");
  $("#add_artist").val("");
  $("#add_genre").val("");
  $("#add_length").val("");
}

function addArtistsIntoFilter(arr){
  var artist_select = document.getElementById('artist')
  arr.filter(function(item){
      return f_array = item.artist
  })

  artist_select.innerHTML += `<option value="${f_array}">${f_array}</option`
  console.log(f_array)
}

function addAlbumsIntoFilter(arr){
  var album_select = document.getElementById('album')
  arr.filter(function(item){
      return new_album = item.album
  })
  album_select.innerHTML += `<option value="${new_album}">${new_album}</option>`
  console.log(new_album)
}

function filterStuff(arr){
  var length = $('#length').val()
  var artist = $('#artist').val()
  var album = $('#album').val()
  var genre = $('#genre').val()
  $('#songlist').html("<div></div>")


  arr.forEach(function(item){
    if(artist === item.artist){
      $('#songlist').append(`<h2 class='song_name'>${item.title}
      <button class='delete glyphicon glyphicon-remove'></button></h2>
        <p class='artist'>${item.artist}</p><span> &nbsp;|&nbsp;</span>
        <p class='album'>${item.album}</p><span> &nbsp;|&nbsp; </span>
        <p class="genre">${item.genre}</p><span> &nbsp;|&nbsp; </span>
        <p class="length">${item.length}</p>`)

      $('#album').attr('disabled', true)
      $('#genre').attr('disabled', true)
    }
    if(album === item.album){
      $('#songlist').append(`<h2 class='song_name'>${item.title}
      <button class='delete glyphicon glyphicon-remove'></button></h2>
        <p class='artist'>${item.artist}</p><span> &nbsp;|&nbsp;</span>
        <p class='album'>${item.album}</p><span> &nbsp;|&nbsp; </span>
        <p class="genre">${item.genre}</p><span> &nbsp;|&nbsp; </span>
        <p class="length">${item.length}</p>`)

      $('#artist').attr('disabled', true)
      $('#genre').attr('disabled', true)
    }

    if(genre === item.genre){
      $('#songlist').append(`<h2 class='song_name'>${item.title}
      <button class='delete glyphicon glyphicon-remove'></button></h2>
        <p class='artist'>${item.artist}</p><span> &nbsp;|&nbsp;</span>
        <p class='album'>${item.album}</p><span> &nbsp;|&nbsp; </span>
        <p class="genre">${item.genre}</p><span> &nbsp;|&nbsp; </span>
        <p class="length">${item.length}</p>`)
      $('#artist').attr('disabled', true)
      $('#album').attr('disabled', true)
    }
  })
}

Songs.loadFiles('songs.json');

