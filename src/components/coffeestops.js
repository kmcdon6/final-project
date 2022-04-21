import React, { useState, useRef, useEffect }from "react";
import value from "./coffeeslider.js"
import setDistance from "./map.js"
import distance from "./map.js";
import onChangeValue from "./coffeeslider.js";
import setRange from "./coffeeslider.js";
import rangeRef from "./coffeeslider.js";
import handleChange from "./coffeeslider.js";


/* distance.length or similar
 */  

const CoffeeDistance = ({distance, value}) => {
    console.log({distance})
    console.log({value})
    console.log({onChangeValue})
    console.log({setRange})
    console.log({rangeRef})
    console.log({handleChange})

    if (distance > 0){
      let coffeeDistance = ({distance})/({value}+1);
    
    }
    
    return (
      <div>
        
          Distance between cups of Joe {distance}
        
        
      </div>
      
    );
        console.log(CoffeeDistance.coffeeDistance);

    }
    
   
  
  export default CoffeeDistance