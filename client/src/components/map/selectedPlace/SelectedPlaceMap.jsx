import React from 'react';
// import './SelectedPlaceMap.css';
import Map from "../Map";
import classes from "../Map.module.css";

const SelectedPlaceMap = () => {
    const center = {
        lat: 55.7522,
        lng: 37.6156
    };
    return (
        <>
            <div id="demo-modal" className="modal">
                <div className="modal__content">

                    <Map center={center} container={classes.modal} selectedPlaceMap={true}/>
                    <p>
                        You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!
                    </p>
                    <a href="#" className="modal__close">&times;</a>
                </div>
            </div>
        </>
    );
};

export default SelectedPlaceMap;
