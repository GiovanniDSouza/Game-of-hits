$(document).ready(function(){
    $('#play').click(function(){
      $('#sorteado').hide();
      $('#empate').hide();
      $('#not').hide();
      $('#yes').hide();
      $('#pla').show();
      $('#play').hide();
    });
    $('#pla').click(function(){
        $('#pla').hide();
        $('#play').show();
      });
      
  });