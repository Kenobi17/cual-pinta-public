import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import loginLogo from "../assets/RegisterLogo.svg";
import LoginForm from "../components/LoginForm";
import "../css/Login.css";

const LoginRoute = ({ setAuth }) => {
  return (
    <div className="loginRoute">
      <Grid
        justify="center"
        alignItems="center"
        container
        className="mainContainer">
        <Grid container item xs={10} justify="center">
          <Grid item container md={6} sm={8} xs={12} justify="center">
            <LoginForm setAuth={setAuth} />
          </Grid>
          <Hidden smDown>
            <Grid item container xs={6} justify="center">
              <div id="loginLogo">
                <img src={loginLogo} alt="Iniciar Sesión" />
                <Typography variant="h3" component="h2" align="center">
                  Iniciá sesión
                </Typography>
                <Typography variant="h6" component="p" align="center">
                  Y compartí tu opinión acerca de las mejores cervecerias de
                  todo Tucumán
                </Typography>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginRoute;
