//close aside window when 'x' is clicked
$(document).ready(function(){
  $("#circle").click(function(){
    $("aside").hide();
  });
});


//google maps interaction 1
    //on click (of pins prepopulated on a map) show hidden div for station info
    //show relevant station info according to pin location or id

//google maps interaction 2    
    //search from and to across accessible stations


//center basic map on NYC
$(document).ready(function(){
  var map;
  map = new GMaps({
    div: '#map',
    zoom: 13,
    lat: 40.750799,
    lng: -73.993628
  });

  $.getJSON("accessible-mta.json", function(data){
    var myData = JSON.parse(stations); 
    console.log(myData);
    // $.each( data.stations, function(enteryIndex, entry){
    //   console.log(this.stations);
    // })
  });

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
  
  // map.addMarker({
  //   lat: 40.757758, 
  //   lng: -73.989856,
  //   title: 'Times Square',
  //   infoWindow: {
  //     content: '<p>Times Square</p>'
  //   }
  // });  

});

