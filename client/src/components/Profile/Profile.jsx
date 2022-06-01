import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setUserInfo} from "../../redux/thunk/profileThunk/profileThunk";
import {signChange} from "../../redux/actions/userAction";
import {useNavigate} from "react-router-dom";
import PlaceCardSmall from "../placeCardSmall/PlaceCardSmall";
import classes from './Profile.module.css'
import ProfileModal from './ProfileModal'

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userData)
    const userId = useSelector(state => state.user)
    const favorites = useSelector(state => state.userFavorites)
    const [show, setShow] = useState(false)
    const [viewModal, setViewModal] = useState(false)
    const [userChange, setUserChange] = useState({
        name: '',
        email: '',
        password: '',
        nickname: ''
    });

    console.log(user, '======w=w=ww=w=w=')

    const handleClose=()=>{
        setViewModal(false)
    }
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(setUserInfo(userId?.id))
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
            <div className = {classes.Profile}>
                <div className = {classes.Data}>Данные профиля</div>
                <div className = {classes.Name}>Имя: <input type = "text" value={user.name}/></div>
                <div className = {classes.Login}>Логин: <input type = "text" value={user.nickname}/></div>
                <div className={classes.Email}>E-mail: <input type = "text" value={user.email}/></div>
            </div>
            <button className = {classes.BtnProf} onClick={() => {
                setShow(prev => !prev)
                setViewModal(prev=> !prev)
            }}>
                {!show ? 'Редактировать' : 'Отменить'}
            </button>
            {show && (
                <ProfileModal open={viewModal} close={handleClose} user={user}/>
            )
            }
        </>
    )
}

export default Profile;
