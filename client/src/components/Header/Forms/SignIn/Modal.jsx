import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../../../redux/actions/userAction";
import classes from './modal.module.css'
import {Button} from "react-bootstrap";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'White',
    // border: '5px solid rgb(168, 218, 220)',
    border: '1px solid black',
    boxShadow: 24,
    p: 8,
    borderRadius: 4,
    lineHeight: 3,
    textAlign: 'center',
};

export default function ModalSignIn({close, open}) {
    const [openView, setOpenView] = useState(false);
    const [userSignIn, setUserSignIn] = useState({
        email: '',
        password: '',
    });
    const errorSignIn = useSelector(state => state.errorSignIn)
    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if(user) handleClose()
    }, [user])

    useEffect(() => {
        if (open) setOpenView(true)
    }, [open])

    const handleClose = () => {
        setOpenView(false)
        // handleClose()
        navigate('/main')
    }
    const from = {pathname: '/main'};

    const changeHandler = (e) => {
        setUserSignIn((prev) => ({...prev, [e.target.name]: e.target.value}))
    };
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]))
        if (payload.length) {
            payload = Object.fromEntries(payload);
            dispatch(signIn(payload, navigate, from));
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
                    <div className = {classes.ModalIn}>Вход</div>
                    <form
                        onSubmit={submitHandler}
                    >

                        <Input
                            onChange={changeHandler}
                            value={userSignIn.email}
                            type="email"
                            name="email"
                            placeholder="Email"
                        />

                        <div>
                            <Input
                                onChange={changeHandler}
                                value={userSignIn.password}
                                type="password"
                                name="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <Button type ="submit" variant="outline-dark">Войти</Button>
                    </form>
                    {errorSignIn &&(
                        <div className = {classes.ErrorEmail}>
                            Вы ввели некорректные данные, попробуйте еще раз или зарегистрируйтесь
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
