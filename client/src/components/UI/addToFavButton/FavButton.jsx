import React, {useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {addFavorite} from "../../../redux/thunk/favoritesThunks/addFavorite";
import './module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavButton = ({cardData}) => {
    const [show, setShow] = useState(false)
    const info = useSelector(state=>state.infoFavoriteIsSuccess)
    const dispatch = useDispatch();



    console.log(cardData)
    const addToFavHandler = (e) => {
        e.preventDefault()
        if( cardData.id){
            dispatch(addFavorite(cardData.id))
            setShow(true)
        }
    }

    return (<>
                <img className='fav-btn' onClick={addToFavHandler}  src='/icon/iconn.svg'/>
                {/*<FavoriteBorderIcon className='fav-btn' onClick={addToFavHandler}/>*/}
            {show&&(<div>
                {info}
            </div>)}
        </>
    );
};

export default FavButton;