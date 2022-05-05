import Modal from './components/modal.js'
import "./App.css";
import Gmap from './components/map.js'
import CoffeeSlider from './components/coffeeslider.js'
import React, { useState } from 'react'
import PlaceFinder from './components/placeFinder.js'
import getMarkerPositions from './components/map.js' 
import ReactDom from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '@fontsource/roboto/500.css';

const logo = new URL("./assets/images/buzzpath_black.png", import.meta.url)
/* import onChangeSlider from "./components/slidervalue.js";
import rangeValue from "./components/slidervalue.js";
import setShow from "./components/slidervalue.js";
import show from "./components/slidervalue.js"; */
/* import onChangeSlider from "./components/slidervalue.js"
 */
/* import ModalPopUp from './components/modalpopup.js' */


const center = { lat: 35.9940, lng: -78.8986 };
const libraries = ["places"];
  const mapContainerStyle = {
   
};  



function App() {


  const onChangeSlider = (e) => {
    console.log(rangeValue);
    setRangeValue(parseInt(e.target.value, 10));
    if (rangeValue > 18) {
      let openModal = setShow(true);
    }
  };

 
  const [rangeValue, setRangeValue] = useState(1);
  const [show, setShow, isOpen] = useState(false);

return (
  <div class= "flex-container-1">
  <div class="flex-logo">
  <img src={logo}/>
  </div>
  {/* <h1 class="flex-title">Welcome to <h1 class="flex-buzzpath">BUZZPATH</h1></h1> */}
  <div class="flex-container-2">
    <div >
      <CoffeeSlider
        
        step={1}
        defaultValue={1}
        value={rangeValue}
        onChangeValue={onChangeSlider}
      />
    </div>
    
    <div className="modal-button">
      <Button size="x-small" color="primary" type='submit' onClick={() => setShow(true)}>Do you think you could have a Coffee Addiction?</Button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
    </div>
  <div>
    <PlaceFinder
    getMarkerPositions={getMarkerPositions}>
    </PlaceFinder>
  </div>
  <div class="map-container">
    <div className="gmaps">
      <Gmap 
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        resetBoundsOnResize={true}
        rangeValue={rangeValue}
        placeFinder={PlaceFinder}
      ></Gmap>
    </div>
    </div>
  </div>
);
}

export default App; {}