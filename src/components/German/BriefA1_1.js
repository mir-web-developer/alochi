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

export default function BriefA1_1() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  ///////////////////////
    const [comments , setComments] = useState([])
    /////////////////////
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  ////////////////////////
  useEffect(() => {
    db.collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({comment: doc.data(),id:doc.id}))
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
            Item One
          </Typography>
          Ut sit aliquip aliqua irure duis voluptate ad fugiat deserunt Lorem
          laboris. Qui sint officia ut enim incididunt ut aliqua laboris qui
          cupidatat. Deserunt ullamco laborum ipsum proident minim consectetur
          quis ad non. Consequat veniam enim exercitation exercitation dolor
          velit. Cillum reprehenderit ullamco nulla nulla ipsum ea minim ut
          laboris duis.
          <Comments />
        {comments.map(({comment , id}) => {
            return <div><img src={comment.userPhoto}/>{comment.username}{comment.caption}<img src={comment.imageUrl}/></div>
        })}
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={6}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Typography align="center" variant="h4" gutterBottom>
            Item One
          </Typography>
          Id velit aute aliqua veniam sunt laboris voluptate eu nostrud. Sint
          cupidatat occaecat ea labore exercitation exercitation. Est laboris
          velit aute nisi ex ex. In ad ea aliquip reprehenderit incididunt
          proident occaecat do qui.
        </TabPanel>
      </div>
    </div>
    
    <Footer/>
    </>
  );
}
