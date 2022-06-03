import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaceDetails} from "../../redux/thunk/placeDetailsThunk/placeDetailsThunk";
import {useParams} from "react-router-dom";
import cl from './details.module.css'
import '../../App.css'
import Comments from "../comments/Comments";
import RatingModal from "./RatingModal";
import {Button} from "react-bootstrap";

function getAverageRate(allPlaces, id) {
    console.log(allPlaces)
    if (allPlaces?.length) {
        const rates = allPlaces.filter(place => place.id == id)[0].rate
        const count = allPlaces.filter(place => place.id == id)[0].rateCount
        let res = {...rates};
        for (let key in res) res[key] = (rates[key] / count[key]).toFixed(1);
        return res;
    }
}

const PlaceDetails = () => {
    const placeInfo = useSelector(state => state.placeDetails)
    const dispatch = useDispatch()
    const {id} = useParams()

    const allPlaces = useSelector(state => state.allPlaces)
    const placeRates = getAverageRate(allPlaces, id);
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
            <div className={cl.flexContainer}>
                <div className={cl.generalDiv}>
                    <div className={cl.placeInfo}>
                        <h2 className={cl.head}>Детальная информация о локации
                            <RatingModal>
                                <Button className={cl.rateBtn}
                                        onClick={showVote}>Оценить
                                    локацию</Button>
                            </RatingModal>
                        </h2>
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
                        {/*<ShowOneOnMapButton/>*/}


                    </div>
                </div>

                <div className={cl.starAndComDiv}>
                    <div className={cl.stars}>
                        <div className={cl.starStyle}>
                            <div className={cl.starBorder}>
                                <h5>Качество интернета</h5>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h2>{placeRates?.wifi}</h2>
                            </div>
                            <div className={cl.starBorder}>
                                <h5>Дружелюбность персонала</h5>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h2>{placeRates?.staff}</h2>
                            </div>
                            <div className={cl.starBorder}>
                                <h5>Уровень комфорта</h5>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h2>{placeRates?.noise}</h2>
                            </div>
                            <div className={cl.starBorder}>
                                <h5>Тишина в заведении</h5>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h2>{placeRates?.comfort}</h2>
                            </div>
                            <div className={cl.starBorder}>
                                <h5>Общая атмосфера</h5>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h2>{placeRates?.atmosphere}</h2>
                            </div>
                        </div>
                    </div>
                    <div className={cl.comm}>
                        <Comments id={id}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlaceDetails;
