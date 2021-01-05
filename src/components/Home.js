import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@material-ui/core";
import { MainAppBar } from "./common/MainAppBar";
import { Footer } from "./common/Footer";
import { HeroUnit } from "./mainPage/HeroUnit";
import { CardGrid } from "./mainPage/CardGrid";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainAppBar />
      <main>
        {/* Hero unit */}
        <HeroUnit />
        <CardGrid />
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
      <ToastContainer position="bottom-center" />
    </React.Fragment>
  );
}
