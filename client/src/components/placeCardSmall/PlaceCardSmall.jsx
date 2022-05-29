import React from 'react';
import {useNavigate} from "react-router-dom";
import FavButton from "../UI/addToFavButton/FavButton";

const PlaceCardSmall = ({cardData}) => {
    console.log(cardData)
    const navigate = useNavigate()

    const navHandler = (data) => {
        navigate(data)
    }

    return (
        <>
            <div>
                <h3>{cardData.place_name}</h3>
                <h3>{cardData.address}</h3>
                <h3>{cardData.image}</h3>
                <h3>{cardData.category}</h3>
                <h3>{cardData.free}</h3>
                <h3>{cardData.working_hours}</h3>
                <h4>RATING IN PROGRESS</h4>
                <button onClick={() => navHandler(`/location/${cardData.id}`)}>see details</button>
                <FavButton cardData={cardData}/>
            </div>
        </>
    );
};

export default PlaceCardSmall;