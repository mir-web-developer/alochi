import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import { Container, CssBaseline } from "@material-ui/core";
import { MainAppBar } from "../common/MainAppBar";
import { Footer } from "../common/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight:"100vh",
    marginTop:"5vh"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function GermanStunde() {
  const classes = useStyles();
  const { stunde } = useSelector((state) => state.german);

  return (
      <>
      <MainAppBar />
    <CssBaseline />
    <Container maxWidth="md">
    <div className={classes.root}>
          
      {stunde.map((accordion) => {
       return <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{accordion.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {accordion.content}
            </Typography>
          </AccordionDetails>
        </Accordion>;
      })}
    </div>
    </Container>
    <Footer/>
    </>
  );
}
