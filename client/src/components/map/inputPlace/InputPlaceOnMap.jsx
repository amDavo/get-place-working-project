import React from 'react';
import Map from "../Map";
import classes from "../Map.module.css";
import {Marker} from "@react-google-maps/api";

const InputPlaceOnMap = () => {
    const center = {
        lat: 55.7522,
        lng: 37.6156
    };
    return (
        <>
            <Map center={center} container={classes.modal}>
                <Marker position={{lng: 37.6156, lat: 55.7522}}/>
            </Map>
        </>
    );
};

export default InputPlaceOnMap;
