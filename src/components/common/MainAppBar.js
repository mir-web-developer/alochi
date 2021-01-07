import React from "react";
import { auth } from "../../firebase";
import Toolbar from "@material-ui/core/Toolbar";
import { logOut } from "../../reducers/userReducer";
import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/MainAppBar.css";

const useStyles = makeStyles((theme) => ({
  appTitle: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

export const MainAppBar = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const dispatch = useDispatch();
  const singOut = () => {
    dispatch(logOut());
    auth.signOut();
    toast.info("Successfully signed out");
  };

  return (
    <>
      <AppBar className={classes.mainAppBar} position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography
            className={classes.appTitle}
            variant="h6"
            color="inherit"
            noWrap
          >
            <NavLink className="home_appButton_signin" to="/">
              {" "}
              Alochi.uz
            </NavLink>
          </Typography>
          {/* {user.email === "djalilovmir@gmail.com" ? () :()} */}
          <NavLink className="home_appButton_signin" to="/addPost">
            <Button className={classes.button} color="inherit">
              Add Post
            </Button>
          </NavLink>

          <NavLink className="home_appButton_signin" to="/posts">
            <Button className={classes.button} color="inherit">
              Posts
            </Button>
          </NavLink>

          {user ? (
            <>
              <div className="mainAppBar__displayName">{user.displayName}</div>{" "}
              {
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  className={classes.button}
                />
              }
              <Button color="inherit" onClick={singOut}>
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Link className="home_appButton_signin" to="/signin">
                <Button color="inherit">Вход</Button>
              </Link>
              <Link className="home_appButton_signin" to="/signup">
                <Button color="inherit">Регистрация</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
