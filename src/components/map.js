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
/* Micah's Code */  
      async function findLegsLength(){
      console.log(rangeValue)     
      console.log(directionsResponse.routes[0].legs[0].distance.value);

      const tripDistance = directionsResponse.routes[0].legs[0].distance.value
      const stops = 2

      const newLegLength = tripDistance/stops
      console.log(newLegLength)
      console.log(directionsResponse);
      }

      findLegsLength()

/*End Micah's Code */
/* Other BS Code */
async function getMarkers (route,distanceBetweenStops, markerOptions) { 
  console.log('Get Markers Gets Called')       
  let markers=[],
      geo=google.maps.geometry.spherical,
      path=directionsResponse.routes[0].overview_path,
      point=path[0],
      distance=0,
      leg,
      overflow,
      markerPosition;
    
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

  markers.forEach(marker => console.log(marker.position.lat(), marker.position.lng()))
  return markers;}

  getMarkers()
 /*End Other BS Code */
      
      

      
   
   
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
