import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//AUTHENTICATION LOGIC
import authentication from "./apis/authentication";
//ROUTES
import CerveceriasRoute from "./routes/CerveceriasRoute";
import CerveceriaPageRoute from "./routes/CerveceriaPageRoute";
import IndexRoute from "./routes/IndexRoute";
import RegisterRoute from "./routes/RegisterRoute";
import LoginRoute from "./routes/LoginRoute";
import Header from "./components/Header";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  const isAuth = async () => {
    try {
      const response = await authentication.get("/verify", {
        headers: { token: localStorage.token },
      });
      response.data === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    isAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} setAuth={setAuth} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) =>
              !isAuthenticated ? (
                <IndexRoute {...props} />
              ) : (
                <Redirect to="/cervecerias" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuthenticated ? (
                <RegisterRoute {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/cervecerias" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <LoginRoute {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/cervecerias" />
              )
            }
          />
          <Route
            exact
            path="/cervecerias"
            render={(props) => <CerveceriasRoute {...props} />}
          />
          <Route
            exact
            path="/cervecerias/:id"
            render={(props) => (
              <CerveceriaPageRoute
                {...props}
                isAuthenticated={isAuthenticated}
              />
            )}
          />
          <Route
            exact
            path="*"
            render={(props) =>
              !isAuthenticated ? (
                <IndexRoute {...props} />
              ) : (
                <Redirect to="/cervecerias" />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
