import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../../redux/actions/userAction'


function SignIn() {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const from = { pathname: '/'};

  const changeHandler = (e) => {
    setUserSignIn((prev) => ({...prev, [e.target.name]: e.target.value}))
  };
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignIn).filter((el) => (el[1] ? el[1].trim() : el[1]))
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signIn(payload, navigate,from));
    }
  };

  return (
    <div>
      <form
      onSubmit={submitHandler}
      >
        <div>Войти</div>
        <div>
          <input
           onChange={changeHandler}
           value={userSignIn.email}
           type="email"
           name="email"
           placeholder="Email"
         />
        </div>
        <div>
          <input 
           onChange={changeHandler}
           value={userSignIn.password}
           type="password"
           name="password"
           placeholder="Пароль"
         />
        </div>
        <button>Войти</button>
      </form>
    </div>
  )
}

export default SignIn;
