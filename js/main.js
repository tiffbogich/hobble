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
        var station = this;
        //add markers to station locations
        map.addMarker({
          lat: this.lat,
          lng: this.lon,
          title: this.stationName,
          // infoWindow:{
          //   content:'<p>'+this.stationName+'</p>'
          // },
          //on click show extra station info below corresponding to the marker
          click: function(){
            $('#instructions').css('text-indent','-9999px');
            $('aside').show(400);
            $('#station-name').html(station.stationName);
            $('#borough').html(station.borough);
            $('#notes').html(station.notes);
            $('#lines').html(station.lines).css('letter-spacing','5px');
            //add panorama images to the aside info
            var panorama;
            panorama = GMaps.createPanorama({
              el:'#panorama',
              lat: station.lat,
              lng: station.lon
            });
          }
        });
      });  
    })
    .fail(function (xhr) {
    alert('I FAILED!')
    console.log(xhr);
    });

  //close aside window when 'x' is clicked. this works
  $('#circle').click(function(){
    $('aside').hide();
  });
});

