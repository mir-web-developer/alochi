import React from "react";
import { MainAppBar } from "../common/MainAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Footer } from "../common/Footer";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: "0",
    minHeight: "100vh",
    paddingTop: theme.spacing(5),
  },
  root: {
    display: 'flex',
    width: "90%",
    margin:"0 auto",
    height:"400px",
    marginBottom: "30px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "80%"
  },
  content: {
    flex: '1 1',
  },
  cover: {
    width: "100%",
  }
}));



function GermanFerienjob() {
  const classes = useStyles();


  const cards = useSelector(state => state.germanFerienjob)
  return (
    <div>
      <MainAppBar />
      <CssBaseline />
      <Container className={classes.container} maxWidth="md">
    {cards.map(card => {
      return <Card  className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" align="center" variant="h5">
            {card.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {card.subtitle}
          </Typography>
        </CardContent>
        
      </div>
      <CardMedia
        className={classes.cover}
        image={card.img}
        title="Live from space album cover"
      />
    </Card>
    })}
      </Container>
      <Footer />
    </div>
  );
}

export default GermanFerienjob;
