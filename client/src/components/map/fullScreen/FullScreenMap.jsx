import React from 'react';
import Map from "../Map";
import classes from '../Map.module.css';

const FullScreenMap = () => {
    const center = {
        lat: 55.7522,
        lng: 37.6156
    };
    return (
        <Map center={center} container={classes.container}/>
    );
};

export default FullScreenMap;
