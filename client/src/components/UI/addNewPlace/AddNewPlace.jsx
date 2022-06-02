import React, {useState} from 'react';
import {addNewPlace} from "../../../redux/thunk/newPlaceThunk/newPlaceThunk";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import cl from './add.module.css'
import {Autocomplete} from "../../map/autocomplete/Autocomplete";


const AddNewPlace = () => {
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null);
    const [autocompleteValue, setAutocompleteValue] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeHandler = (event) => {
        setInputs(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    console.log(autocompleteValue, '0))))))')
    const addImgHandler = (event) => {
        setFile(event.target.files[0])
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addNewPlace({...inputs, file, location: autocompleteValue}))

        navigate('/main')
    }

    return (
        <>

            <h1 className={cl.head}>
                <center>Добавить новое место</center>
            </h1>
            <div className={cl.all}>
                <div className={cl.formDiv}>
                    <Form className={cl.formData} onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h5>Название заведения</h5>
                            <Form.Control
                                label="Название заведения"
                                variant="standard"
                                name='place_name'
                                type="text"
                                placeholder="Введите название"
                                value={inputs.place_name}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <h5>Адрес</h5>
                            <Autocomplete
                                setAutocompleteValue={setAutocompleteValue}
                                label="Адрес"
                                variant="standard"
                                name='location'
                                type="text"
                                value={inputs.location}
                                onChange={changeHandler}
                                placeholder="Введите адрес"
                            />
                        </Form.Group>


                        <Form.Group className='mb-3' controlId="formBasicPassword">
                            <h5>Время работы</h5>
                            <div className={cl.hoursDiv}>
                                <h6 className={cl.detDiv}>Открыто с</h6>
                                <Form.Control
                                    className={cl.hours}
                                    variant="standard"
                                    name='working_hoursFrom'
                                    type="time"
                                    value={inputs.working_hoursFrom}
                                    onChange={changeHandler}
                                />
                                <h6 className={cl.detDiv}>Открыто до</h6>
                                <Form.Control
                                    className={cl.hours}
                                    variant="standard"
                                    name='working_hoursTo'
                                    type="time"
                                    value={inputs.working_hoursTo}
                                    onChange={changeHandler}
                                />
                            </div>
                        </Form.Group>

                        <h5>Тип</h5>
                        <Form.Select
                            name='category'
                            onChange={changeHandler}
                        >
                            <option>Выберите тип</option>
                            <option value="Кафе">Кафе</option>
                            <option value="Библиотека">Библиотека</option>
                            <option value="Коворкинг">Коворкинг</option>
                            <option value="Опен Спейс">Опен Спейс</option>
                        </Form.Select>

                        <h5 className='mt-3'>Плата за вход</h5>
                        <Form.Select
                            name='free'
                            onChange={changeHandler}
                        >
                            <option>Формат входа</option>
                            <option value={true}>Бесплатно</option>
                            <option value={false}>Платно</option>
                        </Form.Select>
                        <Form.Group controlId="formFile" className="mb-3">
                            <h5 style={{marginTop: '20px'}}>Выберите изображение</h5>
                            <Form.Control
                                multiple="true"
                                type="file"
                                name="img"
                                accept="image/"
                                value={inputs.img}
                                onChange={addImgHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <h5>Описание</h5>
                            <Form.Control className={cl.description}
                                          label="Опишите локацию"
                                          variant="standard"
                                          name='description'
                                          type="text"
                                          placeholder="Опишите локацию"
                                          value={inputs.description}
                                          onChange={changeHandler}
                            />
                        </Form.Group>
                        <center>
                            <Button
                                className={cl.btn}
                                variant="outline-secondary"
                                type='submit'>
                                Добавить
                            </Button>
                        </center>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default AddNewPlace;