import React, {useState} from 'react';
import {setRatings} from "../../redux/thunk/ratesThunk/ratesThunk";
import {useDispatch} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import {Rating} from "@mui/material";
import cl from './details.module.css'
import {useParams} from "react-router-dom";


const RatingModal = ({children}) => {
    const [inputs, setInputs] = useState({})
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const {id} = useParams()

    const changeHandler = (event) => {
        setInputs(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const submitHandler = (event) => {
        console.log('got u')
        event.preventDefault()
        dispatch(setRatings({...inputs, place_id: id}))
        setShow(false)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <span variant="primary" onClick={handleShow}>
        {children}
      </span>

            <Modal className={cl.modalBody} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h5>
                        Расскажите нам о своих впечатлениях
                    </h5>
                </Modal.Header>
                <Modal.Body className={cl.modalBody}>
                    <form onSubmit={submitHandler}>
                        <div className={cl.voteDiv}>
                            <p className={cl.detailDiv}>Оцените качество Wi-Fi</p>
                            <Rating
                                name="wifi"
                                value={inputs.wifi}
                                onChange={changeHandler}
                            />
                            <p className={cl.detailDiv}>Оцените дружелюбность персонала</p>
                            <Rating
                                name="staff"
                                value={inputs.staff}
                                onChange={changeHandler}
                            />
                            <p className={cl.detailDiv}>Оцените уровень комфорта</p>
                            <Rating
                                name="comfort"
                                value={inputs.comfort}
                                onChange={changeHandler}
                            />
                            <p className={cl.detailDiv}>Оцените, как тихо было в заведении</p>
                            <Rating
                                name="noise"
                                value={inputs.noise}
                                onChange={changeHandler}
                            />
                            <p className={cl.detailDiv}>Оцените атмосферу в целом </p>
                            <Rating
                                name="atmosphere"
                                value={inputs.atmosphere}
                                onChange={changeHandler}
                            />
                        </div>
                        <Button className={cl.rateBtn} type='submit' variant='success'>Добавить оценку</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
};

export default RatingModal;

