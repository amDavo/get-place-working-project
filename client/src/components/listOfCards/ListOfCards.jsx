import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPlaces} from "../../redux/thunk/placesThunk/placesThunk";
import PlaceCardSmall from "../placeCardSmall/PlaceCardSmall";

const ListOfCards = () => {
    const list = useSelector(state => state.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPlaces("all"))
    }, [])


    console.log(list)

    return (
        <>
            {
                list.map(el =>
                    <PlaceCardSmall cardData={el}/>)
            }
        </>
    );
};

export default ListOfCards;