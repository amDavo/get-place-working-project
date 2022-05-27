import React from 'react';
import {useDispatch} from "react-redux";
import {getAllPlaces} from "../../redux/thunk/placesThunk/placesThunk";

const Filters = () => {
    const dispatch = useDispatch()

    const wifiFilter = () => {
        dispatch(getAllPlaces('wifi'))
    }

    const comfortFilter = () => {
        dispatch(getAllPlaces('comfort'))
    }

    const persFilter = () => {
        dispatch(getAllPlaces('pers'))
    }

    const noiseFilter = () => {
        dispatch(getAllPlaces('noise'))
    }

    const atmoFilter = () => {
        dispatch(getAllPlaces('atmo'))
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