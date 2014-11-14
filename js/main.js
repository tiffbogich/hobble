$(document).ready(function(){

  //center basic map on NYC. this works.
  var map;
  map = new GMaps({
    div: '#map',
    zoom: 13,
    lat: 40.750799,
    lng: -73.993628
  });

  $.getJSON('accessible-mta.json')
    .done(function (data){
      $.each(data.stations, function()
      {
        map.addMarker({
          lat: this.lat,
          lng: this.lon,
          title: this.stationName,
          infoWindow:{
            content:'<p>'+this.stationName+'</p>'
          },
          click: function(){
            $("aside").show();
          }
        });
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



  //add pins for specific stations. This works (not looped yet)
  // map.addMarker({
  //   lat: 40.750799, 
  //   lng: -73.993628,
  //   title: 'Penn Station',
  //   infoWindow: {
  //     content: '<p>Penn Station</p>'
  //   },
  //   click: function(e){
  //     $("aside").show();
  //   }
  // });
  
  // map.addMarker({
  //   lat: 40.757758, 
  //   lng: -73.989856,
  //   title: 'Times Square',
  //   infoWindow: {
  //     content: '<p>Times Square</p>'
  //   }
  // });  
});
