// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { signIn } from '../../../../redux/actions/userAction'
// import ModalSignIn from "./Modal";
//
//
// function SignIn() {
//   const [userSignIn, setUserSignIn] = useState({
//     email: '',
//     password: '',
//   });
//
//   const navigate = useNavigate();
//   const from = { pathname: '/main'};
//
//   const changeHandler = (e) => {
//     setUserSignIn((prev) => ({...prev, [e.target.name]: e.target.value}))
//   };
//   const dispatch = useDispatch();
//
//   const submitHandler = (e) => {
//     e.preventDefault();
//     let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]))
//     if (payload.length) {
//       payload = Object.fromEntries(payload);
//       dispatch(signIn(payload, navigate,from));
//     }
//   };
//
//   return (
//   <ModalSignIn />
//   )
// }
//
// export default SignIn;
