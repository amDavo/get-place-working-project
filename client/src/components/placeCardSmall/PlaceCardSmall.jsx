import React from 'react';
import {Rating} from "@mui/material";
import './module.css'

const PlaceCardSmall = ({cardData}) => {

    return (
        <>
            <div className='card'>
                <a style={{textDecoration: "none", color: "black", margin: '10px' }} href={`/location/${cardData.id}`}>
                    <img alt={'картинка'} src={cardData.img}/>
                    <div>
                        <p className= 'place-name'>{cardData.place_name}</p>
                        <p>{cardData.location}</p>
                        <p>{cardData.category}</p>
                        <p>{cardData.free ? 'бесплатное' : 'платное'}</p>
                        <p>{cardData.working_hours}</p>
                    </div>
                    <div className='rating'>
                        {cardData.Rating
                            ?
                            ( <Rating  name="read-only" sx={{color: '#212121'}} value={+cardData.Rating} readOnly />)
                            :
                            (<h3> {cardData['Rates.Type.type_name']}   <Rating name="read-only" value={ cardData['Rates.rate_number']} readOnly /></h3>)
                        }
                    </div>
                </a>
            </div>
        </>
    );
};

export default PlaceCardSmall;