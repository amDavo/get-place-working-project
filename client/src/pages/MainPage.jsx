import React from 'react';
import Nav from "../components/Header/Nav/Nav";
import Filters from "../components/filters/Filters";
import ListOfCards from "../components/listOfCards/ListOfCards";
import ShowPlacesOnMapButton from "../components/map/buttons/showAllPlaces/ShowPlacesOnMapButton";

const MainPage = () => {
    return (
        <>
            <div className='nav-child'>
                <Nav/>
            </div>
            <div className='filters'>
                <Filters/>
            </div>
            <ListOfCards/>
            <ShowPlacesOnMapButton/>
        </>
    );
};

export default MainPage;
