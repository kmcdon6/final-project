/* global google */
import {
  useLoadScript,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  Marker,
 } from "@react-google-maps/api";
import React, { useState, useRef } from 'react'
import "./maps.css"
import PlaceFinder from './placeFinder.js'

 



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
/*Sets Markers Code Start*/  
      function findLegsLength(route){
      console.log(rangeValue)     
      console.log(route.legs[0].distance.value);

      const tripDistance = route.legs[0].distance.value
      const newLegLength = tripDistance / (rangeValue)
      console.log(typeof rangeValue)
      
      return newLegLength;
      }

   





function getMarkerPositions (route) { 
  console.log('Get Markers Gets Called')       
  let markers=[],
      geo=google.maps.geometry.spherical,
      path=route.overview_path,
      point=path[0],
      distance=0,
      leg,
      overflow,
      markerPosition,
      distanceBetweenStops = findLegsLength(route),
      markerOptions = {
        icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png',
      };
      
    
    // For each point on the path
    path.forEach(pointOnPath => {
      // Set the distance of the leg to (previous point distances) + (distance from last point to current point)
      leg = Math.round(geo.computeDistanceBetween(point, pointOnPath));
      let d1 = distance + 0
      distance += leg;        
      overflow = distanceBetweenStops - (d1 % distanceBetweenStops);
      
      // Once the leg is >= to the desired distance between points, create the new marker and push it to markers
      if(distance >= distanceBetweenStops && leg >= overflow) {
          markerPosition = geo.computeOffset(point,overflow,geo.computeHeading(point,pointOnPath));
          markerOptions.position = markerPosition;
          markers.push(new google.maps.Marker(markerOptions));
          distance -= distanceBetweenStops;
      }
      point = pointOnPath
    });
/* latlngs of markers*/
  markers.forEach(function(marker) {
    console.log(marker.position.lat(), marker.position.lng())
  } )
  console.log('PATH:', path);
  return markers.map(function(marker){
    return {lat: marker.position.lat(), lng: marker.position.lng()}

   
    
  });}
  
  
 /*Sets Markers Code End*/
 
      
      

      
   
   
 /* async function coffeeStops({rangeValue}) { */
           const coffeeDistance = intCoffee /(rangeValue); 

        /*   await calculatePath;
          if (distance > 0) {
            console.log(coffeeDistance)
            return coffeeDistance;
            console.log({distance}); */



          
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
            
          

          
          
          
        });

        

        
        const markerPositions = getMarkerPositions(results.routes[0]) 
        console.log('MKRPOS:', markerPositions)  
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
        
        /* console.log(coffeeDistance) */
        
        

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
        <button type='submit' onClick={calculatePath}>Find your Buzzed Path</button>
    </div>
    <div>
        <p>Distance: {distance}</p>
        
        <p>Duration: {duration}</p>
        <p>Miles per Coffee: {coffeeDistance}</p>
{/*         <p>Miles per Coffee: {intCoffee/rangeValue}</p>
 */}        
    </div>
    <div className="coffeemap">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ><Marker position={center}/>
        {directionsResponse && (
            <DirectionsRenderer directions = {directionsResponse}/>
        )}</GoogleMap>
    </div>
  </div>
);
}
