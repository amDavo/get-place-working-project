import React, {useState} from 'react';
import {addNewPlace} from "../../../redux/thunk/newPlaceThunk/newPlaceThunk";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const AddNewPlace = () => {
    const [inputs, setInputs] = useState({})
    const [file, setFile] = useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeHandler = (event) => {
        setInputs(prev => ({...prev, [event.target.name]: event.target.value}))
    }


    const addImgHandler = (event) => {
        setFile(event.target.files[0])
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addNewPlace({...inputs, file}))
        navigate('/main')
    }

    return (
        <>

            {/*<TextField*/}
            {/*    id="outlined-name"*/}
            {/*    label="Name"*/}
            {/*    value='ss'*/}
            {/*/>*/}


            <form onSubmit={submitHandler}>
                <input
                    name='place_name'
                    type="text"
                    value={inputs.place_name}
                    onChange={changeHandler}
                />
                <input
                    name='location'
                    type="text"
                    value={inputs.location}
                    onChange={changeHandler}
                />
                <input
                    name="img"
                    type="file"
                    accept="image/*"
                    value={inputs.img}
                    onChange={addImgHandler}
                />
                <select
                    name='category'
                    onChange={changeHandler}>
                    <option>Open this select menu</option>
                    <option value="Cafe">Cafe</option>
                    <option value="library">library</option>
                    <option value="Co-working">co-working</option>
                    <option value="Public space">Public space</option>
                </select>
                <select
                    name='free'
                    onChange={changeHandler}>
                    <option>is it paid?</option>
                    <option value='true'>Free</option>
                    <option value="false">Paid</option>
                </select>
                <input
                    name="working_hoursFrom"
                    type="time"
                    value={inputs.working_hoursFrom}
                    onChange={changeHandler}
                />
                <input
                    name="working_hoursTo"
                    type="time"
                    value={inputs.working_hoursTo}
                    onChange={changeHandler}
                />
                <button type='submit'>ADD</button>
            </form>
        </>
    );
};

export default AddNewPlace;