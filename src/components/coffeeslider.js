import React, { useState, useRef, useEffect }from "react";
import "./coffeeslider.css";
import Modal from "./modal.js";
import Slider from "@mui/material/Slider"


const CoffeeSlider = (props) => {
 
  const {
        step,
        min,
        max,
        defaultValue,
        value,
        onChangeValue,
        openModal,
    } = props;
    console.log(value)
    
    const [range, setRange] = useState(defaultValue);
    const handleChange = e =>{
        onChangeValue(e)
        console.log(e.target.value)
        setRange(e.target.value);
        
/*         this.setState({sliderValue})
 */    }

    

  
       /* when slider value > 20 when stops - talk to DOM - open modal */

    return (
      <>
        <div className="coffeecup">
          First of all, how many cups o' Joe do you want?
          <input           
            className="cupsofjoe"
            type="range"
            step={step}
            min='0'
            max='20'
            //  defaultValue = '1' 
            value={value}
            onChange={handleChange}
          />
          <span className="range-slider-value">{range}</span>
        </div>
      </>
    );
}

export default CoffeeSlider;
