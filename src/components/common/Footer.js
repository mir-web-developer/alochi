import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: theme.spacing(3)
  }
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Alochi
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </>
  );
};
