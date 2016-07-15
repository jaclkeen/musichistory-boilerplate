var songs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";

function replaceChars(){
  for(var i = 0; i < songs.length; i++){
    if(songs[i].includes('>')){
      songs[i] = songs[i].replace(">", "-");
    }
    if(songs[i].includes('(') || songs[i].includes('@') || songs[i].includes('*')) {
      songs[i] = songs[i].replace("(", "");
      songs[i] = songs[i].replace("@", "");
      songs[i] = songs[i].replace("*", "");
    }
  }
  return songs;
}

function addSongsToDom() {
  var song_name = document.getElementsByClassName("song_name");
  var genre = document.getElementsByClassName("genre");

  for(var i = 0; i < songs.length; i++){
      var j = songs[i].indexOf("-");
      song_name[i].innerHTML = songs[i].slice(0,j);
  }
}

function addArtistToDom(){
  var artist = document.getElementsByClassName("artist");
  for (var i = 0; i < songs.length; i++){
      var begin_slice = songs[i].indexOf("by");
      var end_slice = songs[i].indexOf(" on");
      artist[i].innerHTML = songs[i].slice(begin_slice + 2, end_slice);
  }
}

function addAlbumToDom(){
  var album = document.getElementsByClassName("album");
  for (var i = 0; i < songs.length; i++){
      var begin_slice = songs[i].indexOf("album");
      album[i].innerHTML = songs[i].slice(begin_slice + 6, songs[i].length);
    }
}

console.log(replaceChars());
addSongsToDom();
addArtistToDom();
addAlbumToDom();
