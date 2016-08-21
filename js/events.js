"use strict";

function eventListeners(){
  // ON SUBMIT CLICK, CALLS ADD USER INPUT SONG FUNCTION
  var $add_song = $("#add");
  $add_song.on("click", addUserInputSong)
//CLEAR INPUT FIELDS ON ADD MUSIC PAGE
  var clear_add_music_fields = $("#clear");
  clear_add_music_fields.on("click", clearPage);
// ADDS SECOND JSON FILE TO DOM ON 'MORE' CLICK
  var $more = $('#add_more');
  $more.on("click", function(){
    Songs.loadFiles('moreSongs.json')
    $(this).css("display", "none");
  })
// TAKES RANGE INPUT AND CONVERTS TO TIME
  var length = $('#length')
  var l_val = $('#length_val')
  length.on('input', function(){
    var x = length.val()
    l_val.html(convertTime(x))
  })
  //EXECUTES FILTER ON SONGS ARRAY WHEN FILTER BUTTON IS CLICKED
  var filter = $('#filter')
  filter.on('click', function(){
    timeFilter(Songs.getSongs)
    filterStuff(Songs.getSongs)
  })
}

function buttonListeners(){
  // REMOVES ELEMENT WHEN RED X IS CLICKED
  var $song_element = $('.element')
    $song_element.on("click", function(e){
    if(e.target && e.target.nodeName === "BUTTON"){
      $(this).remove('.element')
    }
  })
  // REPLACES X WITH REMOVE ON REMOVE BUTTON HOVER
  $song_element.on('mouseover', function(e){
    if(e.target && e.target.nodeName === "BUTTON"){
      $(e.target).animate('slow').removeClass('glyphicon glyphicon-remove delete').addClass('remove').html('Delete')
    }
  })
  // REPLACES REMOVE WITH X ON REMOVE BUTTON MOUSEOUT
  $song_element.on('mouseout', function(e){
    if(e.target && e.target.nodeName === "BUTTON"){
      $(e.target).addClass('glyphicon glyphicon-remove delete').removeClass('remove').html('')
    }
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
  $("#add_genre").val("");
  $("#add_length").val("");
}

module.exports = {eventListeners, buttonListeners, spa, clearPage}
