import Modal from './components/modal.js'
import "./App.css";
import Gmap from './components/map.js'
import CoffeeSlider from './components/coffeeslider.js'
import React, { useState } from 'react'



/* import ModalPopUp from './components/modalpopup.js' */

const center = { lat: 35.9940, lng: -78.8986 };
const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
};

function App() {

  const onChangeSlider = e => {
    console.log(rangeValue)
    setRangeValue(parseInt(e.target.value, 10));  
      
        if (rangeValue > 18) {
          let openModal = setShow(true);
      }; 
  }

  const [rangeValue, setRangeValue] = useState(10);
  const [show, setShow, isOpen] = useState(false);




return (
  <div>
    <h1>Buzz Path</h1>

    <b>Start: </b>
    <input id="start" type="text"></input>
    <b>End: </b>
    <input id="end" type="text"></input>
    <div>
      <CoffeeSlider
        min={0}
        max={100}
        step={1}
        defaultValue={1}
        value={rangeValue}
        onChangeValue={onChangeSlider}
      />
    </div>
    <div className="modal-button">
      <button onClick={() => setShow(true)}>Coffee Addiction?</button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
    <div className="gmaps">
      <Gmap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        resetBoundsOnResize={true}
      ></Gmap>
    </div>
  </div>
);
}

export default App; {}