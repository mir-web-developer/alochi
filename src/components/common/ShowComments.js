import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import CardMedia from "@material-ui/core/CardMedia";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    marginTop:theme.spacing(0),
    marginLeft:theme.spacing(45)
    
  },
  inline: {
    display: "inline",
  },
  media: {
    width: "100%",
    borderRadius: 10,
    marginTop: theme.spacing(3),
  },
  currentSender: {
    marginLeft: theme.spacing(38),
  }
}));

export default function ShowComments({
  userPhoto,
  username,
  caption,
  imageUrl,
  userUid,
  userEmail,
  createdTime
}) {
  const classes = useStyles();

  const currentUser = useSelector((state) => state.user.user);

  return (
    <List className={classes.root}>
         
      <ListItem
        className={userUid === currentUser?.uid ? classes.currentSender : ""}
        alignItems="flex-start"
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userPhoto} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {userEmail}
              </Typography>
              {` — ${caption}`}
              <img
                className={classes.media}
                src={imageUrl}
              />
              {createdTime}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider  variant="middle"  />
    </List>
  );
}
