$(document).ready(function(){

  //center basic map on NYC
  var map;
  map = new GMaps({
    div: '#map',
    zoom: 13,
    lat: 40.750799,
    lng: -73.993628
  });
  
  //map accessible stations
  $.getJSON('accessible-mta.json')
    .done(function (data){
      $.each(data.stations, function()
      {
        var station = this;
        //add markers to station locations
        map.addMarker({
          lat: station.lat,
          lng: station.lon,
          title: station.stationName,
          // infoWindow:{
          //   content:'<p>'+this.stationName+'</p>'
          // },
          
          //on click show extra station info below corresponding to the marker
          click: function(){
            $('#instructions').css('text-indent','-9999px');
            $('aside').show(400);
            $('#station-name').html(station.stationName);
            $('#borough').html(station.borough);
            $('#notes').html(station.description);
            $('#lines').html(station.lines.toString());
            
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

  //map transfer stations
  $.getJSON('transfer-mta.json')
    .done(function (data){
      $.each(data.transfers, function()
      {
        var transfer = this;
        
        //add markers to station locations
        map.addMarker({
          lat: transfer.lat,
          lng: transfer.lon,
          title: transfer.stationName,
          icon: 'http://www.stad.com/img/whitedot.png',
          
          //on click show extra station info below corresponding to the marker
          click: function(){
            $('#instructions').css('text-indent','-9999px');
            $('aside').show(400);
            $('#station-name').html(transfer.stationName);
            $('#borough').html(transfer.borough);  
            $('#notes').html('Transfers Only');
            $('#lines').html(station.lines.toString());       
            //add panorama images to the aside info
            var panorama;
            panorama = GMaps.createPanorama({
              el:'#panorama',
              lat: transfer.lat,
              lng: transfer.lon
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

