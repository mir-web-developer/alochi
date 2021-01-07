import { Container, CssBaseline, Divider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Footer } from "../common/Footer";
import { MainAppBar } from "../common/MainAppBar";
import CardForPosts from "./CardForPosts";
import FlipMove from 'react-flip-move';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  }, []);

  return (
    <>
      <MainAppBar />
      <CssBaseline />
      
      <Container maxWidth="md">
       {/* <Typography variant="h6" display="block" gutterBottom> {posts.length}</Typography>
      <Divider /> */}
      <FlipMove >
        {posts.map(({ post, id }) => {
          return (
            <CardForPosts
              key={id}
              id={id}
              postImage={post.imageUrl}
              postTitle={post.title}
              postContent={post.content}
              postAuthor={post.author}
              postCreatedData={new Date(post.timestamp?.seconds * 1000).toUTCString()}
            />
          );
        })}
        </FlipMove>
      </Container>
      <Footer />
    </>
  );
}

export default Posts;

//Id cillum veniam eu Labore officia eu adipisicing eiusmod enim duis laboris.
//Voluptate cupidatat magna mollit fugiat sunt exercitation tempor dolor laborum sint deserunt incididunt occaecat.