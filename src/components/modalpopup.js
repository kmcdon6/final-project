import React, { useState, useRef, useEffect } from "react";
import './coffeeslider.js';


const OpenModal = e =>{
  const [show, setShow, isOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState(10);
  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10));   
  }

  let openModal = [ rangeValue];  
    if (rangeValue > 20) {
      Modal = setShow(true); 

      console.log(openModal)
    }
}