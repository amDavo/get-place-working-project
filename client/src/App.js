import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/Header/PrivateRouter/PrivateRouter'
import SignOut from './components/Header/Forms/SignOut/SignOut'
import ModalSignUp from './components/Header/Forms/SignUp/ModalSignUp'
import Modal from './components/Header/Forms/SignIn/Modal'
import {checkAuth} from './redux/actions/userAction';
import Main from "./components/Header/Main/Main";
import AddNewPlace from "./components/UI/addNewPlace/AddNewPlace";
import Profile from "./components/Profile/Profile";
import PlaceDetails from "./components/placeDetails/PlaceDetails";
import Filters from "./components/filters/Filters";
import Nav from "./components/Header/Nav/Nav";
import ListOfCards from "./components/listOfCards/ListOfCards";


function App() {
    const dispatch = useDispatch();
    const viewNavBar = useSelector(state => state.viewNavBar)

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch])

    return (
        <>

            <div className='nav'>
                <div className='nav-child'>
                    <Nav/>
                </div>
                {!viewNavBar &&(
                <div className='filters'>
                    <Filters/>
                </div>)}
                <ListOfCards/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/auth/signout" element={<PrivateRoute><SignOut/></PrivateRoute>}/>
                    <Route path="/auth/signup" element={<ModalSignUp/>}/>
                    <Route path="/auth/signin" element={<Modal/>}/>
                    <Route path="/newPlace" element={<AddNewPlace/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/location/:id" element={<PlaceDetails/>}/>
                </Routes>
            </div>
        </>
    )

}

export default App;
