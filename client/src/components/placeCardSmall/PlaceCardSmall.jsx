import React from 'react';
import {Rating} from "@mui/material";
import './module.css'
import FavButton from "../UI/addToFavButton/FavButton";
import {Link, useNavigate} from "react-router-dom";

const PlaceCardSmall = ({cardData}) => {

    const navigate = useNavigate()

    const cardHandler = (e) => {
        e.preventDefault()
        navigate(`/location/${cardData.id}`)
    }

    return (
        <>
            <div className='card'>
                <Link style={{textDecoration: "none", color: "black", margin: '10px'}} to={`/location/${cardData.id}`}>
                    <img alt={'картинка'} src={`http://localhost:8080/images/${cardData.img}`}/>
                    <FavButton cardData={cardData}/>
                    <div className='text'>
                        <div className='text-holder'>
                             <div className='place-name'>
                                 {cardData.place_name.length < 21 ? cardData.place_name : cardData.place_name.slice(0,20)+'...'}
                             </div>
                             <div className='text-holder'>
                                 <div className= 'rate' >{cardData.Rating}</div>
                                 <img alt='rate' className='star' src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png"/>

                             </div>
                        </div>
                            <p>{cardData.location.length < 21 ? cardData.location : cardData.location.slice(0,20)+'...'}</p>
                            {/*<p>{cardData.category}</p>*/}
                            <p>{cardData.free ? 'Бесплатное' : 'Платное'}</p>
                            <p> Время : {cardData.working_hours}</p>
                        </div>
                    {/*<div className='rating'>*/}
                    {/*    {cardData.Rating*/}
                    {/*        ?*/}
                    {/*        (<p>{cardData.Rating}</p>)*/}
                    {/*        :*/}
                    {/*        (<p>{cardData['Rates.rate_number']}</p>)*/}
                    {/*    }*/}
                    {/*</div>*/}
                </Link>
            </div>
        </>
    );
};

export default PlaceCardSmall;