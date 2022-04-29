import {
   
    GoogleMap
   
   } from "@react-google-maps/api";
import { render } from "@testing-library/react";
  import React from 'react'


 
 
  function PlaceFinder () {
    /*const state = { 
        restaurantList: []
      }

      this.setState({
          restaurantList: []
      });*/

  
      console.log('function gets called')
        var restaurantList = []
        var data = {}
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
          .then(results => console.log("RES:", results))
        return results 
        
          
          
          
      }


      PlaceFinder()


  export default PlaceFinder

