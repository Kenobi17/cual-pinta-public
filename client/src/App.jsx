import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//ROUTES
import CerveceriasRoute from "./routes/CerveceriasRoute";
import IndexRoute from "./routes/IndexRoute";
import RegisterRoute from "./routes/RegisterRoute";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <IndexRoute {...props} />} />
          <Route
            exact
            path="/cervecerias"
            render={(props) => <CerveceriasRoute {...props} />}
          />
          <Route
            exact
            path="/register"
            render={(props) => <RegisterRoute {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
