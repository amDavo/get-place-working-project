import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signChange} from "../../redux/actions/userAction";
import classes from './Profile.module.css'
import {Button} from "react-bootstrap";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'White',
    // border: '5px solid rgb(168, 218, 220)',
    border: '1px solid black',
    boxShadow: 24,
    p: 8,
    borderRadius: 4,
    lineHeight: 3,
    textAlign: 'center',
};

export default function ProfileModal({close, open, user}) {
    const [openView, setOpenView] = useState(false);
    const [userChange, setUserChange] = useState({
        name: '',
        nickname: '',
        email: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (open) setOpenView(true)
        if (user) setUserChange(prev => ({...prev, name: user.name, nickname: user.nickname, email: user.email}))
    }, [open])

    const handleClose = () => {
        setOpenView(false)
        close()
        navigate('/profile')
    }
    const from = {pathname: '/profile'};

    const changeHandler = (e) => {
        setUserChange((prev) => ({...prev, [e.target.name]: e.target.value}))
    };
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        let payload = Object.entries(userChange).filter((el) => (el[1] ? el[1].trim() : el[1]))
        if (payload.length) {
            payload = Object.fromEntries(payload);
            dispatch(signChange(payload, navigate('/profile')));
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
                        <div className={classes.saveData}>Изменить данные</div>
                        <div className={classes.inp1}>
                            Имя:
                            <input
                                style={{width: '160px', height: '50px'}}
                                onChange={changeHandler}
                                value={userChange.name}
                                type="text"
                                name="name"
                                placeholder="Имя"
                            />
                        </div>
                        <div className={classes.inp2}>
                            Логин:
                            <input
                                style={{width: '160px', height: '50px'}}
                                onChange={changeHandler}
                                value={userChange.nickname}
                                type="text"
                                name="nickname"
                                placeholder="Логин"
                            />
                        </div>
                        <div className={classes.buttons}>
                            <Button type='submit' variant="outline-dark">Сохранить</Button>
                            <Button variant="outline-dark" onClick={handleClose}>Отменить</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}



