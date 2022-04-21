import React, { useState, useRef, useEffect }from "react";
import "./coffeeslider.css";
import Modal from "./modal.js";


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
    
    const rangeRef = useRef(onChangeValue);
    const [range, setRange] = useState(defaultValue);
    const handleChange = max => e =>{
        onChangeValue(e)
        setRange(e.target.value);
        console.log(setRange)
/*         this.setState({sliderValue})
 */    }

    

  
       /* when slider value > 20 when stops - talk to DOM - open modal */

    return (
      <>
        <div className="coffecup">
          Cups of Joe
          <input
            ref={rangeRef}
            className="cupsofjoe"
            type="range"
            step={step}
            min={min}
            max={max}
            /* defaultValue = '1' */
            value={value}
            onChange={handleChange(max)}
          />
          <span className="range-slider-value">{range}</span>
        </div>
      </>
    );
}

export default CoffeeSlider;
