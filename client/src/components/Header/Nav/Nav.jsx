import React, {useDispatch, useSelector} from 'react-redux'
import { Link, NavLink, useNavigate  } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classes from './Nav.module.css'
import SimpleSelect from "../Forms/SelectSign/SelectSign";
import logotip from '../Nav/logotip.png'
import {setViewNavBar} from "../../../redux/actions/viewNavBarAcction/viewNavBar.action";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Nav() {
  const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const navigate = useNavigate();

  return (
    <nav>
        <div className= {classes.container}>
      <div className={classes.logo}>
      <Link className="navbar-brand" to="/">
       <img style ={{width:'650px', margin:'-40px -50px', height:'150%'}} src={logotip}/>
          </Link>
      </div>
    <div className={classes.container_links}>

      {user ? (
        <>
         <Button style={{color: 'rgb(241, 250, 238)', fontFamily: 'Montserrat Alternates'}} onClick = {() => {
             dispatch(setViewNavBar(false))
             navigate("/auth/signout")}}>
          Выйти
          </Button>
         <Button style={{color: 'rgb(241, 250, 238)', fontFamily: 'Montserrat Alternates'}} onClick = {() => {
             dispatch(setViewNavBar(false))
             navigate("/newPlace")}}>
        Добавить место
        </Button>
           <Button style={{color: 'rgb(241, 250, 238)', fontFamily: 'Montserrat Alternates'}} onClick = {() => {
               dispatch(setViewNavBar(false))
               navigate("/location/:id")}}>
          Посмотреть места
          </Button>
            <Button style={{color: 'rgb(241, 250, 238)', fontFamily: 'Montserrat Alternates'}} onClick = {() => {
                dispatch(setViewNavBar(true))
                navigate("/profile")
            }}>
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
