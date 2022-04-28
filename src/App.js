import Modal from './components/modal.js'
import "./App.css";
import Gmap from './components/map.js'
import CoffeeSlider from './components/coffeeslider.js'
import React, { useState } from 'react'
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
  width: "100%",
  height: "100%",
  position: "absolute",
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
  <div>
    <div>
      <CoffeeSlider
        
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
        rangeValue={rangeValue}
      ></Gmap>
    </div>
  </div>
);
}

export default App; {}