import React, { useEffect, useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { MainAppBar } from "../common/MainAppBar";
import { Footer } from "../common/Footer";
import {
  CardMedia,
  Divider,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Comments from "../common/Comments";
import ShowComments from "../common/ShowComments";
import PostComments from "./PostComments";
import { db } from "../../firebase";
import PostShowComments from "./PostShowComments";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "5%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginBottom: "5%",
    borderRadius: 15,
  },
});

function Post() {
  const classes = useStyles();
  const history = useHistory();
  const post = useSelector((state) => state.posts.selectedPost);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");


  useEffect(() => {
    //@ts-ignore
    let unsubscribe;
    if (post.id) {
      unsubscribe = db
        .collection("posts")
        .doc(post.id)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, []);
  //   useEffect(()=>{
  //       if(post === null){
  //           history.push("/posts")
  //       }
  //   },[])
  return (
    <div>
      <MainAppBar />
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.root}>
          <Typography align="center" variant="h2" gutterBottom>
            {post.postTitle}
          </Typography>

          <Typography variant="overline" gutterBottom>
            Created Time: {post.postCreatedData}
          </Typography>
          <Divider />
          <Typography variant="overline" gutterBottom>
            Author: {post.postAuthor}
          </Typography>

          <CardMedia
            className={classes.media}
            image={post.postImage}
            title="Paella dish"
          />
          <Typography variant="body1" gutterBottom>
            {post.postContent}
          </Typography>
        </div>
        <Divider/>
        {/* ///////////////////////////////////////////// ////////////////////////////////////////*/}
        <PostComments  postId={post.id} />
        {comments.map(( comment ) => {
          return (
            <div>
              <PostShowComments
                userPhoto={comment.userPhoto}
                username={comment.username}
                caption={comment.caption}
                imageUrl={comment.imageUrl}
                userUid={comment.userUid}
                userEmail={comment.userEmail}
                createdTime={new Date(
                  comment.timestamp?.seconds * 1000
                ).toUTCString()}
              />
            </div>
          );
        })}
        {/* ////////////////////////////////////////////////////////// //////////////////////*/}
      </Container>

      <Footer />
    </div>
  );
}

export default Post;
