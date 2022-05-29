const { REACT_APP_HOST: host } = process.env;

export const signUp = () => `${host}/auth/signup`;
export const signIn = () => `${host}/auth/signin`;
export const signOut = () => `${host}/auth/signout`;
export const checkAuth = () => `${host}/auth/check`;
export const signChange = () => `${host}/auth/signChange`;

export const getUser = (id) => `${host}/users/${id}`;
