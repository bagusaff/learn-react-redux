import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages";
import Profile from "./pages/profile";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
