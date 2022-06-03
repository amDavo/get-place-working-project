import React from 'react';
import {useSelector} from "react-redux";

const Fav = () => {
    const fav = useSelector(state => state.userFavorites)

    console.log(fav)
    return (
        <div>

        </div>
    );
};

export default Fav;