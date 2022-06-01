import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPlaceDetails} from "../../redux/thunk/placeDetailsThunk/placeDetailsThunk";
import {useParams} from "react-router-dom";
import cl from './details.module.css'
import '../../App.css'
import {Rating} from "@mui/material";
import {Button} from "react-bootstrap";
import {setRatings} from "../../redux/thunk/ratesThunk/ratesThunk";
import Comments from "../comments/Comments";

const PlaceDetails = () => {
    const placeInfo = useSelector(state => state.placeDetails)
    const dispatch = useDispatch()
    const {id} = useParams()
    const [inputs, setInputs] = useState({})


    useEffect(() => {
        dispatch(getPlaceDetails(id))
        console.log(inputs, '-------')

    }, [inputs])


    const changeHandler = (event) => {
        setInputs(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const submitHandler = (event) => {
        console.log('got u')
        event.preventDefault()
        dispatch(setRatings({...inputs, place_id: id}))
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
                </div>
                <form onSubmit={submitHandler}>
                    <div className={cl.voteDiv}>
                        <h3>ВайФай</h3>
                        <Rating
                            name="wifi"
                            value={inputs.wifi}
                            onChange={changeHandler}
                        />
                        <h3>Персонал</h3>
                        <Rating
                            name="staff"
                            value={inputs.staff}
                            onChange={changeHandler}
                        />
                        <h3>Комфорт</h3>
                        <Rating
                            name="comfort"
                            value={inputs.comfort}
                            onChange={changeHandler}
                        />
                        <h3>Шум</h3>
                        <Rating
                            name="noise"
                            value={inputs.noise}
                            onChange={changeHandler}
                        />
                        <h3>Атмосфера</h3>
                        <Rating
                            name="atmosphere"
                            value={inputs.atmosphere}
                            onChange={changeHandler}
                        />
                    </div>
                    <Button type='submit' variant='success'>Добавить оценку</Button>
                </form>
            </div>
            <Comments id={id}/>
        </>
    );
}

export default PlaceDetails;
