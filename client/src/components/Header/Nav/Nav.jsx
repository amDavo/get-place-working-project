import React, {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classes from './Nav.module.css'
import SimpleSelect from "../Forms/SelectSign/SelectSign";
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
            <div className ={classes.Navbar}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Link className="navbar-brand" to="/main">
                        <img style={{width: '', margin: '-40px -15px', height: '160px'}}/>
                    </Link>
                </div>
                <div className={classes.container_links}>

                    {user ? (
                        <>

                            <Button style={{color: 'white', fontFamily: 'font-family: \'Raleway\', sans-serif;'}}
                                    onClick={() => {
                                        dispatch(setViewNavBar(false))
                                        navigate("/auth/signout")
                                    }}>
                                Выйти
                            </Button>
                            <Button style={{color: 'white', fontFamily: 'font-family: \'Raleway\', sans-serif;'}}
                                    onClick={() => {
                                        dispatch(setViewNavBar(true))
                                        navigate("/newPlace")
                                    }}>
                                Добавить место
                            </Button>
                            <Button style={{color: 'white', fontFamily: 'font-family: \'Raleway\', sans-serif;'}}
                                    onClick={() => {
                                        dispatch(setViewNavBar(true))
                                        navigate("/profile")
                                    }}>
                                Профиль
                            </Button>

                        </>
                    ) : (
                        <>
                            <div className={classes.simpleSelect}>
                                <SimpleSelect/>
                            </div>
                        </>
                    )}
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
