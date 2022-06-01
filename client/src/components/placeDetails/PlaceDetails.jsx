import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaceDetails} from "../../redux/thunk/placeDetailsThunk/placeDetailsThunk";
import {useParams} from "react-router-dom";
import Comments from '../comments/Comments';
import cl from './details.module.css'
import '../../App.css'
import {Rating} from "@mui/material";

const PlaceDetails = () => {
    const placeInfo = useSelector(state => state.placeDetails)
    const dispatch = useDispatch()
    const {id} = useParams()
    // const [rate, setRate] = useState('')
    const [inputs, setInputs] = useState({})
    console.log(placeInfo, '0000000')

    const changeHandler = (event) => {
        setInputs(prev => ({...prev, [event.target.name]: event.target.value}))
        // setRate(newValue);
        console.log(inputs, '-------')
    }


    useEffect(() => {
        dispatch(getPlaceDetails(id))

    }, [])


    return (
        <>
            <div className={cl.generalDiv}>
                <div className={cl.placeInfo}>
                    <h2 className={cl.head}>Детальная информация о локации</h2>
                    <img
                        className={cl.imageDiv}
                        src={`http://localhost:8080/images/${placeInfo.img}`}
                        alt="image"/>
                    <h2 className={cl.nameDiv}>🎟️Название: {placeInfo.place_name}</h2>
                    <h3 className={cl.nameDiv}>🔎Категория: {placeInfo.category}</h3>
                    <h3 className={cl.nameDiv}>📍Адрес: {placeInfo.location}</h3>
                    <h3 className={cl.nameDiv}>⏰Часы работы: {placeInfo.working_hours}</h3>
                    <h3 className={cl.nameDiv}>🪙Вход: {placeInfo.free ? "бесплатный" : "платный"}</h3>
                </div>
                <div className={cl.voteDiv}>
                    <Rating
                        name="test"
                        value={inputs.test}
                        onChange={changeHandler}
                    />
                </div>
                <Comments id={id}/>
            </div>
        </>
    );
}

export default PlaceDetails;
