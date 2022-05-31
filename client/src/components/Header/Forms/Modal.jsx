import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signIn} from "../../../redux/actions/userAction";
import {FormControl} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    alignItems:'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalSignIn({close,open}) {
    const [userSignIn, setUserSignIn] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const from = { pathname: '/main'};

    const changeHandler = (e) => {
        setUserSignIn((prev) => ({...prev, [e.target.name]: e.target.value}))
    };
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]))
        if (payload.length) {
            payload = Object.fromEntries(payload);
            dispatch(signIn(payload, navigate,from));
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
               <Box sx={style}>
                   <FormControl
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
                       <Button>Войти</Button>
                   </FormControl>
                </Box>
            </Modal>
        </div>
    );
}
