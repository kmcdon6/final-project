import {
   
    GoogleMap
   
   } from "@react-google-maps/api";
import { render } from "@testing-library/react";
  import React from 'react'
  import getMarkerPositions from './map.js'
  import calculatePath from './map.js'



    
    function PlaceFinder () {
      console.log('function gets called')
        var results = []
        const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        const location = `location=${35.919131902638696},${-78.90083081212661}`;
        const radius = '&radius=10000';
        const keyword = '&keyword=coffee';
        const key = '&key=AIzaSyCKz0oLVBeWPeIZBLO-JALpTrQCFTz_Fg8';
        const restaurantSearchUrl = url + location + radius + keyword + key;
        console.log(restaurantSearchUrl)
        fetch(restaurantSearchUrl)
          .then(response => response.json())
          .then(data => console.log("RES:", data.results[0].geometry.location.lat, data.results[0].geometry.location.lng))
        return results 
         }

         PlaceFinder()
        


    


  export default PlaceFinder

