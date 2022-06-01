import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signIn} from "../../../../redux/actions/userAction";
import classes from './modal.module.css'


const style = {
    position: 'absolute',
    top: '60%',
    left: '50%',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'White',
    // border: '5px solid rgb(168, 218, 220)',
    border: '1px solid black',
    boxShadow: 24,
    p: 13,
    borderRadius: 12,
    lineHeight: 4,
    textAlign: 'center',
};

export default function ModalSignIn({close, open}) {
    const [openView, setOpenView] = useState(false);
    const [userSignIn, setUserSignIn] = useState({
        email: '',
        password: '',
    });
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
        setUserSignIn((prev) => ({...prev, [e.target.name]: e.target.value}))
    };
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        console.log('popal')
        console.log(userSignIn)
        e.preventDefault();
        let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]))
        if (payload.length) {
            payload = Object.fromEntries(payload);
            dispatch(signIn(payload, navigate, from));
            handleClose()
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
                        <button className={classes.btnIn}>Войти</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}