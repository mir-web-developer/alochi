import {
  Button,
  Divider,
  Grid,
  LinearProgress,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import Icon from "@material-ui/core/Icon";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "../../styles/Comments.css";
import ChatIcon from "@material-ui/icons/Chat";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    margin: "auto",
    width: "50ch",
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      width:"31ch"
      
      
    }
  },
  sendButton: {
    width: 115,
    marginTop: theme.spacing(-5),
    marginLeft: "60%",
  },
  textArea: {
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    }
  },
  progress: {
    marginTop: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    }
  },
  input: {
    display: "none",
  },
  uploadButton: {
    marginTop: theme.spacing(3),
  },
  commentBoxTitle: {
    marginBottom: theme.spacing(2),
  },
}));

function Comments({ dbCollectionName }) {
  const username = useSelector((state) => state.user.user);
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.currentTarget.files[0]) {
      setImage(e.currentTarget.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
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
          toast.error(error.message);
          toast.error("Входи пожалуйста по братски");
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection(dbCollectionName).add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl: url,
                username: username.displayName,
                userPhoto: username.photoURL,
                userUid: username.uid,
                userEmail: username.email,
              });

              setProgress(0);
              setCaption("");
              setImage(""); //null
            });
        }
      );
    } else {
      db.collection(dbCollectionName).add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        caption: caption,
        username: username.displayName,
        userPhoto: username.photoURL,
        userUid: username.uid,
        userEmail: username.email,
      });

      setProgress(0);
      setCaption("");
      setImage("");
    }
  };

  return (
    <>
      <Divider />

      <div className={classes.root}>
        <Typography
          className={classes.commentBoxTitle}
          variant="h5"
          gutterBottom
        >
          <ChatIcon /> Comments
        </Typography>
        <Grid container spacing={3} direction="column">
          <form noValidate autoComplete="off">
            <Grid item>
              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Leave comment"
                className={classes.textArea}
                multiline
                variant="outlined"
                onChange={(event) => setCaption(event.currentTarget.value)}
                value={caption}
                rows={4}
              />
            </Grid>
          </form>

          <input
            accept="image/*"
            className="comments__input"
            id="contained-button-file"
            type="file"
            onChange={handleChange}
          />

          <label htmlFor="contained-button-file">
            <LinearProgress
              className={classes.progress}
              variant="determinate"
              value={progress}
              max="100"
            />

            <Button
              variant="contained"
              color="secondary"
              className={classes.uploadButton}
              startIcon={<CloudUploadIcon />}
              component="span"
              type="file"
              size="large"
            >
              Upload
            </Button>
          </label>
          {image?.name}
          <Button
            size="large"
            onClick={handleUpload}
            variant="contained"
            color="primary"
            className={classes.sendButton}
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default Comments;
