import React, { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Nav() {
  const user = useSelector((state) => state.user)

  return (
    <nav>
    <div>
      <ul>
      {user ? (
        <>
        <li> <NavLink to="/auth/signout">
          Выйти
          </NavLink></li>
        <li> <NavLink to="/addPlace">
        Добавить место
        </NavLink></li> 
          <li> <NavLink to="/place">
          Места
          </NavLink></li> 
           <li> <NavLink to="/profile">
           Профиль
           </NavLink></li> 
          </>   
      ) : (
        <>
         <li> <NavLink to="/auth/signup">
          Зарегистрироваться
          </NavLink></li>
          <li> <NavLink to="/auth/signin">
          Войти
          </NavLink></li>
        </>
      )}
      </ul>
    </div>
    </nav>
  )
}

export default Nav;
