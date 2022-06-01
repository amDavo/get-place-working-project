import React, {useState} from 'react';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import ModalSignIn from "../SignIn/Modal";
import ModalSignUp from "../SignUp/ModalSignUp";

export default function SimpleSelect() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal] = useState(false)
    const [openModalSignUp, setOpenModalSignUp] = useState(false)
    const navigate = useNavigate();
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const handleCloseModalSignUp = () => {
        setOpenModalSignUp(false)
    }
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseSignIn = () => {
        setAnchorEl(null);
        navigate("/auth/signin")
        setOpenModal(true)
    };
    const handleCloseSignUp = () => {
        setAnchorEl(null);
        navigate("/auth/signup")
        setOpenModalSignUp(true)
    };
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <div>
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >

                    <HowToRegIcon style={{
                        color: 'rgb(241, 250, 238)',
                        marginBottom: '5px',
                        width: '50px',
                        height: '70px',
                        marginRight: '40px'
                    }}/> <DehazeIcon style={{
                    color: 'rgb(241, 250, 238)',
                    marginBottom: '5px',
                    width: '50px',
                    height: '70px',
                    marginRight: '40px',
                    marginLeft: '-30px'
                }}/>
                </Button>
                <Menu style={{marginTop: '80px'}}
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                      }}
                      transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                      }}
                >
                    <MenuItem onClick={handleCloseSignUp}>Зарегистироваться</MenuItem>
                    <MenuItem onClick={handleCloseSignIn}>Войти</MenuItem>
                </Menu>
            </div>
            <div>
                {openModal && <ModalSignIn close={handleCloseModal} open={openModal}/>}
            </div>
            <div>
                {openModalSignUp && <ModalSignUp close={handleCloseModalSignUp} open={openModalSignUp}/>}
            </div>
        </>
    );
}

