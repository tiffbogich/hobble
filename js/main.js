
//testing json piece, works with data copied here not in .json file
var data = {
    "stations": [
        {
            "key": "1",
            "stationName": "14 St",
            "lat": "40.739885",
            "lon": "-74.002573",
            "borough": "Manhattan",
            "lines": [
                "A",
                "C",
                "E",
                "L"
            ],
            "description": "Elevator at northwest corner of 14th Street and Eighth Avenue",
            "imageRef": "https://www.google.com/maps/place/8+Av/@40.739765,-74.0025814,3a,90y,10.32h,89.85t/data=!3m4!1e1!3m2!1sty7IPyuYj4DXLtftwMUhjg!2e0!4m7!1m4!3m3!1s0x89c259be8e8588b1:0x7f62d995d48be517!2s14+St!3b1!3m1!1s0x89c259be445ceb49:0xd4fae2a3d56c7a8a!6m1!1e1"
        },
        {
            "key": "2",
            "stationName": "14 St-Union Square",
            "lat": "40.734653",
            "lon": "-73.989946",
            "borough": "Manhattan",
            "lines": [
                "L",
                "N",
                "Q",
                "R"
            ],
            "description": "Elevator at northeast corner of 14th Street and Park Avenue South (Union Square East)",
            "imageRef": "https://www.google.com/maps/@40.7343207,-73.9896751,3a,75y,50.58h,78.23t/data=!3m4!1e1!3m2!1s0iTy4wo0v-mNkxt7l9Ha_Q!2e0!6m1!1e1"
        }
      ]
    };

//this works when the data is pasted locally
$.each(data.stations, function(entryIndex, entry){
  alert(this.stationName);
}); 




$(document).ready(function(){
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


  //this works for locally stored json. Need to loop
  // $.getJSON("accessible-mta.json", function(data){
  //   var items = [];
  //   $.each(data.stations, function(entryIndex, entry){
  //     items.push(entryIndex + entry)''
  //   });
  //   alert(items);
  // });
  

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