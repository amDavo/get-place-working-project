import React, {useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {addFavorite} from "../../../redux/thunk/favoritesThunks/addFavorite";

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

    return (<>
        <button onClick={addToFavHandler}>add to favorite</button>
            {show&&(<div>
                {info}
            </div>)}
        </>
    );
};

export default FavButton;