import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  mainText: {
    fontFamily:"Andale Mono, monospace"
  }
}));

export const HeroUnit = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            className={classes.mainText}
          >
            {/* Album layout */}
            {/* Alochi */}
            Отличник.ру       </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {/* Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely. */}
            {/* / Mirjakhon⭐ */}
            Дистанционное обучение информатики и других предметов.<br/>
            Разработчик💻: <b>Миржахон</b>
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <NavLink className="home_appButton_signin" to="/posts">
                  
                  <Button variant="contained" color="primary">
                    {/* Posts */}
                    Посты
                  </Button>
                </NavLink>
              </Grid>
              <Grid item>
              <NavLink className="home_appButton_signin" to="/addPost">
                <Button variant="outlined" color="primary">
                  {/* Add Post */}
                  Добавить пост
                </Button>
                </NavLink>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};
