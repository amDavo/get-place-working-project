import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPlaces} from "../../redux/thunk/placesThunk/placesThunk";
import PlaceCardSmall from "../placeCardSmall/PlaceCardSmall";
import './module.css'

const ListOfCards = () => {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPlaces("all"))
    }, [])

    return (
        <>
            <div className='cards-container'>
                {
                    list.map(el =>
                        <PlaceCardSmall cardData={el} key={el.id}/>)
                }
            </div>
        </>
    );
};

export default ListOfCards;
