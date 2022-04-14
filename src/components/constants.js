import React, { useState, useRef, useEffect }from "react";



/* coffee slider */
export const CoffeeSlider = (props) => {
    const {
        step,
        min,
        max,
        defaultValue,
        value,
        onChangeValue,
        openModal,
    } = props;}
export const rangeRef = useRef();
export const [range, setRange] = useState(defaultValue);
export const handleChange = max => e =>{
        onChangeValue(e)
        setRange(e.target.value);}
export const center = { lat: 35.994, lng: -78.8986 };
export const libraries = ["places"];
export const mapContainerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
};

    
/* map */
export const [map, setMap] = useState(null);
export const [directionsResponse, setDirectionsResponse] =
    useState(null);
export const [distance, setDistance] = useState("");
export const [duration, setDuration] = useState("");
export const originRef = useRef();
export const destinationRef = useRef();

/* modal */
export const [rangeValue, setRangeValue] = useState(10);
export const [show, setShow, isOpen] = useState(false);

