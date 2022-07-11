// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import Signup from "./components/signup";
import Userform from "./components/userform";
import Orgform from "./components/orgform";
import Job from "./components/jobs";

// import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        {/* <ProtectedRoute
          exact
          path="/uploadresume"
          component={() => <Userform />}
        /> */}
        <Route exact path="/userform" component={Userform} />
        <Route exact path="/orgform" component={Orgform} />
        <Route exact path="/jobs" component={Job} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
