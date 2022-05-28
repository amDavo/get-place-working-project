import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaceDetails} from "../../redux/thunk/placeDetailsThunk/placeDetailsThunk";

const PlaceDetails = () => {
    const placeInfo = useSelector(state => state.placeDetails)
    console.log(placeInfo, 'cfvfvfvfvs')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlaceDetails())
    }, [])

    return (
        <>
            hello world
        </>
    );
};

export default PlaceDetails;