import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaceDetails} from "../../redux/thunk/placeDetailsThunk/placeDetailsThunk";
import {useParams} from "react-router-dom";
import cl from './details.module.css'
import '../../App.css'
import Comments from "../comments/Comments";
import ShowOneOnMapButton from "../map/buttons/showOne/ShowOneOnMapButton";
import RatingModal from "./RatingModal";

const PlaceDetails = () => {
    const placeInfo = useSelector(state => state.placeDetails)
    const dispatch = useDispatch()
    const {id} = useParams()

    const placeRates = useSelector(state => state.placeRate)
    const [addRate, setAddRate] = useState(false)
    const [inputs, setInputs] = useState({})

    useEffect(() => {
        dispatch(getPlaceDetails(id))
    }, [])


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
                <div>
                    <h4>Качество интернета</h4>
                    <img style={{width: '60px', height: '60px'}} src="/icon/favorite.png" alt="wwwww"/>
                    <h1>{placeRates[0]?.wifi}</h1>
                </div>
                <div>
                    <h4>Качество интернета</h4>
                    <img style={{width: '60px', height: '60px'}} src="/icon/favorite.png" alt="wwwww"/>
                    <h1>{placeRates[0]?.staff}</h1>
                </div>
                <div>
                    <h4>Качество интернета</h4>
                    <img style={{width: '60px', height: '60px'}} src="/icon/favorite.png" alt="wwwww"/>
                    <h1>{placeRates[0]?.noise}</h1>
                </div>
                <div>
                    <h4>Качество интернета</h4>
                    <img style={{width: '60px', height: '60px'}} src="/icon/favorite.png" alt="wwwww"/>
                    <h1>{placeRates[0]?.comfort}</h1>
                </div>
                <div>
                    <h4>Общая атмосфера</h4>
                    <img style={{width: '60px', height: '60px'}} src="/icon/favorite.png" alt="wwwww"/>
                    <h1>{placeRates[0]?.atmosphere}</h1>
                </div>
            </div>
            <Comments id={id}/>
        </>
    );
}

export default PlaceDetails;
