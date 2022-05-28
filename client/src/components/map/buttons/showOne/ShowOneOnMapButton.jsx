import React, {useState} from 'react';
import {FaMap} from "react-icons/fa";
import SelectedPlaceMap from "../../selectedPlace/SelectedPlaceMap";
import './ShowOneOnMapButton.css';

const ShowOneOnMapButton = () => {
    const [map, setMap] = useState(false)
    const [value, setValue] = useState(showMap)

    function showMap() {
        return (
            <>
                <span>Открыть карту</span><FaMap/>
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
            {map ? <SelectedPlaceMap/> : null}
            <button className="one btn btn-outline-success" onClick={() => buttonHandle()}>
                {value}
            </button>
        </>
    );
};

export default ShowOneOnMapButton;
