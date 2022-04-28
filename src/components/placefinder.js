/*global google*/
// import axios from "axios"
import React from "react"
import {
    useLoadScript,
    GoogleMap,
    Autocomplete,
    DirectionsRenderer,
    Marker,
   } from "@react-google-maps/api";

// import PlacesService from "react-google-maps/api";




results =  function Placefinder () {
    let request = {
            keyword: "coffee",
            location: {lat:36.70826474476383, lng: -78.11487136020948},
            radius: 8046,
      };
  
      let service = new google.maps.places.PlacesService(map);
  
      service.nearbySearch(request, results); {
          console.log(results)
    
      }
    }
    export default Placefinder()
     










    // axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json',{
    //     params:{
    //         keyword: "coffee",
    //         location: {lat:36.70826474476383, lng: -78.11487136020948},
    //         radius: 8046,
    //     }
    // })
    // .then(function(response){
    //         console.log(response)
    //     })
        
    // .catch(function(error){
    //         console.log(error)
    //     })
    // }


