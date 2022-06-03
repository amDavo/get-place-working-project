import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsUniqueNickName, signUp} from "../../../../redux/actions/userAction";
import classes from "./ModalSignUp.module.css";
import {Button} from "react-bootstrap";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'White',
    // border: '5px solid rgb(168, 218, 220)',
    border: '2px solid black',
    boxShadow: 24,
    p: 8,
    borderRadius: 4,
    lineHeight: 4,
    textAlign: 'center',

};

export default function ModalSignUp({close, open}) {
    const [openView, setOpenView] = useState(false);
    const [userSignUp, setUserSignUp] = useState({
        name: '',
        email: '',
        password: '',
        nickname: ''
    });

    const isNotUnique = useSelector(state => state.isUniqueNickName)

    const navigate = useNavigate();

    useEffect(() => {
        if (open) setOpenView(true)
    }, [open])

    const handleClose = () => {
        setOpenView(false)
        close()
        navigate('/main')
    }
    const from = {pathname: '/main'};

    const changeHandler = (e) => {
        setUserSignUp((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(setIsUniqueNickName(false))
        let payload = Object.entries(userSignUp).filter((el) => (el[1] ? el[1].trim() : el[1]));
        if (payload.length) {
            payload = Object.fromEntries(payload);
            dispatch(signUp(payload, navigate));
        }
    };

    return (
        <div>
            <Modal
                open={openView}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className = {classes.ModalUp}>Регистрация</div>
                    <form
                        onSubmit={submitHandler}
                    >
                        <Input
                            onChange={changeHandler}
                            value={userSignUp.name}
                            type="text"
                            name="name"
                            placeholder="Имя"
                        />
                        <div>
                            <Input
                                onChange={changeHandler}
                                value={userSignUp.email}
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <Input
                                onChange={changeHandler}
                                value={userSignUp.nickname}
                                type="text"
                                name="nickname"
                                placeholder="Логин"
                            />
                        </div>
                        <div>
                            <Input
                                onChange={changeHandler}
                                value={userSignUp.password}
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <Button type ="submit" variant="outline-dark">Зарегистрироваться</Button>
                    </form>
                    <div className={classes.uniqueLog}>
                        {isNotUnique && (<span>
            Данный логин уже используется, попробуйте ввести другой
          </span>)}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}