import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../../../redux/actions/userAction'

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(userSignUp).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(signUp(payload, navigate));
    }
  };

  return (
    <div>
    <form
    onSubmit={submitHandler}
    >
      <div>Регистрация</div>
      <div>
        <input
         onChange={changeHandler}
         value={userSignUp.name}
         type="text"
         name="name"
         placeholder="Имя"
       />
      </div>
      <div>
        <input
         onChange={changeHandler}
         value={userSignUp.email}
         type="email"
         name="email"
         placeholder="Email"
       />
      </div>
      <div>
        <input
         onChange={changeHandler}
         value={userSignUp.nickname}
         type="text"
         name="nickname"
         placeholder="nickName"
       />
      </div>
      <div>
        <input 
         onChange={changeHandler}
         value={userSignUp.password}
         type="password"
         name="password"
         placeholder="Пароль"
       />
      </div>
      <button>Зарегистироваться</button>
    </form>
  </div>
  )
}

export default SignUp;
