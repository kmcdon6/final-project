import React,{useState} from 'react'
  


    const OnChangeSlider = (e) => {
      const [rangeValue, setRangeValue] = useState(10);
      const [show, setShow, isOpen] = useState(false);
      
      console.log(rangeValue);
      setRangeValue(parseInt(e.target.value, 10));
       if (rangeValue > 18) {
        let openModal = setShow(true);
      }


    };

    export default OnChangeSlider




