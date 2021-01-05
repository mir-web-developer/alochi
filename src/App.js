import React, { useEffect} from "react";
import "./styles.css";
import { auth} from "./firebase";
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
import RestClasses from "./components/classes/RestClasses";

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
      </Switch>
      <ToastContainer position="bottom-center" />
    </div>
  );
}
