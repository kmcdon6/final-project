import {
  useLoadScript,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import React, { useState, useRef } from 'react'
import "./maps.css"
import CoffeeDistance from "./coffeestops";
import CoffeeSlider from "./coffeeslider.js";
import value from "./coffeeslider.js";
import rangeValue from './slidervalue.js'



const center = {lat: 35.9940,lng: -78.8986}
const libraries = ["places"]
const mapContainerStyle = {
    width: "100%",
    height: "100%",
    overflow: "visible",
    resetBoundsOnResize: "true",
}


export default function Gmap () {
    
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
    const numCoffee = (value)
    const valCoffee = Number(numCoffee)
    console.log(typeof(intCoffee))
    console.log(intCoffee)
    console.log(distCoffee)
    console.log(rangeValue);
    console.log(typeof(CoffeeSlider))
    console.log(valCoffee);
    console.log(numCoffee)
/*     const coffeeDistance = { intCoffee } / ({ value } + 1); */
/*         async function coffeeStops() {
          await calculatePath;
          if (distance > 0) {
            return coffeeDistance;
            console.log({distance});
            console.log(coffeeDistance);
            
          }
        } */
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
        console.log(typeof(distance))
        

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
        <p>{}</p>
        
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
