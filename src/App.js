import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./pages";
import Profile from "./pages/profile";
import Login from "./pages/login";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
