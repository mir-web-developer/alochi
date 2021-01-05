import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import "../../styles/LangCard.css";
import { CardActionArea } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

export const LangCard = ({ id, heading, text, img, link }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item key={id} xs={12} sm={6} md={4}>
        <NavLink className="langCard__classLink" to={link}>
          <CardActionArea>
            <Card className={classes.card}>
              <CardMedia 
                className={classes.cardMedia}
                image={img}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {heading}
                </Typography>
                <Typography>{text}</Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  Перейти
                </Button>
              </CardActions>
            </Card>
          </CardActionArea>
        </NavLink>
      </Grid>
    </>
  );
};
