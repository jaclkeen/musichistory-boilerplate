var Songs = (function(){
  var _songs = [];

  function addSongsToArray(item){
    _songs[_songs.length] = item;
  }

  function showJSON(file){
    return new Promise(function(resovle, reject){
      $.ajax({
        url: file
      }).done(function(content){
        var data = content
        resovle(data)
        // addToDom(content)
        // spa()
    })
    })
  }

  return {
    addSong: addSongsToArray,
    getSongs: _songs,
    loadFiles: showJSON
  }
})()

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

function printStuff(thing){
  var songlist = $('#songlist')
  var song = $("<div></div>")
  song.addClass('element')
  song.html(`<h2 class='song_name'>${thing.title}
    <button class='delete glyphicon glyphicon-remove'></button></h2>
    <p class='artist'>${thing.artist}</p><span> &nbsp;|&nbsp;</span>
    <p class='album'>${thing.album}</p><span> &nbsp;|&nbsp; </span>
    <p class="genre">${thing.genre}</p><span> &nbsp;|&nbsp; </span>
    <p class="length">${convertTime(thing.length)}</p>`)
  songlist.append(song)
  buttonListeners()
}

function filterStuff(arr){
  var artist = $('#artist').val()
  var album = $('#album').val()
  var genre = $('#genre').val()
  $('#songlist').html("")

  arr.forEach(function(item){
    if(artist === item.artist && artist !== 'all'){
      printStuff(item)
    }
    else if(album === item.album && album !== 'all'){
      printStuff(item)
    }
    else if(genre === item.genre && genre !== 'all'){
      printStuff(item)
    }
    else if(artist === 'all' && album === 'all' && genre === 'all'){
      printStuff(item)
    }
  })
}

function timeFilter(arr){
  var length = $('#length').val()
  $('#songlist').html(" ")
  arr.forEach(function(item){
    if(length > item.length){
      printStuff(item)
    }
  })
}

Songs.loadFiles('lib/songs.json')
  .then(
    function(songData){
      addToDom(songData)
    })
  .then(
    function(){
      spa()
    })
  .then(
    function(){
      eventListeners()
    })
