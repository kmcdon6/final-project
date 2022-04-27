import axios from "axios"
import React from "react"
// import PlacesService from "react-google-maps/api";



 export default function Placefinder () {
    let location = '123 Main st Durham NC'
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&key=AIzaSyDaAEf6UZCyMT1PpNzLb3LHda7Oi9jA-7M', {
        params:{
            address: location
        }
    })
    .then(function(response){
            console.log(response)
        })
        
    .catch(function(error){
            console.log(error)
        })
    }


// export function PlaceFind() {
//     const placeSearchRequest = new google.maps.places.PlaceSearchRequest()

//     return(
//         console.log(placeSearchRequest)
//     )

// }



//     axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data))
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

// 