import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CardInClasses from "../common/CardInClasses";
import "../../styles/German.css";
import { Grid } from "@material-ui/core";
import { MainAppBar } from "../common/MainAppBar";
import { Footer } from "../common/Footer";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import BriefA1 from "../../backgroundPics/germanMainSection/BriefA1.svg";
import BriefA2 from "../../backgroundPics/germanMainSection/BriefA2.svg";
import test from "../../backgroundPics/germanMainSection/test.svg";
import TextA1 from "../../backgroundPics/germanMainSection/TextA1.svg";
import TextA2 from "../../backgroundPics/germanMainSection/TextA2.svg";
import TextB1 from "../../backgroundPics/germanMainSection/TextB1.svg";
import TextB2 from "../../backgroundPics/germanMainSection/TextB2.svg";
import lessonstunde from "../../backgroundPics/germanMainSection/lessonstunde.svg";
import wortschatzA1_A2 from "../../backgroundPics/germanMainSection/wortschatzA1_A2.svg";
import wortschatzA2_B1 from "../../backgroundPics/germanMainSection/wortschatzA2_B1.svg";
import slide from "../../backgroundPics/germanMainSection/slide.svg";
import ferienjob from "../../backgroundPics/germanMainSection/ferienjob.svg";
import bucher from "../../backgroundPics/germanMainSection/bucher.svg";
import stipendien from "../../backgroundPics/germanMainSection/stipendien.svg";

export const German = () => {
  return (
    <>
      <MainAppBar />
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <NavLink
              className="german__navLinkOfSection"
              to="/german/germanTests-5class"
            >
              <CardInClasses
                sectionName={"Test 5-class"}
                sectionSubName={"Nemis tilidan testlar"}
                sectionImg={test}
              />
            </NavLink>
         {/* ///////////////////////////////////////////////// */}
         <NavLink
              className="german__navLinkOfSection"
              to="/german/germanTests-6class"
            >
              <CardInClasses
                sectionName={"Test 6-class"}
                sectionSubName={"Nemis tilidan testlar"}
                sectionImg={test}
              />
            </NavLink>
            <NavLink
              className="german__navLinkOfSection"
              to="/german/germanTests-7class"
            >
              <CardInClasses
                sectionName={"Test 7-class"}
                sectionSubName={"Nemis tilidan testlar"}
                sectionImg={test}
              />
            </NavLink>
         
            <NavLink
              className="german__navLinkOfSection"
              to="/german/germanTests-8class"
            >
              <CardInClasses
                sectionName={"Test 8-class"}
                sectionSubName={"Nemis tilidan testlar"}
                sectionImg={test}
              />
            </NavLink>
         
         
            {/* //////////////////////////////////////// */}
            <NavLink className="german__navLinkOfSection" to="/german/briefA1">
              <CardInClasses
                sectionName={"Brief A1"}
                sectionSubName={"Nemis tilida matnlar"}
                sectionImg={BriefA1}
              />
            </NavLink>
            {/* //////////////////////////////////////// */}
            <CardInClasses
              sectionName={"Brief A2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={BriefA2}
            />
            <NavLink className="german__navLinkOfSection" to="/german/stunde">
              <CardInClasses
                sectionName={"Stunde"}
                sectionSubName={"Nemis tilidan testlar"}
                sectionImg={lessonstunde}
              />
            </NavLink>
            <NavLink className="german__navLinkOfSection" to="/german/textA1">
            <CardInClasses
              sectionName={"Text A1"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={TextA1}
            />
            </NavLink>
            <CardInClasses
              sectionName={"Text A2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={TextA2}
            />
            <CardInClasses
              sectionName={"Text B1"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={TextB1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardInClasses
              sectionName={"Text B2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={TextB2}
            />
            
            <NavLink className="german__navLinkOfSection" to="/german/wortschatzA1A2">
            <CardInClasses
              sectionName={"Wortschatz A1-A2"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={wortschatzA1_A2}
            />
            </NavLink>
            <CardInClasses
              sectionName={"Wortschatz A2-B1"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={wortschatzA2_B1}
            />
              <NavLink className="german__navLinkOfSection" to="/german/slides">
            <CardInClasses
              sectionName={"Slayd"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={slide}
            />
            </NavLink>
            <NavLink className="german__navLinkOfSection" to="/german/ferienjob">
            <CardInClasses
              sectionName={"Ferienjob"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={ferienjob}
            />
            </NavLink>
            <CardInClasses
              sectionName={"Uber Stipendien"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={stipendien}
            />
             <NavLink className="german__navLinkOfSection" to="/german/bucher">
            <CardInClasses
              sectionName={"Bucher"}
              sectionSubName={"Nemis tilidan testlar"}
              sectionImg={bucher}
            />
            </NavLink>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
