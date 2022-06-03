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
                                <Button style={{marginBottom: "20px", marginTop: '20px'}} variant='outline-success'
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
                                <h4>Качество интернета</h4>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h1>{placeRates?.wifi}</h1>
                            </div>
                            <div className={cl.starBorder}>
                                <h4>Дружелюбность персонала</h4>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h1>{placeRates?.staff}</h1>
                            </div>
                            <div className={cl.starBorder}>
                                <h4>Уровень комфорта</h4>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h1>{placeRates?.noise}</h1>
                            </div>
                            <div className={cl.starBorder}>
                                <h4>Тишина в заведении</h4>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h1>{placeRates?.comfort}</h1>
                            </div>
                            <div className={cl.starBorder}>
                                <h4>Общая атмосфера</h4>
                                <img style={{width: '60px', height: '60px'}} src="/icon/star.png" alt="wwwww"/>
                                <h1>{placeRates?.atmosphere}</h1>
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
