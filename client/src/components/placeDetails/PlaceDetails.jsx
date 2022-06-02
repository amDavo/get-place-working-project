import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaceDetails} from "../../redux/thunk/placeDetailsThunk/placeDetailsThunk";
import {useParams} from "react-router-dom";
import cl from './details.module.css'
import '../../App.css'
import Comments from "../comments/Comments";
import RatingModal from "./RatingModal";

const PlaceDetails = () => {
    const placeInfo = useSelector(state => state.placeDetails)
    const dispatch = useDispatch()
    const {id} = useParams()

    const placeRates = useSelector(state => state.placeRate)
    const [addRate, setAddRate] = useState(false)


    useEffect(() => {
        dispatch(getPlaceDetails(id))
    }, [])

    console.log(placeRates, 'w1111')


    const showVote = () => {
        setAddRate(!addRate)
    }


    return (
        <>
            <div className={cl.generalDiv}>
                <div className={cl.placeInfo}>
                    <h2 className={cl.head}>Детальная информация о локации</h2>
                    <img
                        className={cl.imageDiv}
                        src={`http://localhost:8080/images/${placeInfo.img}`}
                        alt="image"/>
                    <h2 className={cl.nameDiv}>Название: {placeInfo.place_name}</h2>
                    <h3 className={cl.nameDiv}>Категория: {placeInfo.category}</h3>
                    <h3 className={cl.nameDiv}>Адрес: {placeInfo.location}</h3>
                    <h3 className={cl.nameDiv}>Часы работы: {placeInfo.working_hours}</h3>
                    <h3 className={cl.nameDiv}>Вход: {placeInfo.free ? "бесплатный" : "платный"}</h3>
                    <h3 className={cl.nameDiv}>Описание: {placeInfo.description}</h3>
                    <RatingModal>
                        <button onClick={showVote}>Добавить отзыв</button>
                    </RatingModal>

                </div>

            </div>
            <div className={cl.stars}>
                <p style={{fontSize: '70px'}}>⭐</p> <h1>{placeRates[0]?.wifi}</h1>
                <p style={{fontSize: '70px'}}>⭐</p> <h1>{placeRates[0]?.staff}</h1>
                <p style={{fontSize: '70px'}}>⭐</p> <h1>{placeRates[0]?.noise}</h1>
                <p style={{fontSize: '70px'}}>⭐</p> <h1>{placeRates[0]?.comfort}</h1>
                <p style={{fontSize: '70px'}}>⭐</p> <h1>{placeRates[0]?.atmosphere}</h1>
            </div>
            <Comments id={id}/>
        </>
    );
}

export default PlaceDetails;
