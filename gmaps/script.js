$(document).ready(function(){
  var map;

  map = new GMaps({
    div: '#map',
    zoom: 16,
    lat: -12.043333,
    lng: -77.028333,
    click: function(e){
      alert('click');
    },
    dragend: function(e){
      alert('dragend');
    }
  });
});