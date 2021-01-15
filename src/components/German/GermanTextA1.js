import { Container, CssBaseline, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Footer } from "../common/Footer";
import { MainAppBar } from "../common/MainAppBar";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PostComments from "../posts/PostComments";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import PostShowComments from "../posts/PostShowComments";
import { changeSelectedText } from "../../reducers/germanTextA1Reducer";
import GermanComments from "./GermanComments";
import SentanceTable from "../common/SentanceTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    //   height: 224,
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "15%",
  },
  tabPanel: {
    width: "85%",
  },
}));

function GermanTextA1() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const selectedTextId = useSelector((state) => state.germanTextA1Reducer.textA1.selectedText);
  const texts = useSelector((state) => state.germanTextA1Reducer.textA1.texts);

  useEffect(() => {
    //@ts-ignore
    let unsubscribe;
    if (selectedTextId) {
      unsubscribe = db
        .collection("textA1")
        .doc(selectedTextId)
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
  return (
    <>
      <MainAppBar />
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {texts.map((text) => {
              return (
                <Tab
                  onClick={() => dispatch(changeSelectedText(text.textId))}
                  label={text.textLabel}
                  {...a11yProps(text.textProp)}
                />
              );
            })}

            {/* <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
          </Tabs>
          <div className={classes.tabPanel}>
          {texts.map((text) => {
            return (
              <TabPanel value={value} index={text.textProp}>
                <Typography align="center"variant="h5">{text.textTitle}</Typography><br/>
                <Typography variant="body1">{text.textContent} </Typography><br/>
                <Divider />
                <SentanceTable gaps={text.textA1Gaps} />
                <br/>
                <GermanComments postId={text.textId} />
                {comments.map((comment) => {
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
              </TabPanel>
            );
          })}
          </div>

          {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
        </div>
      <Footer />
    </>
  );
}

export default GermanTextA1;
