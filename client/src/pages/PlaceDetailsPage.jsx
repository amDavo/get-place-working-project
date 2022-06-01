import React from 'react';
import PlaceDetails from "../components/placeDetails/PlaceDetails";
import SelectedPlaceMap from "../components/map/selectedPlace/SelectedPlaceMap";

const PlaceDetailsPage = () => {
    return (
        <>
            <PlaceDetails/>
            <SelectedPlaceMap/>
        </>
    );
};

export default PlaceDetailsPage;
