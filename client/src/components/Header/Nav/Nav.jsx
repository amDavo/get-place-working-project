import React, { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate  } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classes from './Nav.module.css'
import SimpleSelect from "../Forms/SelectSign/SelectSign";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Nav() {
  const user = useSelector((state) => state.user)

    const navigate = useNavigate();

  return (
    <nav>
        <div className= {classes.container}>
      <div className={classes.logo}>
      <Link className="navbar-brand" to="/">
            Get place
          </Link>
      </div>
    <div className={classes.container_links}>

      {user ? (
        <>
         <Button onClick = {() => {navigate("/auth/signout")}}>
          Выйти
          </Button>
         <Button onClick = {() => {navigate("/addPlace")}}>
        Добавить место
        </Button>
           <Button onClick = {() => {navigate("/place")}}>
          Места
          </Button>
            <Button onClick = {() => {navigate("/profile")}}>
           Профиль
           </Button>
          </>   
      ) : (
        <><div className={classes.simpleSelect}>
            <SimpleSelect />
        </div>
        </>
      )}

    </div>
    </div>
    </nav>
  )
}

export default Nav;
