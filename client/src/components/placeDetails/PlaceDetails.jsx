import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaceDetails} from "../../redux/thunk/placeDetailsThunk/placeDetailsThunk";
import {useParams} from "react-router-dom";

const PlaceDetails = () => {
    const placeInfo = useSelector(state => state.placeDetails)
    const dispatch = useDispatch()
    const {id} = useParams()


    useEffect(() => {
        dispatch(getPlaceDetails(id))
        console.log(placeInfo, 'bbbbbbb')
    }, [])

    return (
        <>
            hello world
        </>
    );
};

export default PlaceDetails;