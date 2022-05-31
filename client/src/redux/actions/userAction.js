import {DELETE_USER, SET_IS_UNIQUE_NICK_NAME, SET_USER} from '../types/userTypes';
import * as endPoints from '../../config/endPoints';
import { disableLoader, enableLoader } from './loaderAction';
import ModalSignIn from "../../components/Header/Forms/SignIn/Modal";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
export const setIsUniqueNickName = (isUniqueNickName) => ({
  type: SET_IS_UNIQUE_NICK_NAME,
  payload: isUniqueNickName,
});

export const getUserFromServer = (id) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.getUser(id), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const currentUser = await response.json();
    dispatch(setUser(currentUser));
  }
  dispatch(disableLoader());
};

export const signUp = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signUp(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/');
  }
  else if(response.status===201){
    dispatch(setIsUniqueNickName(true))
  }
  else {
    navigate('/auth/signup');
  }
  dispatch(disableLoader());
};
export const signChange = (payload, navigate) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.signChange(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate('/profile');
  }

  else {
    navigate('/profile');
  }
  dispatch(disableLoader());
};

export const signIn = (payload, navigate, from) => async (dispatch) => {
  dispatch(enableLoader());
  const response = await fetch(endPoints.ModalSignIn(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
    navigate(from);
  } else {
    navigate('/auth/signin');
  }
  dispatch(disableLoader());
};

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const signOut = () => async (dispatch) => {
  const response = await fetch(endPoints.signOut(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const checkAuth = () => async (dispatch) => {
  const response = await fetch(endPoints.checkAuth(), {
    credentials: 'include',
  });
  if (response.status === 200) {
    const user = await response.json();
    dispatch(setUser(user));
  }
};


