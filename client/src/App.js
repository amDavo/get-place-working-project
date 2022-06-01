import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {checkAuth} from './redux/actions/userAction';
import StartPage from "./pages/StartPage/StartPage";
import MainPage from "./pages/MainPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import SignOut from "./components/Header/Forms/SignOut/SignOut";
import PrivateRouter from "./components/Header/PrivateRouter/PrivateRouter";
import ModalSignUp from "./components/Header/Forms/SignUp/ModalSignUp";
import Modal from "./components/Header/Forms/SignIn/Modal"
import AddNewPlace from "./components/UI/addNewPlace/AddNewPlace";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Header/Nav/Nav";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch])

    return (
        <>

            <div className='nav-child'>
                <Nav/>
            </div>


            <Routes>
                {/*<Route path="/" element={<Main/>}/>*/}
                <Route path="/" element={<StartPage/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/location/:id" element={<PlaceDetailsPage/>}/>
                <Route path="/auth/signout" element={<PrivateRouter><SignOut/></PrivateRouter>}/>
                <Route path="/auth/signup" element={<ModalSignUp/>}/>
                <Route path="/auth/signin" element={<Modal/>}/>
                <Route path="/newPlace" element={<AddNewPlace/>}/>
                <Route path="/profile" element={<Profile/>}/>
                {/*<Route path="/location/:id" element={<PlaceDetails/>}/>*/}
            </Routes>

        </>
    )

}

export default App;
