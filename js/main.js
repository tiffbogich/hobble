$(document).ready(function(){

  $.getJSON('accessible-mta.json')
    .done(function (data) {
      $.each(data.stations, function()
      {
        console.log(this.stationName);
      });  
    })
    .fail(function (xhr) {
    alert('I FAILED!')
    console.log(xhr);
    });

  //close aside window when 'x' is clicked. this works
  $("#circle").click(function(){
    $("aside").hide();
  });

  //center basic map on NYC. this works.
  var map;
  map = new GMaps({
    div: '#map',
    zoom: 13,
    lat: 40.750799,
    lng: -73.993628
  });

  //add pins for specific stations. This works (not looped yet)
  map.addMarker({
    lat: 40.750799, 
    lng: -73.993628,
    title: 'Penn Station',
    infoWindow: {
      content: '<p>Penn Station</p>'
    },
    click: function(e){
      $("aside").show();
    }
  });
  
  map.addMarker({
    lat: 40.757758, 
    lng: -73.989856,
    title: 'Times Square',
    infoWindow: {
      content: '<p>Times Square</p>'
    }
  });  
});
