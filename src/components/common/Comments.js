import { Button, Icon, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { db, storage } from "../../firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

function Comments() {
  const username =useSelector((state) => state.user.user);
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (e) => {
    if (e.currentTarget.files[0]) {
      setImage(e.currentTarget.files[0]);
    }else{setImage(null)}
    
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
        //complete function ...
        //@ts-ignore
        storage
          .ref("images")
          //@ts-ignore
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("comments").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username.displayName,
              userPhoto: username.photoURL
            });
            
            setProgress(0);
            setCaption("");
            setImage(null);
            
          });
      }
    );
  };

  return (
    <div>
      <progress className="imageupload__progress" value={progress} max="100" />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Leave comment"
          multiline
          variant="outlined"
          onChange={(event) => setCaption(event.currentTarget.value)}
          value={caption}
        />
      </form>
      <input type="file" onChange={handleChange} />
      <Button
        onClick={handleUpload}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </div>
  );
}

export default Comments;
