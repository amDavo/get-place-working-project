import React, {useState} from 'react';
import {addNewPlace} from "../../../redux/thunk/newPlaceThunk/newPlaceThunk";
import {useDispatch} from "react-redux";

const AddNewPlace = () => {
    const [inputs, setInputs] = useState({})
    const [types, setTypes] = useState([])
    const dispatch = useDispatch()

    const changeHandler = (event) => {
        setInputs(prev => ({...prev, [event.target.name]: event.target.value}))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(addNewPlace(inputs))
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    name='placeName'
                    type="text"
                    value={inputs.placeName}
                    onChange={changeHandler}
                />
                <input
                    name='address'
                    type="text"
                    value={inputs.address}
                    onChange={changeHandler}
                />
                <input
                    name="img"
                    type="file"
                    accept="image/*"
                    value={inputs.img}
                    onChange={changeHandler}
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
                <input
                    name="free"
                    type="checkbox"
                    value={inputs.free}
                    onChange={changeHandler}
                />

                <input
                    name="hoursFrom"
                    type="time"
                    value={inputs.hoursFrom}
                    onChange={changeHandler}
                />
                <input
                    name="hoursTo"
                    type="time"
                    value={inputs.hoursTo}
                    onChange={changeHandler}
                />
                <button type='submit'>ADD</button>
            </form>
        </>
    );
};

export default AddNewPlace;