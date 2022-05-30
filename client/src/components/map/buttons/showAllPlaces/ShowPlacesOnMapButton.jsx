import React, {useState} from 'react';
import './ShowPlacesOnMapButton.css';
import {FaListUl, FaMap} from "react-icons/fa";
import FullScreenMap from "../../fullScreen/FullScreenMap";


const ShowPlacesOnMapButton = () => {
    const [map, setMap] = useState(false)
    const [value, setValue] = useState(showMap)

    function showMap() {
        return (
            <>
                <span>Показать на карте</span><FaMap/>
            </>
        )
    }

    function showCards() {
        return (
            <>
                <span>Посмотреть список</span><FaListUl/>
            </>
        )
    }


    function buttonHandle() {
        setMap(!map)
        setValue(map ? showMap : showCards)
    }

    return (
        <>
            {map ? <FullScreenMap/> : null}
            <button className="all btn btn-outline-secondary" onClick={() => buttonHandle()}>
                {value}
            </button>
        </>
    );
};

export default ShowPlacesOnMapButton;
