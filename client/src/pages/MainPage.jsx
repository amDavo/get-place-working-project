import React, {useEffect} from 'react';
import ListOfCards from "../components/listOfCards/ListOfCards";
import ShowPlacesOnMapButton from "../components/map/buttons/showAllPlaces/ShowPlacesOnMapButton";
import {useDispatch, useSelector} from "react-redux";
// import classes from './MainPage.module.css'
import {setViewNavBar} from "../redux/actions/viewNavBarAcction/viewNavBar.action";
import Filters from "../components/filters/Filters";


const MainPage = () => {
    const viewNavBar = useSelector(state => state.viewNavBar)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setViewNavBar(false))
    }, [])


    return (
        <>
            {!viewNavBar && (
                <div className='filters'>
                    <Filters/>
                </div>
            )}
            {!user && (
                <div className={classes.errorMessage}>
                    Необходимо зарегистрироваться или войти
                </div>)}

            <>
                <ListOfCards/>
                <ShowPlacesOnMapButton/>
            </>

        </>
    );
};

export default MainPage;
