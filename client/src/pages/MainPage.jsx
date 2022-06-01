import React from 'react';
import ListOfCards from "../components/listOfCards/ListOfCards";
import ShowPlacesOnMapButton from "../components/map/buttons/showAllPlaces/ShowPlacesOnMapButton";
import Filters from "../components/filters/Filters";
import {useSelector} from "react-redux";

const MainPage = () => {
    const viewNavBar = useSelector(state => state.viewNavBar)


    return (
        <>
        
            {viewNavBar && (
                <div className='filters'>
                    <Filters/>
                </div>
            )}
          
            <ListOfCards/>
            <ShowPlacesOnMapButton/>
        </>
    );
};

export default MainPage;
