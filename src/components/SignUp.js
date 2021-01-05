import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { auth, provider } from "../firebase";
import { NavLink, useHistory } from "react-router-dom";
import "../styles/SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { logIn } from "../reducers/userReducer";
import { useDispatch } from "react-redux";
import { FcGoogle } from 'react-icons/fc';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleSigninButton: {
    width: "100%",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  ////////////////////////////

  //////////////////////
  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: firstName + " " + lastName,
          photoURL: profilePic,
        });
        dispatch(
          logIn({
            displayName: authUser.user.displayName,
            photoURL: authUser.user.photoURL,
            email: authUser.user.email,
            uid: authUser.user.uid,
          })
        );
        console.log(authUser);
      })
      .catch((error) => {
        if (error) {
          toast.error(error.message);
        }
      });
    history.push("/");
    toast.success("Succesfully Signed Up");
  };

  const signin = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        logIn({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          uid: user.uid,
        })
      );
      if(user){
        history.push("/");
        toast.success("Succesfully Signed Up");
      }
    });
   
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Button
          className={classes.googleSigninButton}
          startIcon={<FcGoogle />}
          size="large"
          variant="contained"
          onClick={signin}
          color="default"
        >
          Sign up with Google
        </Button>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="profilePic"
                label="Profile pic URL"
                name="profilePic"
                value={profilePic}
                onChange={(e) => setProfilePic(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                <NavLink className="signUp__navLink" to="/signin">
                  Already have an account? Sign in
                </NavLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <ToastContainer position="bottom-center" />
    </Container>
  );
}
