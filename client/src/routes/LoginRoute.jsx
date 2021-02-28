import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { useHistory } from "react-router-dom";
import loginLogo from "../assets/RegisterLogo.svg";
import LoginForm from "../components/LoginForm";
import "../css/Login.css";

const LoginRoute = ({ setAuth }) => {
  let history = useHistory();
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
            <Typography
              variant="subtitle2"
              component="h2"
              align="center"
              style={{ color: "#F6C90E", marginTop: "-50px" }}>
              ¿No tenés una cuenta? Hace click{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/register");
                }}
                href="/register"
                style={{ color: "#F6C90E" }}
                underline="always">
                aquí
              </a>{" "}
              para registrarte
            </Typography>
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
