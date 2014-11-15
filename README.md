#Hobble… A crutch friendly guide to the NYC subway system

I started working on this after having to spend several months on crutches following ankle surgery and spending way to much money on taxis, ubers, and lyfts because navigating the public transport system was so frustrating when stairs were not an option (and I didn’t have all day to get somwhere).  The MTA keeps a list of accessible stations, but figuring out the best route to connect two endpoints using only these stations is not trivial.  

This is a work in progress to make a more user friendly version of the information found [here](http://web.mta.info/accessibility/stations.htm)



##Features in progress
- Google Map with pins of accessible subway locations) as well as points for subway stations that are accessible between lines (transfer stations) 
- -ncluding basic details from the MTA about accessible at the station and a streetview image of the location when you click on the station pin

##Feature and function wish list
- Route finder - take in from and to and show closest handicap accessible stations to each end of the trip
- Map out the shortest route only using handicap accessible stations
- add in costs (including taxi estimates to get to the station at either end vs taxi for the whole trip
- Add in buses
- Add in ferries
- Add in option to limit the number of transfers
- Add in option to limit transport types
- Streaming data for station closure information

###To run locally for development purposes:

You can use the simple HTTP server package in Node.js.

To install:

<pre><code>npm install http-server -g</code></pre>

To run:

<pre><code>http-server .</code></pre>

(For other options in your favorite language check [here](https://github.com/mrdoob/three.js/wiki/How-to-run-things-locally))


###Dependencies:
- [jQuery](http://jquery.com/)
- [Gmaps.js](http://hpneo.github.io/gmaps/)
