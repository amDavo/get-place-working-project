import React, {useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {addFavorite} from "../../../redux/thunk/favoritesThunks/addFavorite";
import './module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavButton = ({cardData}) => {
    const [show, setShow] = useState(false)
    const info = useSelector(state=>state.infoFavoriteIsSuccess)
    const dispatch = useDispatch();


    const addToFavHandler = () => {

        if( cardData.id){
            dispatch(addFavorite(cardData.id))
            setShow(true)
        }
    }

    return (
        <>
            <img alt='favorite'  className='fav-btn' src="https://img.icons8.com/stickers/100/000000/heart-plus.png"/>
        </>
    );
};

export default FavButton;