import React from 'react';
import classes from "../Map.module.css";
import Map from "../Map";

const SelectedPlaceMap = () => {
    const center = {
        lat: 55.7522,
        lng: 37.6156
    };
    return (
        <Map center={center} container={classes.modal} selectedPlaceMap={true}/>
    );
};

export default SelectedPlaceMap;
