"use strict";

var songs = require('./songs'),
    dom = require('./addSongs'),
    event = require('./events')

function addUserInputSong(){
  var $add_song = $("#add_song").val();
  var $add_album = $("#add_album").val();
  var $add_artist = $("#add_artist").val();
  var $add_genre = $("#add_genre").val();
  var $add_length = $("#add_length").val();
  var s_banner = $('#success_banner')
  // VALIDATE SONG INPUT
  if($add_song === "" || $add_album === "" || $add_artist === "" || !Number.isInteger($add_length)){
    return alert("All 3 field must have a value, and the length must be a number!");
  }
  else{
    var userSong = [{
      title: $add_song,
      artist: $add_artist,
      album: $add_album,
      genre: $add_genre,
      length: $add_length
    }]
    // ADDS ARRAY OBJECT TO SONG ARRAY
    songs.addSong(userSong[0])
    // CLEARS INPUT FIELDS
    dom.clearPage();
    // SHOWS WINNING BANNER
    s_banner.fadeIn(500).removeClass('hidden').fadeOut(3000)
    // PRINTS INPUT TO DOM
    dom.printStuff(userSong[0])
    // ADDS ARTIST TO FILTER TAB
    addArtistsIntoFilter(userSong)
    // ADDS ALBUM TO FILTER TAB
    addAlbumsIntoFilter(userSong)
  }
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
