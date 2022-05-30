import React, {useState} from 'react';
import {FaMap} from "react-icons/fa";
import InputPlaceOnMap from "../../inputPlace/InputPlaceOnMap";
import './InputPlaceOnMapButton.css'

const InputPlaceOnMapButton = () => {
    const [map, setMap] = useState(false)
    const [value, setValue] = useState(showMap)

    function showMap() {
        return (
            <>
                <span>Отметить</span><FaMap/>
            </>
        )
    }

    function hideMap() {
        return (
            <>
                <span>Скрыть карту</span>
            </>
        )
    }

    function buttonHandle() {
        setMap(!map)
        setValue(map ? showMap : hideMap)
    }

    return (
        <>
            {map ? <InputPlaceOnMap/> : null}
            <button className="inputBtn btn btn-outline-info" onClick={() => buttonHandle()}>
                {value}
            </button>
        </>
    );
};

export default InputPlaceOnMapButton;
