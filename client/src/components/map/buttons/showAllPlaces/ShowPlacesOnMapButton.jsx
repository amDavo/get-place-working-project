import React, {useState} from 'react';
import './ShowPlacesOnMapButton.css';
import {FaListUl, FaMap} from "react-icons/fa";
import FullScreenMap from "../../fullScreen/FullScreenMap";
import {useDispatch} from "react-redux";
import {ACTION_clearLocation} from "../../../../redux/actions/locationAction/locationAction";


const ShowPlacesOnMapButton = () => {
    const [map, setMap] = useState(false)
    const [value, setValue] = useState(showMap)
    const dispatch = useDispatch();

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
        if (!map) {
            dispatch(ACTION_clearLocation())
        }
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
