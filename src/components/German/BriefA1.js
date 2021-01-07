import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MainAppBar } from "../common/MainAppBar";
import { Footer } from "../common/Footer";
import Comments from "../common/Comments";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import ShowComments from "../common/ShowComments";
import { Divider, Grid } from "@material-ui/core";

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
    height: "100%",
    width: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "15%",
  },
  tabPanel: {
    width: "85%",
  },
}));

export default function BriefA1() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  ///////////////////////
  const [brief0, setBrief0] = useState([]);
  const [brief1, setBrief1] = useState([]);
  const [brief2, setBrief2] = useState([]);
  const [brief3, setBrief3] = useState([]);
  const [brief4, setBrief4] = useState([]);
  const [brief5, setBrief5] = useState([]);
  const [brief6, setBrief6] = useState([]);
  const [brief7, setBrief7] = useState([]);
  const [brief8, setBrief8] = useState([]);
  const [brief9, setBrief9] = useState([]);
  /////////////////////
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const german = useSelector((state) => state.german.briefA1);

  ////////////////////////
  useEffect(() => {
    db.collection(german[0].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief0(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[1].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief1(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });

    db.collection(german[2].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief2(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[3].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief3(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[4].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief4(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[5].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief5(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[6].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief6(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[7].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief7(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[8].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief8(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
    db.collection(german[9].dbCollectionName)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setBrief9(
          snapshot.docs.map((doc) => ({ comment: doc.data(), id: doc.id }))
        );
      });
  }, []);
  ///////////////////////////
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
          <Tab label="1" {...a11yProps(0)} />
          <Tab label="2" {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
          <Tab label="4" {...a11yProps(3)} />
          <Tab label="5" {...a11yProps(4)} />
          <Tab label="6" {...a11yProps(5)} />
          <Tab label="7" {...a11yProps(6)} />
          <Tab label="8" {...a11yProps(7)} />
          <Tab label="9" {...a11yProps(8)} />
          <Tab label="10" {...a11yProps(9)} />
        </Tabs>
        <div className={classes.tabPanel}>
          <TabPanel value={value} index={0}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[0].briefTitle}
            </Typography>
            {german[0].briefText}
            <Comments dbCollectionName={german[0].dbCollectionName} />
            {brief0.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* ///////////////////////////////////////////////// */}
          <TabPanel value={value} index={1}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[1].briefTitle}
            </Typography>
            {german[1].briefText}
            <Comments dbCollectionName={german[1].dbCollectionName} />
            {brief1.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={2}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[2].briefTitle}
            </Typography>
            {german[2].briefText}
            <Comments dbCollectionName={german[2].dbCollectionName} />
            {brief2.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={3}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[3].briefTitle}
            </Typography>
            {german[3].briefText}
            <Comments dbCollectionName={german[3].dbCollectionName} />
            {brief3.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={4}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[4].briefTitle}
            </Typography>
            {german[4].briefText}
            <Comments dbCollectionName={german[4].dbCollectionName} />
            {brief4.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={5}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[5].briefTitle}
            </Typography>
            {german[5].briefText}
            <Comments dbCollectionName={german[5].dbCollectionName} />
            {brief5.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={6}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[6].briefTitle}
            </Typography>
            {german[6].briefText}
            <Comments dbCollectionName={german[6].dbCollectionName} />
            {brief6.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={7}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[7].briefTitle}
            </Typography>
            {german[7].briefText}
            <Comments dbCollectionName={german[7].dbCollectionName} />
            {brief7.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={8}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[8].briefTitle}
            </Typography>
            {german[8].briefText}
            <Comments dbCollectionName={german[8].dbCollectionName} />
            {brief8.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
          <TabPanel value={value} index={9}>
            <Typography align="center" variant="h4" gutterBottom>
              {german[9].briefTitle}
            </Typography>
            {german[9].briefText}
            <Comments dbCollectionName={german[9].dbCollectionName} />
            {brief9.map(({ comment, id }) => {
              return (
                <div>
                  <ShowComments
                    userPhoto={comment.userPhoto}
                    username={comment.username}
                    caption={comment.caption}
                    imageUrl={comment.imageUrl}
                    userUid={comment.userUid}
                    userEmail={comment.userEmail}
                    createdTime={new Date(comment.timestamp?.seconds * 1000).toUTCString()}
                  />
                </div>
              );
            })}
          </TabPanel>
          {/* /////////////////////////////////////////////////////////// */}
        </div>
      </div>

      <Footer />
    </>
  );
}
