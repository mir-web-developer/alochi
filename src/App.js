import React, { useEffect } from "react";
import { auth } from "./firebase";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import { German } from "./components/classes/German";
import { English } from "./components/classes/English";
import { Math } from "./components/classes/Math";
import { IT } from "./components/classes/IT";
import { Physics } from "./components/classes/Physics";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "./reducers/userReducer";
import { RestClasses } from "./components/classes/RestClasses";
import BriefA1 from "./components/German/BriefA1";
import GermanTests5class from "./components/German/GermanTests-5class";
import Posts from "./components/posts/Posts";
import Post from "./components/posts/Post";
import AddPost from "./components/posts/AddPost";
import GermanStunde from "./components/German/GermanStunde";
import GermanTextA1 from "./components/German/GermanTextA1";
import GermanTests6class from "./components/German/GermanTests-6class";
import GermanTests7class from "./components/German/GermanTests-7class";
import GermanTests8class from "./components/German/GermanTests-8class";
import GermanWortschatzA1A2 from "./components/German/GermanWortschatzA1A2";
import GermanSlides from "./components/German/GermanSlides";
import GermanSlide from "./components/German/GermanSlide";
import GermanFerienjob from "./components/German/GermanFerienjob";
import GermanBucher from "./components/German/GermanBucher";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          logIn({
            email: authUser.email,
            uid: authUser.uid,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/signup" component={() => <SignUp />} />
        <Route path="/signin" component={() => <SignIn />} />
        <Route path="/class1" component={German} />
        <Route path="/class2" component={English} />
        <Route path="/class3" component={Math} />
        <Route path="/class4" component={IT} />
        <Route path="/class5" component={Physics} />
        <Route path="/class6" component={RestClasses} />
        <Route path="/posts" component={() => <Posts />} />
        <Route path="/post" component={() => <Post />} />
        <Route path="/addPost" component={() => <AddPost />} />
        {/* //////////////////// German Class ///////////////////////// */}
        <Route path="/german/briefA1" component={() => <BriefA1 />} />
        <Route path="/german/germanTests-5class" component={() => <GermanTests5class />} />
        <Route path="/german/germanTests-6class" component={() => <GermanTests6class />} />
        <Route path="/german/germanTests-7class" component={() => <GermanTests7class />} />
        <Route path="/german/germanTests-8class" component={() => <GermanTests8class />} />
        <Route path="/german/stunde" component={() => <GermanStunde />} />
        <Route path="/german/textA1" component={() => <GermanTextA1 />} />
        <Route path="/german/wortschatzA1A2" component={() => <GermanWortschatzA1A2 />} />
        <Route path="/german/slides" component={() => <GermanSlides />} />
        <Route path="/german/slide/:id" component={() => <GermanSlide />} />
        <Route path="/german/ferienjob" component={() => <GermanFerienjob />} />
        <Route path="/german/bucher" component={() => <GermanBucher />} />
      </Switch>

      <ToastContainer position="bottom-center" />
    </div>
  );
}
