import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";

//ROUTES
import CerveceriasRoute from "./routes/CerveceriasRoute";
import IndexRoute from "./routes/IndexRoute";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <IndexRoute {...props} />} />
          <Route
            exact
            path="/cervecerias"
            render={(props) => <CerveceriasRoute {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
