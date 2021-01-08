import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardActions,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/postsReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 200,
    marginTop: theme.spacing(3),

    marginBottom: theme.spacing(3),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    margin: "auto",
  },
  cover: {
    minWidth: "45%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    // marginRight:theme.spacing(1)
  },
  NavLink: {
    textDecoration: "none",
  },
}));

function CardForPosts({
  postCreatedData,
  id,
  postImage,
  postTitle,
  postContent,
  postAuthor,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log(
      postCreatedData,
      id,
      postImage,
      postTitle,
      postContent,
      postAuthor
    );
    dispatch(
      setPost({
        id: id,
        postImage: postImage,
        postTitle: postTitle,
        postContent: postContent,
        postAuthor: postAuthor,
        postCreatedData: postCreatedData,
      })
    );
  };

  return (
    <div>
      <NavLink className={classes.NavLink} to="/post">
        <Card onClick={handleChange} elevation={5} className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={postImage}
            title="Live from space album cover"
          />
          <CardActionArea>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography align="center" component="h5" variant="h5">
                {postTitle}
              </Typography>
              <Typography  variant="subtitle1" color="textSecondary">
                {postContent}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
            <Typography  variant="subtitle2" color="textSecondary">
            {postCreatedData}
              </Typography>
              
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              
            </div>
          </div>
          </CardActionArea>
        </Card>
      </NavLink>
    </div>
  );
}

export default CardForPosts;
