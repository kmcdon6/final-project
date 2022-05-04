/* global google */
import {
  useLoadScript,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  Marker,
 } from "@react-google-maps/api";
import { render } from "@testing-library/react";
import React, { useState, useRef, useEffect } from 'react'
import "./maps.css"
/* import PlaceFinder from './placeFinder.js'
 */
 



const center = {lat: 35.9940,lng: -78.8986}
const libraries = ["places"]
const mapContainerStyle = {
    width: "100%",
    height: "100%",
    overflow: "visible",
    resetBoundsOnResize: "true",
}


export default function Gmap ({rangeValue}) {
    
                const [map, setMap] = useState(null);
                const [directionsResponse, setDirectionsResponse] =
                  useState(null);
                const [distance, setDistance] = useState("");
                const [duration, setDuration] = useState("");
                const [coffeeLat, setCoffeeLat] = useState([]);
                const [coffeeLng, setCoffeeLng] = useState([]);
              

                const originRef = useRef();
                const destinationRef = useRef();
    const { isLoaded, loaderror } = useLoadScript({
          googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries,
        });
    if (loaderror) return "Where's my Coffee!! - be";
    if(!isLoaded) return "Finding your coffee";


    const distCoffee = (distance.slice(0,-2))
    const intCoffee = Number(distCoffee)
    const coffeeDistance = intCoffee / rangeValue;
/*Sets Markers Code Start*/  
function findLegsLength(route){

      const tripDistance = route.legs[0].distance.value
      const newLegLength = tripDistance / (rangeValue)
      
      return newLegLength;
      }


 function getMarkerPositions (route) {  
   
     let markers = [],
       geo = google.maps.geometry.spherical,
       path = route.overview_path,
       point = path[0],
       distance = 0,
       leg,
       overflow,
       markerPosition,
       distanceBetweenStops = findLegsLength(route),
       markerOptions = {
         icon: "http://labs.google.com/ridefinder/images/mm_20_blue.png",
       };

     // For each point on the path
     path.forEach(pointOnPath => {
       // Set the distance of the leg to (previous point distances) + (distance from last point to current point)
       leg = Math.round(geo.computeDistanceBetween(point, pointOnPath));
       let d1 = distance + 0;
       distance += leg;
       overflow = distanceBetweenStops - (d1 % distanceBetweenStops);

       // Once the leg is >= to the desired distance between points, create the new marker and push it to markers
       if (distance >= distanceBetweenStops && leg >= overflow) {
         markerPosition = geo.computeOffset(
           point,
           overflow,
           geo.computeHeading(point, pointOnPath)
         );
         markerOptions.position = markerPosition;
         markers.push(new google.maps.Marker(markerOptions));
         distance -= distanceBetweenStops;
       }
       point = pointOnPath;
     });

     /* latlngs of markers*/
     const coffeeListLat = [];
     const coffeeListLng=[];
         markers.forEach(function (marker) {
           

           console.log("function gets called");
           
           const url =
             "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
           const location = `location=${marker.position.lat()},${marker.position.lng()}`;
           const radius = "&radius=5000";
           const keyword = "&keyword=coffee";
           const key = "&key=AIzaSyCKz0oLVBeWPeIZBLO-JALpTrQCFTz_Fg8";
           const restaurantSearchUrl = url + location + radius + keyword + key;

           fetch(restaurantSearchUrl)
             .then((response) => response.json())
             .then(
               (data) => (
                 /* console.log(
                   data,
                   data.results[0].geometry.location.lat,
                   data.results[0].geometry.location.lng
                 ), */
                
                 coffeeListLat.push(
                   data.results[0].geometry.location.lat 
                   
                 ),
                 coffeeListLng.push(
                   data.results[0].geometry.location.lng
                 )
               )
               
             );
         });
        }
        

 setCoffeeLat(coffeeListLat)

   
     setCoffeeLng(coffeeListLng)
  
 
console.log('coffeeListLat',coffeeListLat)
console.log('coffeeListLng', coffeeListLng)

        setCoffeeLat(coffeeListLat)
        setCoffeeLng(coffeeListLng)

        console.log("NewCoffeeListLat:", coffeeLat)
         
   /*   console.log("coffee lat: ", coffeeLat);
    console.log("coffee lng:", coffeeLng)
     return markers.map(function (marker){
       return { lat: coffeeLat, lng: coffeeLng }
     });}
    


 /*Sets Markers Code End*/
 
         
    async function calculatePath(){
       
        if (originRef.current.value === '' || destinationRef.current.value === ''){
            return
        }
        
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination: destinationRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING,
          waypoints:[{ location:{lat: coffeeLat[0],lng: coffeeLng[0]}, 
          stopover:true}] 
        });
        /* console.log(results, "waypoints") */

      
      
       
    const markerPositions = getMarkerPositions(results.routes[0]);
    
    markerPositions.map( markerPositions => {
    })
         
            
       /*  placeFinder(markerPositions) */      
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
      
        
}
  

return (
  <div>
    <div>
      <Autocomplete>
        <input type="text" placeholder="Origin" ref={originRef} />
      </Autocomplete>
    </div>
    <div>
      <Autocomplete>
        <input type="text" placeholder="Destination" ref={destinationRef} />
      </Autocomplete>
    </div>
    <div>
      <button type="submit" onClick={calculatePath}>
        Find your Buzzed Path
      </button>
    </div>
    <div>
      <p>Distance: {distance}</p>
      <p>Duration: {duration}</p>
      <p>Miles per Coffee: {coffeeDistance}</p>  
    </div>
    <div className="coffeemap">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  </div>
);
        }
