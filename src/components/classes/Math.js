import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CardInClasses from "../common/CardInClasses";
import { Grid } from "@material-ui/core";
import { MainAppBar } from "../common/MainAppBar";
import { Footer } from "../common/Footer";
import algebra from "../../backgroundPics/mathMainSection/algebra.svg"
import geometry from "../../backgroundPics/mathMainSection/geometry.svg"
import mathetest from "../../backgroundPics/mathMainSection/mathetest.svg"
import olimpmathe from "../../backgroundPics/mathMainSection/olimpmathe.svg"
import oliyMathe from "../../backgroundPics/mathMainSection/oliyMathe.svg"
import books from "../../backgroundPics/mathMainSection/books.svg"


export const Math = () => {
  return (
    <>
      <MainAppBar />
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} sm={6} md={8}>
            <CardInClasses
              sectionName={"Олимпиада"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={olimpmathe}
            />
            <CardInClasses
              sectionName={"Тесты"}
              sectionSubName={"Nemis tilida matnlar"}
              sectionImg={mathetest}
            />
            <CardInClasses
              sectionName={"Геометрия"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={geometry}
            />
            <CardInClasses
              sectionName={"Алгебра"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={algebra}
            />
            <CardInClasses
              sectionName={"Книги"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={books}
            />
            <CardInClasses
              sectionName={"Высшая математика"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={oliyMathe}
            />
            {/* <CardInClasses
              sectionName={"Text B1"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={"https://source.unsplash.com/random"}
            /> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/*             
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
            /> */}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
