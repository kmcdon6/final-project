/*global google*/
import React from 'react'
import {
useLoadScript,
GoogleMap,
}
from '@react-google-maps/api' 
import axios from 'axios'


/* function PlacesFinder () { */
    
    

    //fetch(restaurantSearchUrl)
      //.then(response => response.json())
      //.then(result => this.setState({restaurantList: result}))
      //console.log(restaurantList)
      //return(restaurantList)
/*   }

   PlacesFinder() */
   
 
/* 
export default PlacesFinder */
//this is the api call w/ non working cors handling
/*const restaurantList = []
    const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
    const location = `location=${35.919131902638696},${-78.90083081212661}`;
    const radius = '&radius=5000';
    const type = '&keyword=restaurant';
    const key = '&key=AIzaSyCKz0oLVBeWPeIZBLO-JALpTrQCFTz_Fg8';
    const restaurantSearchUrl = url + location + radius + type + key;
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
        console.log(xhr.responseText)
    })
    xhr.open('GET', restaurantSearchUrl)
    console.log('sent request')
    xhr.send()*/



/*
 // eslint-disable-next-line no-undef
    var map ={};
    var service;
    var google;

    var request = {
        location: {lat: 35.998746228259236, lng: -78.92862651348197},
        radius: '8046',
        keyword: ['cafe']
    }
    // eslint-disable-next-line no-undef
service = new google.maps.places.PlacesService(map);
service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        console.log(results)
      }
    } */