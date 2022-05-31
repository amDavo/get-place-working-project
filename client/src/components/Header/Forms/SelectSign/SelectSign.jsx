import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import ModalSignIn from "../Modal";



export default function SimpleSelect() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal]= useState(false)
    const navigate = useNavigate();
    const handleCloseModal=()=>{setOpenModal(false)}
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
    };
    const handleClose=()=>{
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

                <HowToRegIcon style={{ color: 'black' }} /> <DehazeIcon  style={{ color: 'black' }} />
            </Button>
            <Menu
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
            <div >
            {openModal&& <ModalSignIn  close={handleCloseModal} open={openModal}/>}
            </div>
            </>
    );
}

