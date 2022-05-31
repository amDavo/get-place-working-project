import React from 'react';
import './module.css'
import FavButton from "../UI/addToFavButton/FavButton";

const PlaceCardSmall = ({cardData, view}) => {


    return (
        <>
            <div className='card'>
                <a style={{textDecoration: "none", color: "black", margin: '10px'}} href={`/location/${cardData.id}`}>
                    <img className='card-Img' alt={'картинка'} src={`http://localhost:8080/images/${cardData.img}`}/>
                    <FavButton cardData={cardData}/>
                    <div className='text'>
                        <div className='text-holder'>
                            <div className='place-name'>
                                {cardData.place_name}
                            </div>
                            <div className='text-holder'>
                                <div className='rate'>{cardData.Rating}</div>
                                <img alt='rate' className='star'
                                     src="https://img.icons8.com/ios-glyphs/30/000000/star--v1.png"/>
                            </div>
                        </div>
                        <p>{cardData.location}</p>
                        <p>{cardData.category}</p>
                        <p>{cardData.free ? 'бесплатное' : 'платное'}</p>
                        <p>{cardData.working_hours}</p>
                    </div>
                    {/*<div className='rating'>*/}
                    {/*    {cardData.Rating*/}
                    {/*        ?*/}
                    {/*        (<p>{cardData.Rating}</p>)*/}
                    {/*        :*/}
                    {/*        (<p>{cardData['Rates.rate_number']}</p>)*/}
                    {/*    }*/}
                    {/*</div>*/}
                </a>
            </div>
            <FavButton cardData={cardData}/>
        </>
    );
};

export default PlaceCardSmall;