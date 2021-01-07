import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(3),
    
  },
  rootRoot:{
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height:"100%"
  },
  content: {
    flex: "1 1"
  },
  cover: {
    width: "50%",
    height:150
  }
}));

export default function CardInClasses({sectionName, sectionSubName, sectionImg}) {
  const classes = useStyles();

  return (
    
    <Card  className={classes.root}>
       <CardActionArea>
         <div className={classes.rootRoot}>
      <div className={classes.details}>
      
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {sectionName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {sectionSubName}
          </Typography>
        </CardContent>
      </div>
     
      <CardMedia
        className={classes.cover}
        image={sectionImg}
        title="Live from space album cover"
      />
   </div>
   </CardActionArea>
    </Card>
    
    
  );
}
