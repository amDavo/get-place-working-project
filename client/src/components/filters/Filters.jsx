import React from 'react';
import {useDispatch} from "react-redux";
import {setAllPlaces} from "../../redux/actions/allPlacesAction/placesAction";

const Filters = () => {
    const dispatch = useDispatch()

    const wifiFilter = () => {
        dispatch(setAllPlaces('wifi'))
    }

    const comfortFilter = () => {
        dispatch(setAllPlaces('comfort'))
    }

    const persFilter = () => {
        dispatch(setAllPlaces('pers'))
    }

    const noiseFilter = () => {
        dispatch(setAllPlaces('noise'))
    }

    const atmoFilter = () => {
        dispatch(setAllPlaces('atmo'))
    }


    return (
        <div>
            <button onClick={wifiFilter} >ratingWifi</button>
            <button onClick={comfortFilter} >ratingComf</button>
            <button onClick={persFilter} >ratingPers</button>
            <button onClick={noiseFilter} >ratingNoise</button>
            <button onClick={atmoFilter} >ratingAtmo</button>
        </div>
    );
};



export default Filters;