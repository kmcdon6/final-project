import {
   
    GoogleMap
   
   } from "@react-google-maps/api";
import { render } from "@testing-library/react";
  import React from 'react'
  import getMarkerPositions from './map.js'


 
  function PlaceFinder () {
      
      console.log('function gets called')
        var results = []
        const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        const location = `location=${marker.position.lat},${marker.position.lng}`;
        const radius = '&radius=10000';
        const keyword = '&keyword=coffee';
        const key = '&key=AIzaSyCKz0oLVBeWPeIZBLO-JALpTrQCFTz_Fg8';
        const restaurantSearchUrl = url + location + radius + keyword + key;
        console.log(restaurantSearchUrl)
        fetch(restaurantSearchUrl)
          .then(response => response.json())
          .then(data => console.log("RES:", data.results[0].place_id))
        return results 
         }


      PlaceFinder()


  export default PlaceFinder

