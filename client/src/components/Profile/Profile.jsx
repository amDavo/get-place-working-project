import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { setUserInfo} from "../../redux/thunk/profileThunk/profileThunk";
import {signChange} from "../../redux/actions/userAction";
import {useNavigate} from "react-router-dom";
import PlaceCardSmall from "../placeCardSmall/PlaceCardSmall";
import {setInfoFavoriteIsSuccess} from "../../redux/actions/favoriteAction/favorite.action";
import {getFavorite} from "../../redux/thunk/favoritesThunks/addFavorite";

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userData)
    const userId = useSelector(state => state.user)
    const favorites = useSelector(state => state.userFavorites)
    const [show, setShow] = useState(false)
    const [userChange, setUserChange] = useState({
        name: '',
        email: '',
        password: '',
        nickname: ''
    });

    console.log(user, '======w=w=ww=w=w=')
    console.log(favorites)

    const navigate = useNavigate();
    useEffect(() => {
        // dispatch(setUserInfo(userId?.id))
        // dispatch(setFav(userId?.id))
        // dispatch(getFavorite())
        setUserChange(user)
    }, [])

    const changeHandler = (e) => {
        setUserChange((prev) => ({...prev, [e.target.name]: e.target.value}));
    };
    const submitHandler = (e) => {
        e.preventDefault();
        let payload = Object.entries(userChange).filter((el) => (el[1] ? el[1].trim() : el[1]));
        if (payload.length) {
            payload = Object.fromEntries(payload);
            dispatch(signChange(payload, navigate));
        }
    };
    return (<>

            <div>{user.name}</div>
            <div>
                {user.email}
            </div>
            <div>
                {user.nickname}
            </div>
            <button onClick={() => {
                setShow(prev => !prev)
            }}>
                {!show ? 'Редактировать' : 'Отменить'}
            </button>
            {show && (
                <form
                    onSubmit={submitHandler}
                >
                    <div>Изменить данные</div>
                    <div>
                        <input
                            onChange={changeHandler}
                            value={userChange.name}
                            type="text"
                            name="name"
                            placeholder="Имя"
                        />
                    </div>
                    <div>
                        <input
                            onChange={changeHandler}
                            value={userChange.email}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <input
                            onChange={changeHandler}
                            value={userChange.nickname}
                            type="text"
                            name="nickname"
                            placeholder="nickname"
                        />
                    </div>
                    <div>
                        <input
                            onChange={changeHandler}
                            value={userChange.password}
                            type="password"
                            name="password"
                            placeholder="Пароль"
                        />
                    </div>
                    <button>Сохранить</button>
                </form>
            )}
            {
                favorites?.length && favorites?.map(el =>
                    <PlaceCardSmall view={true} cardData={el} key={el.id}/>)
            }
        </>
    )
}

export default Profile