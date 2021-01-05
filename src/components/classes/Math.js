import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CardInClasses from "../common/CardInClasses";

import { Grid } from "@material-ui/core";
import { MainAppBar } from "../common/MainAppBar";
import { Footer } from "../common/Footer";

export const Math = () => {
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
            <CardInClasses
            sectionName={"Brief A1"}
            sectionSubName={"Nemis tilida matnlar"}
            sectionImg={"https://source.unsplash.com/random"}
            />
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
