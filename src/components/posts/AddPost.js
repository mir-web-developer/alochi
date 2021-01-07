import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import { Icon, LinearProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { Footer } from "../common/Footer";
import { MainAppBar } from "../common/MainAppBar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
      [theme.breakpoints.down('sm')]: {
        width: "45ch",
      },
    },
    display: "flex",
    justifyContent: "center",

    flexDirection: "column",
    marginTop: "10%",
    alignItems: "center",
  },
  input: {
    display: "none",
  },
  button:{
      width:"100%",
      height:50
  },
  title:{
      fontSize:"3ch",
      width:"100%"
  },
  sendButton : {
    marginBottom:"40%"
  }
}));

export default function AddPost() {
  const classes = useStyles();
  const username = useSelector((state) => state.user.user);
    const history = useHistory()
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] =useState("")

  const handleChange = (e) => {
    if (e.currentTarget.files[0]) {
      setImage(e.currentTarget.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              title: title,
              content:content,
              imageUrl: url,
              author: username.displayName,
            });
            setProgress(0);
            setTitle("");
            setContent("")
            setImage(null);
            toast.warning('✔ Post Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                history.push("/posts")
          });
      }
    );
  };



  return (
    <>
    <MainAppBar />
    <form className={classes.root} noValidate autoComplete="off">
        <Typography className={classes.title} variant="button"  gutterBottom align="center">
            Add Post
        </Typography>
      <TextField
        multiline
        rowsMax={4}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        onChange={(event) => setTitle(event.currentTarget.value)}
        value={title}
      />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleChange}
      />
<label htmlFor="contained-button-file">
      <Button
        size="large"
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<Icon>image</Icon>}
        component="span"

      >
        Upload
      </Button>
      {image?.name}
      {progress > 0 ? ( <LinearProgress variant="determinate" value={progress} />) : ("")}
     
      </label>
      <TextField
        multiline
        rowsMax={4}
        id="outlined-basic"
        label="Content"
        variant="outlined"
        onChange={(event) => setContent(event.currentTarget.value)}
        value={content}
      />
<label>
      <Button
        variant="contained"
        color="primary"
        className={`${classes.button} ${classes.sendButton}`}
        endIcon={<Icon>send</Icon>}
        size="large"
        onClick={handleUpload}
      >
        Send
      </Button>
      </label>
    </form>
    <Footer />
    </>
  );
}
