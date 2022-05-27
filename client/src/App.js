import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './components/Header/PrivateRouter/PrivateRouter'
import SignOut from './components/Header/Forms/SignOut/SignOut'
import SignUp from './components/Header/Forms/SignUp/SignUp'
import SignIn from './components/Header/Forms/SignIn/SignIn'
import {checkAuth} from './redux/actions/userAction';
import Main from './components/Header/Main/Main'
import Nav from "./components/Header/Nav/Nav";
import ListOfCards from "./components/listOfCards/ListOfCards";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch])

    return (
        <>
            <div className="container py-5">
                <Nav/>
                <ListOfCards/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/auth/signout" element={<PrivateRoute><SignOut/></PrivateRoute>}/>
                    <Route path="/auth/signup" element={<SignUp/>}/>
                    <Route path="/auth/signin" element={<SignIn/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
