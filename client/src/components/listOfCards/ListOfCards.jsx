import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPlaces} from "../../redux/thunk/placesThunk/placesThunk";
import PlaceCardSmall from "../placeCardSmall/PlaceCardSmall";
import './module.css'
import {THUNK_getCoordsFromAddress} from "../../redux/thunk/locationThunk/locationThunk";

const ListOfCards = () => {
    const allPlaces = useSelector(state => state.allPlaces)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPlaces("all"))
        // dispatch(ACTION_clearLocation())
        dispatch(THUNK_getCoordsFromAddress(allPlaces))
    }, [])

    return (
        <>
            <div className='cards-container'>
                {
                    allPlaces.map(el =>
                        <PlaceCardSmall cardData={el} key={el.id}/>)
                }
            </div>
        </>
    );
};

export default ListOfCards;
