import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFavorite} from "../../../redux/thunk/favoritesThunks/addFavorite";
import './module.css'

const FavButton = ({cardData}) => {
    const [show, setShow] = useState(false)
    const info = useSelector(state => state.infoFavoriteIsSuccess)
    const dispatch = useDispatch();

    const addToFavHandler = () => {
        if (cardData.id) {
            dispatch(addFavorite(cardData.id))
            setShow(true)
        }
    }

    return (<>
            <button><img className='fav-btn' onClick={() => addToFavHandler()} src='/icon/iconn.svg'/></button>
            {/*<FavoriteBorderIcon className='fav-btn' onClick={addToFavHandler}/>*/}
            {show && (<div>
                {info}
            </div>)}
        </>
    );
};

export default FavButton;