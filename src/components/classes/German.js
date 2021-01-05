import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CardInClasses from "../common/CardInClasses";
import "../../styles/German.css"
import { Grid } from "@material-ui/core";
import { MainAppBar } from "../common/MainAppBar";
import { Footer } from "../common/Footer";
import { Route } from "react-router";
import BriefA1_1 from "../German/BriefA1_1";
import { NavLink } from "react-router-dom";

export const German = () => {
  return (
    <>
      <MainAppBar />
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            
            <CardInClasses
              sectionName={"Test"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            {/* //////////////////////////////////////// */}
            <NavLink className = "german__navLinkOfSection" to="/briefA1_1">
              <CardInClasses
                sectionName={"Brief A1"}
                sectionSubName={"Nemis tilida matnlar"}
                sectionImg={"https://source.unsplash.com/random"}
              />
            </NavLink>
            {/* //////////////////////////////////////// */}
            <CardInClasses
              sectionName={"Brief A2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Stunde"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Text A1"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Text A2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Text B1"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardInClasses
              sectionName={"Text B2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Wortschatz A1-A2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Wortschatz A2-B1"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Slayd"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Ferienjob"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Uber Stipendien"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
            <CardInClasses
              sectionName={"Bucher"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
